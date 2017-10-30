import * as React from 'react'
// import * as Preact from 'preact'

declare module 'react' {
  interface PreactVDomAttributes {
    class?: string
  }

  // interface ReactElement<P> /*  extends Preact.VNode<P> */ {
  // nodeName: string | ComponentClass<P> | SFC<P>
  // base: HTMLElement
  // }
  interface HTMLAttributes<T> extends React.DOMAttributes<T>, PreactVDomAttributes {}
}
