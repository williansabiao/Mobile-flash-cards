import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { Provider } from 'react-redux'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import { loadState } from './localStorage'
import configureStore from './configureStore'
import StatusBar from './src/StatusBar'
import DeckList from './src/DeckList'
import DeckView from './src/DeckView'
import NewDeck from './src/NewDeck'
import NewCard from './src/NewCard'

const Tabs = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Deck',
      // eslint-disable-next-line
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-list" size={30} color={tintColor} />,
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      // eslint-disable-next-line
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-add" size={30} color={tintColor} />,
    },
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? 'purple' : 'white',
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? 'white' : 'purple',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  NewDeck: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    },
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple',
      },
    },
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


const persistedState = loadState()
const { store } = configureStore(persistedState)

console.log(persistedState)
const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar />
      <MainNavigator />
    </View>
  </Provider>
)
export default App
