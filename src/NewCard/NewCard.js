import React, { Component } from 'react'

import TextButton from '../TextButton/TextButton'
import {
  NewCardView,
  NewCardText,
  TextInput,
  ButtonsGroup,
} from './styles'

class NewCard extends Component {
  state = {
    question: '',
    answer: '',
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
          <TextButton width="120" onPress={() => {}}>Submit</TextButton>
        </ButtonsGroup>
      </NewCardView>
    )
  }
}

export default NewCard
