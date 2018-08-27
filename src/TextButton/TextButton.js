import React from 'react'
import PropTypes from 'prop-types'
import { Text, Button } from './styles'

const TextButton = ({
  children,
  onPress,
  white,
  width,
  red,
  green,
  disabled,
  ...rest
}) => (
  <Button
    {...rest}
    onPress={onPress}
    white={white}
    red={red}
    green={green}
    width={width}
    disabled={disabled}
  >
    <Text white={white} red={red} green={green} disabled={disabled}>{children}</Text>
  </Button>
)

TextButton.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  white: PropTypes.bool,
  red: PropTypes.bool,
  green: PropTypes.bool,
  width: PropTypes.string,
  disabled: PropTypes.bool,
}

TextButton.defaultProps = {
  white: false,
  red: false,
  green: false,
  width: '',
  disabled: false,
}

export default TextButton
