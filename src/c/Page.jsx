/** @param {{ title: string; }} obj */
// @ts-ignore
export function Page({ title, children=[] }) {
  return <html>
    <head>
      <meta content={title} property="og:title" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{ title }</title>
      <style>{`
        :root { --primary: white; --primary-background: #222; }
        body { color: var(--primary); background: var(--primary-background); }
        a { color: #5fb1f5; }
        a:visited { color: #9bd2ff; }
      `}</style>
    </head>
    <body>
      { children }
    </body>
  </html>;
}
