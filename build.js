import * as os from 'os';
import * as fs from 'fs/promises';
import * as path from 'path';
import esbuild from 'esbuild';
import { JSDOM } from 'jsdom';

/** @param {string} path_ @returns {AsyncGenerator<string>} */
async function *walkDir(path_) {
  for (const file of await fs.readdir(path_, { withFileTypes: true })) {
    const full = path.join(path_, file.name);
    console.log(full);
    if (file.isDirectory()) {
      yield *walkDir(full);
    } else {
      yield full;
    }
  }
}

const transpileDir = await fs.mkdtemp(os.tmpdir() + '/');
await fs.copyFile('package.dummy.json', path.join(transpileDir, 'package.json'));

/** @type {string[]} */
const files = [];

for await (const path_ of walkDir('src')) {
  switch (path.extname(path_)) {
    case '.jsx': case '.ts': case '.tsx': {
      files.push(path_);
      break;
    }
    default: {
      const dest = path.join(transpileDir,  path.relative('src', path_));
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.copyFile(path_, dest);
      break;
    }
  }
}

console.log(transpileDir);
await esbuild.build({ entryPoints: files, outbase: 'src', outdir: transpileDir, jsxFactory: 'globalThis.document.createElement' });

/** @param {Document} document */
function patchCreateElement(document) {
  const $c = document.createElement.bind(document);
  /** @type {<K extends keyof HTMLElementTagNameMap>(tagName: K, props?: Props<HTMLElementTagNameMap[K]>, ...children: HTMLElement[]) => HTMLElementTagNameMap[K]} */
  function createElement(tagName, props, ...children) {
    if (typeof tagName === 'string') {
      const element = $c(tagName);
      for (const prop in props) {
        element.setAttribute(prop, String(props[prop]));
      }
      element.append(...children.flat());
      return element;
    } else {
      // @ts-ignore
      const element = tagName({ ...props, children: children.flat() });
      return element;
    }
  }
  // @ts-ignore
  document.createElement = createElement;
}

for await (const path_ of walkDir(transpileDir)) {
  const ext = path.extname(path_);
  const dest_ = path.relative(transpileDir, path_);
  const dest = path.join('dist', dest_.slice(0, dest_.length - ext.length) + '.html');
  switch (ext) {
    case '.html': {
      await fs.mkdir(path.dirname(dest), { recursive: true });
      await fs.copyFile(path_, dest);
      break;
    }
    case '.js': {
      const page = new JSDOM();
      // @ts-ignore
      const document = globalThis.document = page.window.document;
      patchCreateElement(document);
      const module = await import(path_);
      if (module.default) {
        await fs.mkdir(path.dirname(dest), { recursive: true });
        await fs.writeFile(dest, '<!DOCTYPE html>' + module.default.outerHTML);
      }
      break;
    }
  }
}
