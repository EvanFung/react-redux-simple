import React from 'react'
import ReactDOM from 'react-dom'
import './res/styles/index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import ItemList from './components/ItemList'
import configureStore from './store/configureStore'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
