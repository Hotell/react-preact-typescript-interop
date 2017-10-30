// declare module 'preact-compat' {

// }

import * as Preact from 'preact'
import * as React from 'react'
declare module 'preact' {
  type OptionalOriginalVNodeShape = Partial<Pick<Preact.VNode, 'nodeName'>>
  interface VNode<P = {}> /* extends React.ReactElement<any> */ {
    type: string | ComponentClass<P> | SFC<P>
    props: P
  }

  interface Component<P, S> {
    refs: any
    base?: HTMLElement
    linkState?: (name: string) => (event: Event) => void
  }

  // interface EventHandler<E extends React.SyntheticEvent<any>> {
  //   (event: E): void
  // }

  interface GenericEventHandler extends EventHandler<Event & React.SyntheticEvent<any>> {}
}
