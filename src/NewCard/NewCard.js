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
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state
    const { title = 'Untitled' } = params

    // this.setState({ deckId: id })
    return {
      title: `Deck ${title}`,
    }
  }

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
    const { insertDeck } = this.props

    insertDeck(deckId, { question, answer })
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
          <TextButton width="120" onPress={this.saveCard}>Submit</TextButton>
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
