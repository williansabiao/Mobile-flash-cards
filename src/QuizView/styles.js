import styled from 'styled-components'

export const QuizItemView = styled.KeyboardAvoidingView`
  background-color: #f0f0f0;
  justify-content: center;
  flex: 1;
`

export const TextContainer = styled.View`
  justify-content: center;
  flex: 1;
`

export const CounterView = styled.View`
  align-self: flex-start;
  margin: 10px;
`

export const CounterText = styled.Text`
  color: black;
  font-size: 14px;
`

export const QuizItemText = styled.Text`
  font-size: 22px;
  justify-content: center;
  text-align: center;
  color: #000;
`

export const QuizItemTextError = QuizItemText.extend`
  color: red;
  padding: 5px 0
`

export const QuizItemTextSuccess = QuizItemTextError.extend`
  color: green;
`

export const QuizFormView = styled.View`
  align-items: center;
  margin-bottom: 200;
`

export const TextInput = styled.TextInput`
  font-size: 16px;
  border-width: 1px;
  border-color: black;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 80%;
`
export const QuestionContainer = styled.TouchableOpacity`
  flex: 1;
`

export const BtnText = styled.Text`
  color: #1a2e77;
  font-size: 14px;
  margin: 10px 0;
  text-align: center;
  width: 100%;
`

export default null
