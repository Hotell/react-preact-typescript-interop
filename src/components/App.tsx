import { Dispatch } from 'redux'
import { h, Component } from 'preact'

import { EnhancedContainer, Container } from './Container'

export class App extends Component {
  render() {
    return (
      <main>
        <div>Hello</div>
        <Greet who="Diana" />
        <EnhancedContainer year={1986} />
      </main>
    )
  }
}

class Greet extends Component<{ who: string }> {
  render() {
    return <p>{this.props.who}</p>
  }
}
