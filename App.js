import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import StatusBar from './src/StatusBar'
import DeckList from './src/DeckList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <DeckList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
