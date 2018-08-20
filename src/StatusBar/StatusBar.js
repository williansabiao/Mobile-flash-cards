import React from 'react'
import { StatusBar } from 'react-native'
import { Constants } from 'expo'

import { StatusBarContainer } from './styles'

const StatusBarComponent = () => (
  <StatusBarContainer height={Constants.statusBarHeight}>
    <StatusBar translucent barStyle="light-content" />
  </StatusBarContainer>
)

export default StatusBarComponent
