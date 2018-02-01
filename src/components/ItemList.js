import React, { Component } from 'react'
import 'whatwg-fetch'
import { connect } from 'react-redux'
import { itemsFetchData } from '../actions/items'
class ItemList extends Component {
  componentDidMount() {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items')
  }

  render() {
    this.props.hasErrored && <p>Sorry! there was an error loading the items</p>

    this.props.isLoading && <p>Loading…</p>

    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.label}</li>)}
      </ul>
    )
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
