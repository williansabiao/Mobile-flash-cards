import styled from 'styled-components'

const getButtonColor = ({ white = false, disabled = false }) => {
  let color = 'black'
  if (disabled) color = '#e2e2e2'
  if (white) color = 'white'
  return color
}

const getTextColor = ({ white = false, disabled = false }) => {
  let color = 'white'
  if (disabled) color = '#6d6d6d'
  if (white) color = 'black'
  return color
}

export const Button = styled.TouchableOpacity`
  border-color: ${getButtonColor};
  border-width: 1px;
  background-color: ${getButtonColor};
  padding: 15px 20px;
  margin: 10px 0;
  width: ${({ width = false }) => (width || '200px')}
  border-radius: 5px;
`

export const Text = styled.Text`
  color: ${getTextColor};
  text-align: center;
`
