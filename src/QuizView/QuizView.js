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
  QuizItemTextError,
  QuizItemTextSuccess,
  BtnText,
} from './styles'


const INITIAL_STATE = {
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
class QuizView extends Component {
  state = INITIAL_STATE

  componentWillMount() {
    this.setState(this.setQuestion())
  }

  setQuestion = (props = this.props) => {
    const { navigation, cardList } = props
    const { id } = navigation.state.params
    const questions = cardList[id] || []

    return {
      ...INITIAL_STATE,
      question: questions[0],
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

    this.setState({
      correct: isCorrect,
      score: score + (isCorrect ? 1 : 0),
    })
  }

  resetQuiz = () => {
    this.setState(this.setQuestion())
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

    if (!question) return null

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
                <QuizItemTextSuccess>Cool, that is correct!</QuizItemTextSuccess>
              </TextContainer>
            )}
            {correct === false && (
              <TextContainer>
                <QuizItemTextError>Sorry, wrong answer :(</QuizItemTextError>
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
                    <BtnText>{showQuestion ? 'Answer' : 'Question'}</BtnText>
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
              You scored {parseInt(score / count * 100, 10)}% of correct answers
            </QuizItemText>
            <QuizFormView>
              <TextButton white onPress={() => navigation.navigate('DeckList')}>Back to deck list</TextButton>
              <TextButton width="120" onPress={this.resetQuiz} white>Restart Quiz</TextButton>
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
