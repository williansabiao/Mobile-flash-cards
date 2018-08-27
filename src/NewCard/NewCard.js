import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import uuid from 'uuid/v4'

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
    added: false,
  }

  componentWillMount() {
    const { navigation } = this.props
    const { params = {} } = navigation.state
    this.setState({ deckId: params.id })
  }

  saveCard = () => {
    const { deckId, question, answer } = this.state
    const { insertDeck } = this.props

    if (question.length < 1 || answer.length < 1) return

    insertDeck(deckId, { question, answer, cardId: uuid() })
    this.setState({ question: '', answer: '', added: true })
    // navigation.navigate('DeckList')
  }

  isValid = () => {
    const { question, answer } = this.state
    return question.length > 0 && answer.length > 0
  }

  resetAdded = () => this.setState({ added: false })

  render() {
    const { question, answer, added } = this.state

    if (added) setTimeout(this.resetAdded, 1000)

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
        {added && <NewCardText>Question added!</NewCardText>}
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
