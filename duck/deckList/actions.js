import {
  GET_LIST,
  INSERT_DECK,
} from './types'

export const getList = list => ({
  type: GET_LIST,
  payload: { list },
})

export const insertDeck = item => ({
  type: INSERT_DECK,
  payload: { item },
})