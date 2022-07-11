// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react/index.d.ts
// s/React\.//g
// s/React\.\w+Props<(.+)>;/$1;/g
// s/React\.\w+Attributes<(.+)>.+;/$1;/g
// s/: (.+);/: Props<$1>;/g
type Pick_<T, K> = { [P in K & keyof T]: T[P]; };
type Replace<T, K extends PropertyKey, V> = T extends Record<K, unknown> ? Omit<T, K> & Record<K, V> : T;
type Props<T> = Partial<Replace<Replace<Omit<T, `${string}_NODE` | `DOCUMENT_${string}`>, "style", string>, "children", HTMLElement[]>> & Pick_<T, "href" | "src">;

interface Document {
  createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, props?: Props<HTMLElementTagNameMap[K]>, ...children: HTMLElement[]): HTMLElementTagNameMap[K];
}

interface HTMLMetaElement {
  property?: string;
  charset?: string;
}

declare namespace JSX {
  interface IntrinsicElements {
    // HTML
    a: Props<HTMLAnchorElement>;
    abbr: Props<HTMLElement>;
    address: Props<HTMLElement>;
    area: Props<HTMLAreaElement>;
    article: Props<HTMLElement>;
    aside: Props<HTMLElement>;
    audio: Props<HTMLAudioElement>;
    b: Props<HTMLElement>;
    base: Props<HTMLBaseElement>;
    bdi: Props<HTMLElement>;
    bdo: Props<HTMLElement>;
    big: Props<HTMLElement>;
    blockquote: Props<HTMLQuoteElement>;
    body: Props<HTMLBodyElement>;
    br: Props<HTMLBRElement>;
    button: Props<HTMLButtonElement>;
    canvas: Props<HTMLCanvasElement>;
    caption: Props<HTMLElement>;
    cite: Props<HTMLElement>;
    code: Props<HTMLElement>;
    col: Props<HTMLTableColElement>;
    colgroup: Props<HTMLTableColElement>;
    data: Props<HTMLDataElement>;
    datalist: Props<HTMLDataListElement>;
    dd: Props<HTMLElement>;
    del: Props<HTMLModElement>;
    details: Props<HTMLDetailsElement>;
    dfn: Props<HTMLElement>;
    dialog: Props<HTMLDialogElement>;
    div: Props<HTMLDivElement>;
    dl: Props<HTMLDListElement>;
    dt: Props<HTMLElement>;
    em: Props<HTMLElement>;
    embed: Props<HTMLEmbedElement>;
    fieldset: Props<HTMLFieldSetElement>;
    figcaption: Props<HTMLElement>;
    figure: Props<HTMLElement>;
    footer: Props<HTMLElement>;
    form: Props<HTMLFormElement>;
    h1: Props<HTMLHeadingElement>;
    h2: Props<HTMLHeadingElement>;
    h3: Props<HTMLHeadingElement>;
    h4: Props<HTMLHeadingElement>;
    h5: Props<HTMLHeadingElement>;
    h6: Props<HTMLHeadingElement>;
    head: Props<HTMLHeadElement>;
    header: Props<HTMLElement>;
    hgroup: Props<HTMLElement>;
    hr: Props<HTMLHRElement>;
    html: Props<HTMLHtmlElement>;
    i: Props<HTMLElement>;
    iframe: Props<HTMLIFrameElement>;
    img: Props<HTMLImageElement>;
    input: Props<HTMLInputElement>;
    ins: Props<HTMLModElement>;
    kbd: Props<HTMLElement>;
    keygen: Props<HTMLElement>;
    label: Props<HTMLLabelElement>;
    legend: Props<HTMLLegendElement>;
    li: Props<HTMLLIElement>;
    link: Props<HTMLLinkElement>;
    main: Props<HTMLElement>;
    map: Props<HTMLMapElement>;
    mark: Props<HTMLElement>;
    menu: Props<HTMLElement>;
    menuitem: Props<HTMLElement>;
    meta: Props<HTMLMetaElement>;
    meter: Props<HTMLMeterElement>;
    nav: Props<HTMLElement>;
    noindex: Props<HTMLElement>;
    noscript: Props<HTMLElement>;
    object: Props<HTMLObjectElement>;
    ol: Props<HTMLOListElement>;
    optgroup: Props<HTMLOptGroupElement>;
    option: Props<HTMLOptionElement>;
    output: Props<HTMLOutputElement>;
    p: Props<HTMLParagraphElement>;
    param: Props<HTMLParamElement>;
    picture: Props<HTMLElement>;
    pre: Props<HTMLPreElement>;
    progress: Props<HTMLProgressElement>;
    q: Props<HTMLQuoteElement>;
    rp: Props<HTMLElement>;
    rt: Props<HTMLElement>;
    ruby: Props<HTMLElement>;
    s: Props<HTMLElement>;
    samp: Props<HTMLElement>;
    slot: Props<HTMLSlotElement>;
    script: Props<HTMLScriptElement>;
    section: Props<HTMLElement>;
    select: Props<HTMLSelectElement>;
    small: Props<HTMLElement>;
    source: Props<HTMLSourceElement>;
    span: Props<HTMLSpanElement>;
    strong: Props<HTMLElement>;
    style: Props<HTMLStyleElement>;
    sub: Props<HTMLElement>;
    summary: Props<HTMLElement>;
    sup: Props<HTMLElement>;
    table: Props<HTMLTableElement>;
    template: Props<HTMLTemplateElement>;
    tbody: Props<HTMLTableSectionElement>;
    td: Props<HTMLTableDataCellElement>;
    textarea: Props<HTMLTextAreaElement>;
    tfoot: Props<HTMLTableSectionElement>;
    th: Props<HTMLTableHeaderCellElement>;
    thead: Props<HTMLTableSectionElement>;
    time: Props<HTMLTimeElement>;
    title: Props<HTMLTitleElement>;
    tr: Props<HTMLTableRowElement>;
    track: Props<HTMLTrackElement>;
    u: Props<HTMLElement>;
    ul: Props<HTMLUListElement>;
    "var": Props<HTMLElement>;
    video: Props<HTMLVideoElement>;
    wbr: Props<HTMLElement>;
    webview: Props<HTMLElement>;
    // webview: Props<HTMLWebViewElement>;

    // SVG
    svg: Props<SVGSVGElement>;

    animate: Props<SVGElement>; // TODO: It is SVGAnimateElement but is not in TypeScript's lib.dom.d.ts for now.
    animateMotion: Props<SVGElement>;
    animateTransform: Props<SVGElement>; // TODO: It is SVGAnimateTransformElement but is not in TypeScript's lib.dom.d.ts for now.
    circle: Props<SVGCircleElement>;
    clipPath: Props<SVGClipPathElement>;
    defs: Props<SVGDefsElement>;
    desc: Props<SVGDescElement>;
    ellipse: Props<SVGEllipseElement>;
    feBlend: Props<SVGFEBlendElement>;
    feColorMatrix: Props<SVGFEColorMatrixElement>;
    feComponentTransfer: Props<SVGFEComponentTransferElement>;
    feComposite: Props<SVGFECompositeElement>;
    feConvolveMatrix: Props<SVGFEConvolveMatrixElement>;
    feDiffuseLighting: Props<SVGFEDiffuseLightingElement>;
    feDisplacementMap: Props<SVGFEDisplacementMapElement>;
    feDistantLight: Props<SVGFEDistantLightElement>;
    feDropShadow: Props<SVGFEDropShadowElement>;
    feFlood: Props<SVGFEFloodElement>;
    feFuncA: Props<SVGFEFuncAElement>;
    feFuncB: Props<SVGFEFuncBElement>;
    feFuncG: Props<SVGFEFuncGElement>;
    feFuncR: Props<SVGFEFuncRElement>;
    feGaussianBlur: Props<SVGFEGaussianBlurElement>;
    feImage: Props<SVGFEImageElement>;
    feMerge: Props<SVGFEMergeElement>;
    feMergeNode: Props<SVGFEMergeNodeElement>;
    feMorphology: Props<SVGFEMorphologyElement>;
    feOffset: Props<SVGFEOffsetElement>;
    fePointLight: Props<SVGFEPointLightElement>;
    feSpecularLighting: Props<SVGFESpecularLightingElement>;
    feSpotLight: Props<SVGFESpotLightElement>;
    feTile: Props<SVGFETileElement>;
    feTurbulence: Props<SVGFETurbulenceElement>;
    filter: Props<SVGFilterElement>;
    foreignObject: Props<SVGForeignObjectElement>;
    g: Props<SVGGElement>;
    image: Props<SVGImageElement>;
    line: Props<SVGLineElement>;
    linearGradient: Props<SVGLinearGradientElement>;
    marker: Props<SVGMarkerElement>;
    mask: Props<SVGMaskElement>;
    metadata: Props<SVGMetadataElement>;
    mpath: Props<SVGElement>;
    path: Props<SVGPathElement>;
    pattern: Props<SVGPatternElement>;
    polygon: Props<SVGPolygonElement>;
    polyline: Props<SVGPolylineElement>;
    radialGradient: Props<SVGRadialGradientElement>;
    rect: Props<SVGRectElement>;
    stop: Props<SVGStopElement>;
    switch: Props<SVGSwitchElement>;
    symbol: Props<SVGSymbolElement>;
    text: Props<SVGTextElement>;
    textPath: Props<SVGTextPathElement>;
    tspan: Props<SVGTSpanElement>;
    use: Props<SVGUseElement>;
    view: Props<SVGViewElement>;
  }

  interface Element extends HTMLElement {}
}
