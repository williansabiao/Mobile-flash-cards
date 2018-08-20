import React from 'react'
import PropTypes from 'prop-types'
import { Text, Button } from './styles'

const TextButton = ({
  children,
  onPress,
  white,
  width,
}) => (
  <Button onPress={onPress} white={white} width={width}>
    <Text white={white}>{children}</Text>
  </Button>
)

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  white: PropTypes.bool,
  width: PropTypes.string,
}

TextButton.defaultProps = {
  white: false,
  width: '',
}

export default TextButton
