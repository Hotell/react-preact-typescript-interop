import { connect, Dispatch } from 'react-redux'
import { h, Component } from 'preact'

///
type Store = {
  test: {
    items: Array<string>
  }
}

type Props = StateProps & DispatchProps & OwnProps
type OwnProps = {
  year: number
}
type StateProps = Pick<Store, 'test'>
type DispatchProps = { addItem(payload: string): void }

const mapStateToProps = ({ test }: Store /* , ownProps: OwnProps */): StateProps => ({
  test,
})
const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchProps => ({
  addItem(payload: string) {
    dispatch({ type: 'ADD_ITEM', payload })
  },
})
const enhance = connect(mapStateToProps, mapDispatchToProps)

export class Container extends Component<Props> {
  private debug() {
    return JSON.stringify(this.props, null, 2)
  }
  render() {
    return <div>this.debug()</div>
  }
}
export const EnhancedContainer = enhance(Container)

namespace Empty {
  interface OwnProps {
    foo: string
    dispatch: Dispatch<any>
  }

  class TestComponent extends Component<OwnProps> {
    render() {
      return null
    }
  }

  const Test = connect()(TestComponent)

  const verify = <Test foo="boo" />
}
