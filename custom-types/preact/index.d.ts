// import * as React from 'react'
declare namespace preact {
  //
  // React Elements
  // ----------------------------------------------------------------------

  interface ComponentProps<C extends Component<any> | FunctionalComponent<any>> {
    children?: VNode[]
    key?: string | number | any
    ref?: (el: C) => void
  }

  interface DangerouslySetInnerHTML {
    __html: string
  }

  interface PreactHTMLAttributes {
    dangerouslySetInnerHTML?: DangerouslySetInnerHTML
    key?: string
    ref?: (el?: Element) => void
  }

  interface VNode<P = {}> {
    nodeName: string | ComponentConstructor<P> | FunctionalComponent<P>
    attributes: P
    children: VNode[]
    key: string
  }
  //
  // React Nodes
  // http://facebook.github.io/react/docs/glossary.html
  // ----------------------------------------------------------------------

  type PreactText = string | number
  type PreactChild = VNode | PreactText

  // Should be Array<ReactNode> but type aliases cannot be recursive
  type PreactFragment = {} | Array<PreactChild | any[] | boolean>
  type PreactNode = PreactChild | PreactFragment | boolean | null | undefined

  interface ComponentLifecycle<P, S> {
    componentWillMount?(): void
    componentDidMount?(): void
    componentWillUnmount?(): void
    componentWillReceiveProps?(nextProps: P, nextContext: any): void
    shouldComponentUpdate?(nextProps: P, nextState: S, nextContext: any): boolean
    componentWillUpdate?(nextProps: P, nextState: S, nextContext: any): void
    componentDidUpdate?(previousProps: P, previousState: S, previousContext: any): void
  }

  interface FunctionalComponent<P = {}> {
    (props?: Readonly<{ children?: PreactNode }> & Readonly<P>, context?: any): JSX.Element
    displayName?: string
    defaultProps?: Partial<P>
  }

  interface ComponentConstructor<P = {}, S = {}> {
    new (props?: P, context?: any): Component<P, S>
  }

  interface ChildContextProvider<C> {
    getChildContext(): C
  }

  // Type alias for a component considered generally, whether stateless or stateful.
  type AnyComponent<P = {}, S = {}> = FunctionalComponent<P> | typeof Component

  abstract class Component<P, S> {
    constructor(props?: P, context?: any)

    static displayName?: string
    static defaultProps?: any

    state: S
    props: Readonly<{ children?: PreactNode }> & Readonly<P>
    context: any
    base: HTMLElement

    linkState: (name: string) => (event: Event) => void

    setState<K extends keyof S>(state: Pick<S, K>, callback?: () => void): void
    setState<K extends keyof S>(fn: (prevState: S, props: P) => Pick<S, K>, callback?: () => void): void

    forceUpdate(callback?: () => void): void

    abstract render(props?: P /* & ComponentProps<this> */, state?: S, context?: any): JSX.Element | null | false
  }
  interface Component<P = {}, S = {}> extends ComponentLifecycle<P, S> {}

  function h<PropsType>(
    node: ComponentConstructor<PropsType, any> | FunctionalComponent<PropsType>,
    params: PropsType,
    ...children: (JSX.Element | JSX.Element[] | string)[]
  ): JSX.Element
  function h(
    node: string,
    params: HTMLAttributes & SVGAttributes & { [propName: string]: any },
    ...children: (JSX.Element | JSX.Element[] | string)[]
  ): JSX.Element
  function render(node: JSX.Element, parent: Element | Document | null, mergeWith?: Element): Element
  function rerender(): void
  function cloneElement(element: JSX.Element, props: any): JSX.Element

  var options: {
    syncComponentUpdates?: boolean
    debounceRendering?: (render: () => void) => void
    vnode?: (vnode: VNode) => void
    event?: (event: Event) => Event
  }

  // JSX Related
  // ----------------------

  interface SVGAttributes extends HTMLAttributes {
    accentHeight?: number | string
    accumulate?: 'none' | 'sum'
    additive?: 'replace' | 'sum'
    alignmentBaseline?:
      | 'auto'
      | 'baseline'
      | 'before-edge'
      | 'text-before-edge'
      | 'middle'
      | 'central'
      | 'after-edge'
      | 'text-after-edge'
      | 'ideographic'
      | 'alphabetic'
      | 'hanging'
      | 'mathematical'
      | 'inherit'
    allowReorder?: 'no' | 'yes'
    alphabetic?: number | string
    amplitude?: number | string
    arabicForm?: 'initial' | 'medial' | 'terminal' | 'isolated'
    ascent?: number | string
    attributeName?: string
    attributeType?: string
    autoReverse?: number | string
    azimuth?: number | string
    baseFrequency?: number | string
    baselineShift?: number | string
    baseProfile?: number | string
    bbox?: number | string
    begin?: number | string
    bias?: number | string
    by?: number | string
    calcMode?: number | string
    capHeight?: number | string
    clip?: number | string
    clipPath?: string
    clipPathUnits?: number | string
    clipRule?: number | string
    colorInterpolation?: number | string
    colorInterpolationFilters?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
    colorProfile?: number | string
    colorRendering?: number | string
    contentScriptType?: number | string
    contentStyleType?: number | string
    cursor?: number | string
    cx?: number | string
    cy?: number | string
    d?: string
    decelerate?: number | string
    descent?: number | string
    diffuseConstant?: number | string
    direction?: number | string
    display?: number | string
    divisor?: number | string
    dominantBaseline?: number | string
    dur?: number | string
    dx?: number | string
    dy?: number | string
    edgeMode?: number | string
    elevation?: number | string
    enableBackground?: number | string
    end?: number | string
    exponent?: number | string
    externalResourcesRequired?: number | string
    fill?: string
    fillOpacity?: number | string
    fillRule?: 'nonzero' | 'evenodd' | 'inherit'
    filter?: string
    filterRes?: number | string
    filterUnits?: number | string
    floodColor?: number | string
    floodOpacity?: number | string
    focusable?: number | string
    fontFamily?: string
    fontSize?: number | string
    fontSizeAdjust?: number | string
    fontStretch?: number | string
    fontStyle?: number | string
    fontVariant?: number | string
    fontWeight?: number | string
    format?: number | string
    from?: number | string
    fx?: number | string
    fy?: number | string
    g1?: number | string
    g2?: number | string
    glyphName?: number | string
    glyphOrientationHorizontal?: number | string
    glyphOrientationVertical?: number | string
    glyphRef?: number | string
    gradientTransform?: string
    gradientUnits?: string
    hanging?: number | string
    horizAdvX?: number | string
    horizOriginX?: number | string
    ideographic?: number | string
    imageRendering?: number | string
    in2?: number | string
    in?: string
    intercept?: number | string
    k1?: number | string
    k2?: number | string
    k3?: number | string
    k4?: number | string
    k?: number | string
    kernelMatrix?: number | string
    kernelUnitLength?: number | string
    kerning?: number | string
    keyPoints?: number | string
    keySplines?: number | string
    keyTimes?: number | string
    lengthAdjust?: number | string
    letterSpacing?: number | string
    lightingColor?: number | string
    limitingConeAngle?: number | string
    local?: number | string
    markerEnd?: string
    markerHeight?: number | string
    markerMid?: string
    markerStart?: string
    markerUnits?: number | string
    markerWidth?: number | string
    mask?: string
    maskContentUnits?: number | string
    maskUnits?: number | string
    mathematical?: number | string
    mode?: number | string
    numOctaves?: number | string
    offset?: number | string
    opacity?: number | string
    operator?: number | string
    order?: number | string
    orient?: number | string
    orientation?: number | string
    origin?: number | string
    overflow?: number | string
    overlinePosition?: number | string
    overlineThickness?: number | string
    paintOrder?: number | string
    panose1?: number | string
    pathLength?: number | string
    patternContentUnits?: string
    patternTransform?: number | string
    patternUnits?: string
    pointerEvents?: number | string
    points?: string
    pointsAtX?: number | string
    pointsAtY?: number | string
    pointsAtZ?: number | string
    preserveAlpha?: number | string
    preserveAspectRatio?: string
    primitiveUnits?: number | string
    r?: number | string
    radius?: number | string
    refX?: number | string
    refY?: number | string
    renderingIntent?: number | string
    repeatCount?: number | string
    repeatDur?: number | string
    requiredExtensions?: number | string
    requiredFeatures?: number | string
    restart?: number | string
    result?: string
    rotate?: number | string
    rx?: number | string
    ry?: number | string
    scale?: number | string
    seed?: number | string
    shapeRendering?: number | string
    slope?: number | string
    spacing?: number | string
    specularConstant?: number | string
    specularExponent?: number | string
    speed?: number | string
    spreadMethod?: string
    startOffset?: number | string
    stdDeviation?: number | string
    stemh?: number | string
    stemv?: number | string
    stitchTiles?: number | string
    stopColor?: string
    stopOpacity?: number | string
    strikethroughPosition?: number | string
    strikethroughThickness?: number | string
    string?: number | string
    stroke?: string
    strokeDasharray?: string | number
    strokeDashoffset?: string | number
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit'
    strokeMiterlimit?: string
    strokeOpacity?: number | string
    strokeWidth?: number | string
    surfaceScale?: number | string
    systemLanguage?: number | string
    tableValues?: number | string
    targetX?: number | string
    targetY?: number | string
    textAnchor?: string
    textDecoration?: number | string
    textLength?: number | string
    textRendering?: number | string
    to?: number | string
    transform?: string
    u1?: number | string
    u2?: number | string
    underlinePosition?: number | string
    underlineThickness?: number | string
    unicode?: number | string
    unicodeBidi?: number | string
    unicodeRange?: number | string
    unitsPerEm?: number | string
    vAlphabetic?: number | string
    values?: string
    vectorEffect?: number | string
    version?: string
    vertAdvY?: number | string
    vertOriginX?: number | string
    vertOriginY?: number | string
    vHanging?: number | string
    vIdeographic?: number | string
    viewBox?: string
    viewTarget?: number | string
    visibility?: number | string
    vMathematical?: number | string
    widths?: number | string
    wordSpacing?: number | string
    writingMode?: number | string
    x1?: number | string
    x2?: number | string
    x?: number | string
    xChannelSelector?: string
    xHeight?: number | string
    xlinkActuate?: string
    xlinkArcrole?: string
    xlinkHref?: string
    xlinkRole?: string
    xlinkShow?: string
    xlinkTitle?: string
    xlinkType?: string
    xmlBase?: string
    xmlLang?: string
    xmlns?: string
    xmlnsXlink?: string
    xmlSpace?: string
    y1?: number | string
    y2?: number | string
    y?: number | string
    yChannelSelector?: string
    z?: number | string
    zoomAndPan?: string
  }

  interface PathAttributes {
    d: string
  }

  // @TODO investigate how to extend Event to be able to consume synthetic events type
  interface SyntheticEvent<T> {
    bubbles: boolean
    currentTarget: EventTarget & T
    cancelable: boolean
    defaultPrevented: boolean
    eventPhase: number
    isTrusted: boolean
    nativeEvent: Event
    preventDefault(): void
    isDefaultPrevented(): boolean
    stopPropagation(): void
    isPropagationStopped(): boolean
    persist(): void
    // If you thought this should be `EventTarget & T`, see https://github.com/DefinitelyTyped/DefinitelyTyped/pull/12239
    target: EventTarget
    timeStamp: number
    type: string
  }

  interface EventHandler<E extends SyntheticEvent<any> & Event> {
    // interface EventHandler<E extends React.SyntheticEvent<any>> {
    (event: E): void
  }
  // interface EventHandler<E extends SyntheticEvent<any>> {
  //   (event: E): void
  // }

  type ClipboardEventHandler = EventHandler<ClipboardEvent>
  type CompositionEventHandler = EventHandler<CompositionEvent>
  type DragEventHandler = EventHandler<DragEvent>
  type FocusEventHandler = EventHandler</* FocusEvent */ SyntheticEvent<any>>
  type KeyboardEventHandler = EventHandler<KeyboardEvent>
  type MouseEventHandler = EventHandler<MouseEvent>
  type TouchEventHandler = EventHandler<TouchEvent>
  type UIEventHandler = EventHandler<UIEvent>
  type WheelEventHandler = EventHandler<WheelEvent>
  type AnimationEventHandler = EventHandler<AnimationEvent>
  type TransitionEventHandler = EventHandler<TransitionEvent>
  type GenericEventHandler = EventHandler</* Event */ SyntheticEvent<any>>

  interface DOMAttributes {
    children?: PreactNode
    dangerouslySetInnerHTML?: {
      __html: string
    }

    // Image Events
    onLoad?: GenericEventHandler

    // Clipboard Events
    onCopy?: ClipboardEventHandler
    onCut?: ClipboardEventHandler
    onPaste?: ClipboardEventHandler

    // Composition Events
    onCompositionEnd?: CompositionEventHandler
    onCompositionStart?: CompositionEventHandler
    onCompositionUpdate?: CompositionEventHandler

    // Focus Events
    onFocus?: FocusEventHandler
    onBlur?: FocusEventHandler

    // Form Events
    onChange?: GenericEventHandler
    onInput?: GenericEventHandler
    onSearch?: GenericEventHandler
    onSubmit?: GenericEventHandler

    // Keyboard Events
    onKeyDown?: KeyboardEventHandler
    onKeyPress?: KeyboardEventHandler
    onKeyUp?: KeyboardEventHandler

    // Media Events
    onAbort?: GenericEventHandler
    onCanPlay?: GenericEventHandler
    onCanPlayThrough?: GenericEventHandler
    onDurationChange?: GenericEventHandler
    onEmptied?: GenericEventHandler
    onEncrypted?: GenericEventHandler
    onEnded?: GenericEventHandler
    onLoadedData?: GenericEventHandler
    onLoadedMetadata?: GenericEventHandler
    onLoadStart?: GenericEventHandler
    onPause?: GenericEventHandler
    onPlay?: GenericEventHandler
    onPlaying?: GenericEventHandler
    onProgress?: GenericEventHandler
    onRateChange?: GenericEventHandler
    onSeeked?: GenericEventHandler
    onSeeking?: GenericEventHandler
    onStalled?: GenericEventHandler
    onSuspend?: GenericEventHandler
    onTimeUpdate?: GenericEventHandler
    onVolumeChange?: GenericEventHandler
    onWaiting?: GenericEventHandler

    // MouseEvents
    onClick?: MouseEventHandler
    onContextMenu?: MouseEventHandler
    onDblClick?: MouseEventHandler
    onDrag?: DragEventHandler
    onDragEnd?: DragEventHandler
    onDragEnter?: DragEventHandler
    onDragExit?: DragEventHandler
    onDragLeave?: DragEventHandler
    onDragOver?: DragEventHandler
    onDragStart?: DragEventHandler
    onDrop?: DragEventHandler
    onMouseDown?: MouseEventHandler
    onMouseEnter?: MouseEventHandler
    onMouseLeave?: MouseEventHandler
    onMouseMove?: MouseEventHandler
    onMouseOut?: MouseEventHandler
    onMouseOver?: MouseEventHandler
    onMouseUp?: MouseEventHandler

    // Selection Events
    onSelect?: GenericEventHandler

    // Touch Events
    onTouchCancel?: TouchEventHandler
    onTouchEnd?: TouchEventHandler
    onTouchMove?: TouchEventHandler
    onTouchStart?: TouchEventHandler

    // UI Events
    onScroll?: UIEventHandler

    // Wheel Events
    onWheel?: WheelEventHandler

    // Animation Events
    onAnimationStart?: AnimationEventHandler
    onAnimationEnd?: AnimationEventHandler
    onAnimationIteration?: AnimationEventHandler

    // Transition Events
    onTransitionEnd?: TransitionEventHandler
  }

  interface HTMLAttributes extends preact.PreactHTMLAttributes, DOMAttributes {
    // Standard HTML Attributes
    accept?: string
    acceptCharset?: string
    accessKey?: string
    action?: string
    allowFullScreen?: boolean
    allowTransparency?: boolean
    alt?: string
    async?: boolean
    autocomplete?: string
    autofocus?: boolean
    autoPlay?: boolean
    capture?: boolean
    cellPadding?: number | string
    cellSpacing?: number | string
    charSet?: string
    challenge?: string
    checked?: boolean
    class?: string
    className?: string
    cols?: number
    colSpan?: number
    content?: string
    contentEditable?: boolean
    contextMenu?: string
    controls?: boolean
    coords?: string
    crossOrigin?: string
    data?: string
    dateTime?: string
    default?: boolean
    defer?: boolean
    dir?: string
    disabled?: boolean
    download?: any
    draggable?: boolean
    encType?: string
    form?: string
    formAction?: string
    formEncType?: string
    formMethod?: string
    formNoValidate?: boolean
    formTarget?: string
    frameBorder?: number | string
    headers?: string
    height?: number | string
    hidden?: boolean
    high?: number
    href?: string
    hrefLang?: string
    for?: string
    httpEquiv?: string
    icon?: string
    id?: string
    inputMode?: string
    integrity?: string
    is?: string
    keyParams?: string
    keyType?: string
    kind?: string
    label?: string
    lang?: string
    list?: string
    loop?: boolean
    low?: number
    manifest?: string
    marginHeight?: number
    marginWidth?: number
    max?: number | string
    maxLength?: number
    media?: string
    mediaGroup?: string
    method?: string
    min?: number | string
    minLength?: number
    multiple?: boolean
    muted?: boolean
    name?: string
    noValidate?: boolean
    open?: boolean
    optimum?: number
    pattern?: string
    placeholder?: string
    poster?: string
    preload?: string
    radioGroup?: string
    readOnly?: boolean
    rel?: string
    required?: boolean
    role?: string
    rows?: number
    rowSpan?: number
    sandbox?: string
    scope?: string
    scoped?: boolean
    scrolling?: string
    seamless?: boolean
    selected?: boolean
    shape?: string
    size?: number
    sizes?: string
    slot?: string
    span?: number
    spellCheck?: boolean
    src?: string
    srcset?: string
    srcDoc?: string
    srcLang?: string
    srcSet?: string
    start?: number
    step?: number | string
    style?: any
    summary?: string
    tabIndex?: number
    target?: string
    title?: string
    type?: string
    useMap?: string
    value?: string | string[]
    width?: number | string
    wmode?: string
    wrap?: string

    // RDFa Attributes
    about?: string
    datatype?: string
    inlist?: any
    prefix?: string
    property?: string
    resource?: string
    typeof?: string
    vocab?: string
  }
}

declare module 'preact' {
  export = preact
}

declare namespace JSX {
  interface Element extends preact.VNode {}

  interface ElementClass extends preact.Component<any> {}

  interface ElementAttributesProperty {
    props: {}
  }

  interface ElementChildrenAttribute {
    children: {}
  }

  interface IntrinsicElements {
    // HTML
    a: preact.HTMLAttributes
    abbr: preact.HTMLAttributes
    address: preact.HTMLAttributes
    area: preact.HTMLAttributes
    article: preact.HTMLAttributes
    aside: preact.HTMLAttributes
    audio: preact.HTMLAttributes
    b: preact.HTMLAttributes
    base: preact.HTMLAttributes
    bdi: preact.HTMLAttributes
    bdo: preact.HTMLAttributes
    big: preact.HTMLAttributes
    blockquote: preact.HTMLAttributes
    body: preact.HTMLAttributes
    br: preact.HTMLAttributes
    button: preact.HTMLAttributes
    canvas: preact.HTMLAttributes
    caption: preact.HTMLAttributes
    cite: preact.HTMLAttributes
    code: preact.HTMLAttributes
    col: preact.HTMLAttributes
    colgroup: preact.HTMLAttributes
    data: preact.HTMLAttributes
    datalist: preact.HTMLAttributes
    dd: preact.HTMLAttributes
    del: preact.HTMLAttributes
    details: preact.HTMLAttributes
    dfn: preact.HTMLAttributes
    dialog: preact.HTMLAttributes
    div: preact.HTMLAttributes
    dl: preact.HTMLAttributes
    dt: preact.HTMLAttributes
    em: preact.HTMLAttributes
    embed: preact.HTMLAttributes
    fieldset: preact.HTMLAttributes
    figcaption: preact.HTMLAttributes
    figure: preact.HTMLAttributes
    footer: preact.HTMLAttributes
    form: preact.HTMLAttributes
    h1: preact.HTMLAttributes
    h2: preact.HTMLAttributes
    h3: preact.HTMLAttributes
    h4: preact.HTMLAttributes
    h5: preact.HTMLAttributes
    h6: preact.HTMLAttributes
    head: preact.HTMLAttributes
    header: preact.HTMLAttributes
    hr: preact.HTMLAttributes
    html: preact.HTMLAttributes
    i: preact.HTMLAttributes
    iframe: preact.HTMLAttributes
    img: preact.HTMLAttributes
    input: preact.HTMLAttributes
    ins: preact.HTMLAttributes
    kbd: preact.HTMLAttributes
    keygen: preact.HTMLAttributes
    label: preact.HTMLAttributes
    legend: preact.HTMLAttributes
    li: preact.HTMLAttributes
    link: preact.HTMLAttributes
    main: preact.HTMLAttributes
    map: preact.HTMLAttributes
    mark: preact.HTMLAttributes
    menu: preact.HTMLAttributes
    menuitem: preact.HTMLAttributes
    meta: preact.HTMLAttributes
    meter: preact.HTMLAttributes
    nav: preact.HTMLAttributes
    noscript: preact.HTMLAttributes
    object: preact.HTMLAttributes
    ol: preact.HTMLAttributes
    optgroup: preact.HTMLAttributes
    option: preact.HTMLAttributes
    output: preact.HTMLAttributes
    p: preact.HTMLAttributes
    param: preact.HTMLAttributes
    picture: preact.HTMLAttributes
    pre: preact.HTMLAttributes
    progress: preact.HTMLAttributes
    q: preact.HTMLAttributes
    rp: preact.HTMLAttributes
    rt: preact.HTMLAttributes
    ruby: preact.HTMLAttributes
    s: preact.HTMLAttributes
    samp: preact.HTMLAttributes
    script: preact.HTMLAttributes
    section: preact.HTMLAttributes
    select: preact.HTMLAttributes
    slot: preact.HTMLAttributes
    small: preact.HTMLAttributes
    source: preact.HTMLAttributes
    span: preact.HTMLAttributes
    strong: preact.HTMLAttributes
    style: preact.HTMLAttributes
    sub: preact.HTMLAttributes
    summary: preact.HTMLAttributes
    sup: preact.HTMLAttributes
    table: preact.HTMLAttributes
    tbody: preact.HTMLAttributes
    td: preact.HTMLAttributes
    textarea: preact.HTMLAttributes
    tfoot: preact.HTMLAttributes
    th: preact.HTMLAttributes
    thead: preact.HTMLAttributes
    time: preact.HTMLAttributes
    title: preact.HTMLAttributes
    tr: preact.HTMLAttributes
    track: preact.HTMLAttributes
    u: preact.HTMLAttributes
    ul: preact.HTMLAttributes
    var: preact.HTMLAttributes
    video: preact.HTMLAttributes
    wbr: preact.HTMLAttributes

    //SVG
    svg: preact.SVGAttributes
    animate: preact.SVGAttributes
    circle: preact.SVGAttributes
    clipPath: preact.SVGAttributes
    defs: preact.SVGAttributes
    ellipse: preact.SVGAttributes
    feBlend: preact.SVGAttributes
    feColorMatrix: preact.SVGAttributes
    feComponentTransfer: preact.SVGAttributes
    feComposite: preact.SVGAttributes
    feConvolveMatrix: preact.SVGAttributes
    feDiffuseLighting: preact.SVGAttributes
    feDisplacementMap: preact.SVGAttributes
    feFlood: preact.SVGAttributes
    feGaussianBlur: preact.SVGAttributes
    feImage: preact.SVGAttributes
    feMerge: preact.SVGAttributes
    feMergeNode: preact.SVGAttributes
    feMorphology: preact.SVGAttributes
    feOffset: preact.SVGAttributes
    feSpecularLighting: preact.SVGAttributes
    feTile: preact.SVGAttributes
    feTurbulence: preact.SVGAttributes
    filter: preact.SVGAttributes
    foreignObject: preact.SVGAttributes
    g: preact.SVGAttributes
    image: preact.SVGAttributes
    line: preact.SVGAttributes
    linearGradient: preact.SVGAttributes
    marker: preact.SVGAttributes
    mask: preact.SVGAttributes
    path: preact.SVGAttributes
    pattern: preact.SVGAttributes
    polygon: preact.SVGAttributes
    polyline: preact.SVGAttributes
    radialGradient: preact.SVGAttributes
    rect: preact.SVGAttributes
    stop: preact.SVGAttributes
    symbol: preact.SVGAttributes
    text: preact.SVGAttributes
    tspan: preact.SVGAttributes
    use: preact.SVGAttributes
  }
}
