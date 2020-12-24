import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '@/screens'

const { Navigator, Screen } = createStackNavigator()

const Routes = () => (
  <Navigator headerMode="none">
    <Screen name="Home" component={Home} />
  </Navigator>
)

export default Routes
