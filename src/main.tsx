import { h, render } from 'preact'

import { App } from './components/App'

const mountNode = document.getElementById('app')

render(<App />, mountNode)
