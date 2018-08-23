import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import TextButton from '../TextButton/TextButton'
import {
  QuizItemView,
  TextContainer,
  QuizItemText,
  QuizFormView,
  CounterView,
  CounterText,
  TextInput,
  QuestionContainer,
} from './styles'

class QuizView extends Component {
  state = {
    questions: [],
    step: 1,
    count: 0,
    answer: '',
    showQuestion: true,
    question: null,
    correct: null,
    score: 0,
    done: false,
  }

  static getDerivedStateFromProps(nextProps) {
    const { navigation, cardList, question } = nextProps
    const { id } = navigation.state.params
    const questions = cardList[id] || []

    return {
      question: question || questions[0],
      questions,
      count: questions.length,
    }
  }

  isValid = () => {
    const { answer } = this.state
    return answer.length > 0
  }

  checkAnswer = () => {
    const { answer, question, score } = this.state
    const isCorrect = answer.toLowerCase() === question.answer.toLowerCase()
    console.log(answer, question.answer, answer.toLowerCase() === question.answer.toLowerCase())
    this.setState({
      correct: isCorrect,
      score: score + (isCorrect ? 1 : 0),
    })
  }

  goNextQuestion = () => {
    const { step, questions, count } = this.state

    if (step === count) return this.setState({ done: true, correct: null })

    return this.setState({
      correct: null,
      step: step + 1,
      question: questions[step],
      answer: '',
      showQuestion: true,
    })
  }

  clearAnswer = () => (
    this.setState({
      correct: null,
      answer: '',
      showQuestion: true,
    })
  )

  render() {
    const { navigation } = this.props
    const {
      question,
      step,
      count,
      answer,
      showQuestion,
      correct,
      done,
      score,
    } = this.state

    if (correct) setTimeout(this.goNextQuestion, 1000)
    if (correct === false) setTimeout(this.goNextQuestion, 2000)
    // if (correct === false) setTimeout(this.clearAnswer, 2000)

    return (
      <QuizItemView behavior="padding" enabled>
        {!done && (
          <React.Fragment>
            <CounterView>
              <CounterText>
                {step} / {count}
              </CounterText>
            </CounterView>
            {correct && (
              <TextContainer>
                <QuizItemText>Cool, that is correct!</QuizItemText>
              </TextContainer>
            )}
            {correct === false && (
              <TextContainer>
                <QuizItemText>Sorry, wrong answer :(</QuizItemText>
                <QuizItemText>Let&apos;s try the next question.</QuizItemText>
                <QuizItemText>Good Luck!</QuizItemText>
              </TextContainer>
            )}
            {!correct && correct !== false && (
              <React.Fragment>
                <QuestionContainer onPress={() => this.setState({ showQuestion: !showQuestion })}>
                  <TextContainer>
                    {showQuestion && (
                      <React.Fragment>
                        <QuizItemText>Question:</QuizItemText>
                        <QuizItemText>{question.question}</QuizItemText>
                      </React.Fragment>
                    )}
                    {!showQuestion && (
                      <React.Fragment>
                        <QuizItemText>Answer:</QuizItemText>
                        <QuizItemText>{question.answer}</QuizItemText>
                      </React.Fragment>
                    )}
                  </TextContainer>
                </QuestionContainer>
                <QuizFormView>
                  <TextInput
                    placeholder="Answer"
                    onChangeText={value => this.setState({ answer: value })}
                    value={answer}
                  />
                  <TextButton width="120" onPress={this.checkAnswer} disabled={!this.isValid()}>Submit</TextButton>
                </QuizFormView>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {done && (
          <TextContainer>
            <QuizItemText>
              Congrats! You&apos;ve finished the quiz.
            </QuizItemText>
            <QuizItemText>
              You scored {score / count * 100}% of correct answers
            </QuizItemText>
            <QuizFormView>
              <TextButton white onPress={() => navigation.navigate('DeckList')}>Back to deck list</TextButton>
            </QuizFormView>
          </TextContainer>
        )}
      </QuizItemView>
    )
  }
}

const mapStateToProps = ({ cardList }) => ({
  cardList: cardList.questions,
})

QuizView.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  cardList: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect(mapStateToProps, null)(QuizView)
