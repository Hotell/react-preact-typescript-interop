import { h } from 'preact'
import { BrowserRouter as Router, Route, Link, RouteComponentProps, Switch, Redirect } from 'react-router-dom'

import { Mixed } from '../types'
import { EnhancedContainer } from './Container'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }: RouteComponentProps<{ topicId: number }>) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }: RouteComponentProps<void>) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
  </div>
)

const RouterExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/connected" component={EnhancedContainer} />
    </div>
  </Router>
)

const NoMatchExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/old-match">Old Match, to be redirected</Link>
        </li>
        <li>
          <Link to="/will-match">Will Match</Link>
        </li>
        <li>
          <Link to="/will-not-match">Will Not Match</Link>
        </li>
        <li>
          <Link to="/also/will/not/match">Also Will Not Match</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="/old-match" to="/will-match" />
        <Route path="/will-match" component={WillMatch} />
        <Route path="/nested" component={RoutesWithSwitch} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
)

const WillMatch = () => <h3>Matched!</h3>

const NoMatch = ({ location }: RouteComponentProps<void>) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)

const RoutesWithSwitch = ({ match }: RouteComponentProps<void>) => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect from="/old-match" to="/will-match" />
      <Route path="/will-match" component={WillMatch} />
      <Route component={NoMatch} />
    </Switch>
  )
}

export default RouterExample
