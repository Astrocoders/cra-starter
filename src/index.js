import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import Home from './Home'
import './index.css'

const App = () => (
  <React.Fragment>
    <Router>
      <Home path="/" />
    </Router>
  </React.Fragment>
)

ReactDOM.render(<App />, document.getElementById('root'))