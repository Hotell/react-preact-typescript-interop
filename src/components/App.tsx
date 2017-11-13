import { Dispatch } from 'redux'
import { h, Component } from 'preact'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { translate, Trans, InjectedI18nProps } from 'react-i18next'

import './typed-children'
import SimpleForm from './forms/SimpleForm'
import { Greet } from './Greet'
import RouterExample from './routes'
import { EnhancedContainer, Container } from './Container'
import { ConfigProvider } from './providers'
import { createStoreFactory } from '../store.config'
import { createI18nConfig } from '../i18n.config'

const injector = {
  baseUrl: 'foo.bar:3000',
}
const store = createStoreFactory()
const i18n = createI18nConfig()

type Props = InjectedI18nProps

export class App extends Component<Props> {
  private changeLanguage = (lng: string) => {
    this.props.i18n.changeLanguage(lng)
  }
  render() {
    const { t, i18n } = this.props

    return (
      <ConfigProvider config={injector}>
        <Provider store={store}>
          <Router>
            <main>
              <nav>
                <h1>React-Preact TS interop</h1>
                <div>
                  <h2>{t('title')}</h2>
                  <i class="fa fa-user" />
                </div>
              </nav>
              <div>Hello</div>
              <Greet who="Diana" />
              <EnhancedContainer year={1986} />
              <RouterExample />
              <SimpleForm initialValues={{ firstName: 'Martin', lastName: 'Hochel' }} />
            </main>
          </Router>
        </Provider>
      </ConfigProvider>
    )
  }
}

const enhance = translate()

export default enhance(App)
