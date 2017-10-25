import RouterExample from './routes'
import { Dispatch } from 'redux'
import { h, Component } from 'preact'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { EnhancedContainer, Container } from './Container'
import { ConfigProvider } from './providers'
import { createStoreFactory } from '../store'

const injector = {
  baseUrl: 'foo.bar:3000',
}
const store = createStoreFactory()

export class App extends Component {
  render() {
    return (
      <ConfigProvider config={injector}>
        <Provider store={store}>
          <Router>
            <main>
              <div>Hello</div>
              <Greet who="Diana" />
              <EnhancedContainer year={1986} />
              <RouterExample />
            </main>
          </Router>
        </Provider>
      </ConfigProvider>
    )
  }
}

class Greet extends Component<{ who: string }> {
  render() {
    return <p>{this.props.who}</p>
  }
}
