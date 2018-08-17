import React, { Component } from 'react'

import { DeckListFlatList, DeckItemView, DeckItemText } from './styles'

export default class DeckList extends Component {
  render() {
    return (
      <DeckListFlatList
        data={[
          { key: 'item1' }, 
          { key: 'item2' },
          { key: 'item3' },
          { key: 'item4' },
          { key: 'item5' },
          { key: 'item6' },
          { key: 'item7' },
          { key: 'item8' },
          { key: 'item9' },
          { key: 'item10' },
          { key: 'item11' },
        ]}
        renderItem={({ item }) => (
          <DeckItemView>
            <DeckItemText>{item.key}</DeckItemText>
          </DeckItemView>
        )}
      />
    )
  }
}