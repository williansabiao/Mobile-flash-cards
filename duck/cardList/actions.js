import {
  INSERT_CARD,
  SET_GUESS,
} from './types'

export const insertCard = (id, card) => ({
  type: INSERT_CARD,
  payload: { id, card },
})

export const setGuess = (quizId, cardId, guess) => ({
  type: SET_GUESS,
  payload: { quizId, cardId, guess },
})

export default {}
