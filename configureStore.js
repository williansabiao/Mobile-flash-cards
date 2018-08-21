import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'

import rootReducer from './reducers'
import { saveState } from './localStorage'


export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
  )(createStore)

  const store = finalCreateStore(rootReducer, initialState)

  store.subscribe(throttle(() => {
    const { deckList } = store.getState()
    saveState({
      deckList,
    })
  }, 1000))

  return { store }
}
