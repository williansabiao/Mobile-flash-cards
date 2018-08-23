import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { cardListOperations } from '../../duck/cardList'

import TextButton from '../TextButton/TextButton'
import {
  NewCardView,
  NewCardText,
  TextInput,
  ButtonsGroup,
} from './styles'

class NewCard extends Component {
  state = {
    deckId: null,
    question: '',
    answer: '',
  }

  componentWillMount() {
    const { navigation } = this.props
    const { params = {} } = navigation.state
    this.setState({ deckId: params.id })
  }

  saveCard = () => {
    const { deckId, question, answer } = this.state
    const { insertDeck, navigation } = this.props

    if (question.length < 1 || answer.length < 1) return

    insertDeck(deckId, { question, answer })
    navigation.navigate('DeckList')
  }

  isValid = () => {
    const { question, answer } = this.state
    return question.length > 0 && answer.length > 0
  }

  render() {
    const { question, answer } = this.state
    return (
      <NewCardView behavior="padding" enabled>
        <NewCardText>New question</NewCardText>
        <TextInput
          placeholder="Question"
          onChangeText={value => this.setState({ question: value })}
          value={question}
          autoFocus
        />
        <TextInput
          placeholder="Answer"
          onChangeText={value => this.setState({ answer: value })}
          value={answer}
        />
        <ButtonsGroup>
          <TextButton width="120" onPress={this.saveCard} disabled={!this.isValid()}>Submit</TextButton>
        </ButtonsGroup>
      </NewCardView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  insertDeck: (id, deck) => dispatch(cardListOperations.insertCard(id, deck)),
})

NewCard.propTypes = {
  insertDeck: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(null, mapDispatchToProps)(NewCard)
