import {
  GET_LIST,
  INSERT_DECK,
} from './types'

const INITIAL_STATE = {
  status: null,
  list: [],
  error: null,
}

const deckListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_LIST: {
    const { list } = action.payload

    return {
      ...INITIAL_STATE,
      status: GET_LIST,
      list,
    }
  }
  case INSERT_DECK: {
    const { item } = action.payload

    return {
      ...state,
      status: INSERT_DECK,
      list: [...state.list, item],
    }
  }
  default:
    return state
  }
}

export default deckListReducer
