import styled from 'styled-components'

export const DeckListFlatList = styled.FlatList`
  width: 100%;
  background-color: #fff;
  flex: 1;
`

export const DeckItemView = styled.View`
  border-bottom-width: 1;
  border-bottom-color: grey;
  background-color: #f0f0f0;
  height: 200;
  justify-content: center;
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
