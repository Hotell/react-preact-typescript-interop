// declare module 'preact-compat' {

// }

import * as Preact from 'preact'
declare module 'preact' {
  interface Component<P, S> {
    refs: any
    base?: HTMLElement
    linkState?: (name: string) => (event: Event) => void
  }
}
