import * as Preact from 'preact'
import * as React from 'react'

declare module 'react' {
  interface ReactChildren {
    only(children: Preact.PreactNode): Preact.VNode<any>
  }
}

declare module 'preact' {
  /**
   * alias SFC like React has
   */
  type SFC<P = {}> = Preact.FunctionalComponent<P>
  /**
   * provides SyntheticEvent under preact namespace
   */
  interface SyntheticEvent<T> extends React.SyntheticEvent<T> {}
  // type OptionalOriginalVNodeShape = Partial<Pick<Preact.VNode, 'nodeName'>>

  /**
   * extends preact.VNode with ReactElement compliant type structure
   */
  interface VNode extends React.ReactElement<any> {}

  /**
   * extends preact.Component to React.Component compliant type structure
   */
  interface Component {
    refs: {
      [key: string]: ReactInstance
    }
  }
}
