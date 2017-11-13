import { Component, h, SFC } from 'preact'

type Props = { who: string }
export class Greet extends Component<Props> {
  render() {
    return (
      <div>
        <p>{this.props.who}</p>
      </div>
    )
  }
}

const GreetSFC: SFC<Props> = ({ who }) => (
  <div>
    <p>{who}</p>
  </div>
)
