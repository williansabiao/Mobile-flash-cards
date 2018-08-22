import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'

import {
  DeckListFlatList,
  DeckItemView,
  DeckItemText,
  DeckItemSubText,
} from './styles'

const DeckList = ({ navigation, deckList }) => (
  <DeckListFlatList
    data={deckList}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('DeckView', { title: item.title })}>
        <DeckItemView>
          <DeckItemText>{item.title}</DeckItemText>
          <DeckItemSubText>{item.cardsCount} cards</DeckItemSubText>
        </DeckItemView>
      </TouchableOpacity>
    )}
  />
)

DeckList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  deckList: PropTypes.arrayOf(PropTypes.any).isRequired,
}

export default DeckList
