import { combineReducers } from 'redux'

import deckList from './duck/deckList'

const rootReducer = combineReducers({
  deckList,
})

export default rootReducer
