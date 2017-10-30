import { Component, VNode, ChildContextProvider } from 'preact'
import { Children } from 'react'

type Config = { baseUrl: string }
type Props = {
  children: JSX.Element
  config: Config
}
type Context = { config: Config }
export class ConfigProvider extends Component<Props> implements ChildContextProvider<Context> {
  config = this.props.config || {}

  getChildContext(): Context {
    return { config: this.config }
  }
  render() {
    const children = Children.only(this.props.children)

    return children as JSX.Element
  }
}
