import { AsyncStorage } from 'react-native'

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem('UdaciCards')
    if (serializedState !== null) {
      // We have data!!
      return JSON.parse(serializedState)
    }
    return undefined
  } catch (error) {
    // return undefined
    console.log(error)
    return null
  }
}

export const saveState = async (state) => {
  try {
    const serializedState = JSON.stringify(state)
    await AsyncStorage.setItem('UdaciCards', serializedState)
  } catch (error) {
    // Error saving data
    console.log(error)
  }
}
