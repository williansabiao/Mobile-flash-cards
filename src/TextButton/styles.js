import styled from 'styled-components'

const getButtonColor = prop => ({
  white = false,
  green = false,
  red = false,
  disabled = false,
  checked = false,
}) => {
  let color = 'black'
  if (disabled) color = '#e2e2e2'
  if (white) color = 'white'
  if (green) color = 'green'
  if (red) color = 'red'
  if (prop === 'border' && checked) color = 'black'
  return color
}

const getTextColor = ({
  white = false,
  red = false,
  disabled = false,
}) => {
  let color = 'white'
  if (disabled) color = '#6d6d6d'
  if (white && !red) color = 'black'
  return color
}

export const Button = styled.TouchableOpacity`
  border-color: ${getButtonColor('border')};
  border-width: ${checked => (checked ? '2px' : '1px')};
  background-color: ${getButtonColor()};
  padding: 15px 20px;
  margin: 10px 0;
  width: ${({ width = false }) => (width || '200px')}
  border-radius: 5px;
`

export const Text = styled.Text`
  color: ${getTextColor};
  text-align: center;
`
