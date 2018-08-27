import {
  INSERT_CARD,
  SET_GUESS,
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
  case SET_GUESS: {
    const { quizId, cardId, guess } = action.payload
    const questions = { ...state.questions }

    const cardIndex = questions[quizId].findIndex(card => card.cardId === cardId)

    questions[quizId][cardIndex].guess = guess

    return {
      ...state,
      status: SET_GUESS,
      questions,
    }
  }
  default:
    return state
  }
}

export default cardListReducer
