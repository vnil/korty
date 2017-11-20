import React from 'react'
import ReactDOM from 'react-dom'
import 'reset-css/reset.css'
import './index.css'
import App from './Components/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
