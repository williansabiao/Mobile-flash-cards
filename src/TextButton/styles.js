import styled from 'styled-components'

export const Button = styled.TouchableOpacity`
  border-color: ${({ white = false }) => (white ? 'black' : 'white')};
  border-width: 1px;
  background-color: ${({ white = false }) => (white ? 'white' : 'black')}
  padding: 15px 20px;
  margin: 10px 0;
  width: ${({ width = false }) => (width || '200px')}
  border-radius: 5px;
`

export const Text = styled.Text`
  color: ${({ white = false }) => (white ? 'black' : 'white')}
  text-align: center;
`
