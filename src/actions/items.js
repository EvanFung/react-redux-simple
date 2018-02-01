export const ITEMS_HAS_ERRORED = 'ITEMS_HAS_ERRORED'
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING'
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS'
export function itemHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  }
}

export function itemIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  }
}

export function itemsFetchDataSuccess(items) {
  return {
    type: ITEMS_FETCH_DATA_SUCCESS,
    items
  }
}

export function errorAfterFiveSeconds() {
  //we return a function instead of an action object
  return dispatch => {
    setTimeout(() => {
      //this function is able to dispatch other action creator
      dispatch(itemHasErrored(true))
    }, 5000)
  }
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemIsLoading(true))
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        dispatch(itemIsLoading(false))
        return response
      })
      .then(response => response.json())
      .then(items => {
        dispatch(itemsFetchDataSuccess(items))
      })
      .catch(() => dispatch(itemHasErrored(true)))
  }
}
