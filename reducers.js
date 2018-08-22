import { combineReducers } from 'redux'

import deckList from './duck/deckList'
import cardList from './duck/cardList'

const rootReducer = combineReducers({
  deckList,
  cardList,
})

export default rootReducer
