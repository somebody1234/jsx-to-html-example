/** @param {{ title: string; }} obj */
// @ts-ignore
export function Page({ title, children=[] }) {
  return <html>
    <head>
      <meta content={title} property="og:title" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{ title }</title>
    </head>
    <body>
      { children }
    </body>
  </html>;
}
