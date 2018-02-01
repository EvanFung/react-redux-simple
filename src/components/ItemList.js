import React, { Component } from 'react'
import 'whatwg-fetch'
class ItemList extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      hasErrored: false,
      isLoading: false
    }
  }

  fetchData(url) {
    this.setState({ isLoading: true })
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        this.setState({ isLoading: false })
        return response
      })
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(() => this.setState({ hasErrored: true }))
  }

  componentDidMount() {
    this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

  render() {
    this.state.hasErrored && <p>Sorry! there was an error loading the items</p>

    this.state.isLoading && <p>Loading…</p>

    return (
      <ul>
        {this.state.items.map(item => <li key={item.id}>{item.label}</li>)}
      </ul>
    )
  }
}

export default ItemList
