import React, { Component } from 'react'

import TextButton from '../TextButton'
import {
  DeckItemView,
  DeckItemText,
  DeckItemSubText,
  ButtonsGroup,
  TextContainer,
} from './styles'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const title = params.title || 'Untitled'

    return {
      title: `Deck ${title}`,
    }
  }

  render() {
    return (
      <DeckItemView>
        <TextContainer>
          <DeckItemText>My Deck</DeckItemText>
          <DeckItemSubText>10 cards</DeckItemSubText>
        </TextContainer>
        <ButtonsGroup>
          <TextButton white onPress={() => {}}>Add Card</TextButton>
          <TextButton onPress={() => {}}>Start Quiz</TextButton>
        </ButtonsGroup>
      </DeckItemView>
    )
  }
}
export default DeckView
