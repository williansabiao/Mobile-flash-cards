import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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

  state = {
    title: '',
    count: '',
    id: '',
  }

  static getDerivedStateFromProps(nextProps) {
    const { deckList, navigation, cardList } = nextProps
    const { id } = navigation.state.params

    const myDeck = deckList.find(deck => deck.id === id)

    return {
      title: myDeck.title,
      count: (cardList[myDeck.id] || []).length,
      id: myDeck.id,
    }
  }

  render() {
    const { navigation } = this.props
    const { id, title, count } = this.state

    return (
      <DeckItemView>
        <TextContainer>
          <DeckItemText>{title}</DeckItemText>
          <DeckItemSubText>{count} cards</DeckItemSubText>
        </TextContainer>
        <ButtonsGroup>
          <TextButton white onPress={() => navigation.navigate('NewCard', { id, title })}>Add Card</TextButton>
          <TextButton onPress={() => navigation.navigate('QuizView', { id, title })}>Start Quiz</TextButton>
        </ButtonsGroup>
      </DeckItemView>
    )
  }
}

const mapStateToProps = ({ deckList, cardList }) => ({
  deckList: deckList.list,
  cardList: cardList.questions,
})

DeckView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  deckList: PropTypes.arrayOf(PropTypes.any).isRequired,
  cardList: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, null)(DeckView)
