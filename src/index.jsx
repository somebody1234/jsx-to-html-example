import * as path from 'path';
import * as fs from 'fs/promises';
import * as proc from 'child_process';
import * as url from 'url';
import { Page } from './c/Page.js';

/** @param {string} html */
function element(html) {
  const element = document.createElement('div');
  element.innerHTML = html;
  return element.children[0];
}

/** @param {string} path_ */
function resolve(path_) {
  return path.join(url.fileURLToPath(new URL('.', import.meta.url)), path_);
}

/** @param {proc.ChildProcess} proc */
function stdoutOf(proc) {
  return new Promise((ret, err) => {
    let data = '';
    proc.stdout?.on('data', d => data += d);
    proc.stdout?.on('end', () => ret(data));
    proc.stdout?.on('error', e => err(e));
    proc.on('error', e => err(e));
    proc.on('exit', () => ret(data));
  });
}

export default <Page title="this is a document">
  <h1 style="color: #bbb">This webpage was made in JSX</h1>
  <p><i>Here is some <b>test</b> <span style="color: red">for<span style="color: green">mat</span>ting</span>.</i></p>
  <p>HTML files like <a href="untouched.html">this one</a> are copied directly to the output.</p>
  <p>You can include JSX files...</p>
  {(await import('./included.js')).included}
  <p>... and HTML files...</p>
  {element(await fs.readFile(resolve('./included.html'), { encoding: 'utf-8' }))}
  <p>... using normal Node APIs (This isn't a framework, after all).</p>
  <p>You can run shell commands:</p>
  <pre><code>{await stdoutOf(proc.exec('echo This is running on $(uname -r)'))}</code></pre>
</Page>;
