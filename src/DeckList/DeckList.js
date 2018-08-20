import React from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity } from 'react-native'

import {
  DeckListFlatList,
  DeckItemView,
  DeckItemText,
  DeckItemSubText,
} from './styles'

const DeckList = ({ navigation }) => (
  <DeckListFlatList
    data={[
      { key: 'item1', cardsCount: 0 },
      { key: 'item2', cardsCount: 0 },
      { key: 'item3', cardsCount: 0 },
      { key: 'item4', cardsCount: 0 },
      { key: 'item5', cardsCount: 0 },
      { key: 'item6', cardsCount: 0 },
      { key: 'item7', cardsCount: 0 },
      { key: 'item8', cardsCount: 0 },
      { key: 'item9', cardsCount: 0 },
      { key: 'item10', cardsCount: 0 },
      { key: 'item11', cardsCount: 0 },
    ]}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('DeckView', { title: item.key })}>
        <DeckItemView>
          <DeckItemText>{item.key}</DeckItemText>
          <DeckItemSubText>{item.cardsCount} cards</DeckItemSubText>
        </DeckItemView>
      </TouchableOpacity>
    )}
  />
)

DeckList.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default DeckList
