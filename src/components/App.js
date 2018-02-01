import React, { Component } from 'react'
import '../res/styles/App.css'
import ItemList from './ItemList'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ItemList />
      </div>
    )
  }
}

export default App
