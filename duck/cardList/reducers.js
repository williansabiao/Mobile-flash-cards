import {
  INSERT_CARD,
} from './types'

const INITIAL_STATE = {
  status: null,
  questions: {},
  error: null,
}

const cardListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case INSERT_CARD: {
    const { card, id } = action.payload
    const questions = { ...state.questions }

    questions[id] = questions[id] || []
    questions[id].push(card)

    return {
      ...state,
      status: INSERT_CARD,
      questions,
    }
  }
  default:
    return state
  }
}

export default cardListReducer
