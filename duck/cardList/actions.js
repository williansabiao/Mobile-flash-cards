import {
  INSERT_CARD,
} from './types'

export const insertCard = (id, card) => ({
  type: INSERT_CARD,
  payload: { id, card },
})

export default {}
