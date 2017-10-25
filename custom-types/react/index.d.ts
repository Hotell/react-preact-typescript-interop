import * as React from 'react'

declare module 'react' {
  interface PreactVDomAttributes {
    class?: string
  }
  interface HTMLAttributes<T> extends React.DOMAttributes<T>, PreactVDomAttributes {}
}
