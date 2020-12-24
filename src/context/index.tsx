import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'

import { UserProvider } from './user'

const queryClient = new QueryClient()

const Provider: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </UserProvider>
  </QueryClientProvider>
)

export default Provider
