import * as React from 'react'

declare module 'react' {
  /**
   * extends React VDom with new props/attributes allowed by Preact
   */
  interface HTMLAttributes<T> extends React.DOMAttributes<T> {
    class?: string
  }
}
