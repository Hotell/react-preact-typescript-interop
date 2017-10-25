declare module 'preact-compat' {

}

import * as Preact from 'preact'
import * as React from 'react'
declare module 'preact' {
  type OptionalOriginalVNodeShape = Partial<Pick<Preact.VNode, 'nodeName'>>
  interface VNode extends React.ReactElement<{}> {}

  interface Component<P, S> {
    refs: any
    base?: HTMLElement
    linkState?: (name: string) => (event: Event) => void
  }
}
