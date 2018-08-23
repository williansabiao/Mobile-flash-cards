import React from 'react'
import PropTypes from 'prop-types'
import { Text, Button } from './styles'

const TextButton = ({
  children,
  onPress,
  white,
  width,
  disabled,
  ...rest
}) => (
  <Button {...rest} onPress={onPress} white={white} width={width} disabled={disabled}>
    <Text white={white} disabled={disabled}>{children}</Text>
  </Button>
)

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  white: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
}

TextButton.defaultProps = {
  white: false,
  width: '',
  disabled: false,
}

export default TextButton
