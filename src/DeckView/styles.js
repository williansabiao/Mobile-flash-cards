import styled from 'styled-components'

export const DeckItemView = styled.View`
  background-color: #f0f0f0;
  justify-content: space-between;
  flex: 1;
`

export const TextContainer = styled.View`
  justify-content: center;
  flex: 1;
`

export const DeckItemText = styled.Text`
  font-size: 22px;
  justify-content: center;
  text-align: center;
  color: #000;
`

export const DeckItemSubText = DeckItemText.extend`
  color: grey;
  font-size: 14px;
`

export const ButtonsGroup = styled.View`
  align-items: center;
  margin-bottom: 60;
`

export default null
