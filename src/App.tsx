import React from 'react'
import { StatusBar } from 'react-native'

import Provider from '@/context'
import Routes from '@/routes'

const App: React.FC = () => (
  <Provider>
    <StatusBar backgroundColor="#000" barStyle="light-content" />
    <Routes />
  </Provider>
)

export default App
