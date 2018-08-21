import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { deckListOperations } from '../../duck/deckList'

import TextButton from '../TextButton/TextButton'
import {
  NewDeckView,
  NewDeckText,
  TextInput,
  ButtonsGroup,
} from './styles'

class NewDeck extends Component {
  state = {
    title: '',
  }

  onPressBtn = () => {
    const { title } = this.state
    const { navigation, insertDeck } = this.props

    insertDeck({
      [title]: {
        title,
        questions: [],
      },
    })

    navigation.navigate('NewCard')
  }

  render() {
    const { title } = this.state
    return (
      <NewDeckView behavior="padding" enabled>
        <NewDeckText>
          What is the title of your new deck?
        </NewDeckText>
        <TextInput
          placeholder="Deck title"
          onChangeText={value => this.setState({ title: value })}
          value={title}
          autoFocus
          multiline
        />
        <ButtonsGroup>
          <TextButton width="120" onPress={this.onPressBtn}>
            Submit
          </TextButton>
        </ButtonsGroup>
      </NewDeckView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  insertDeck: deck => dispatch(deckListOperations.insertDeck(deck)),
})


NewDeck.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  insertDeck: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(NewDeck)
