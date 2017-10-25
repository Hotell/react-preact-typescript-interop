import { Component, h } from 'preact'

type Props = { who: string }
export class Greet extends Component<Props> {
  render() {
    return <p>{this.props.who}</p>
  }
}
