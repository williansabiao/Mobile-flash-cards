import React from 'react'

import { StatusBar } from 'react-native'
import { StatusBarContainer } from './styles'

const StatusBarComponent = () => (
  <StatusBarContainer>
    <StatusBar translucent barStyle="light-content" />
  </StatusBarContainer>
)

export default StatusBarComponent
