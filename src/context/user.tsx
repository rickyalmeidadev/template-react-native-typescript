import React, { createContext } from 'react'
import { useQuery } from 'react-query'

import { me, User } from '@/services/users'

interface UserContextValue {
  user?: User
  isLoading: boolean
}

const UserContext = createContext<UserContextValue | null>(null)

const UserProvider: React.FC = ({ children }) => {
  const { data: user, isLoading } = useQuery('me', me)

  return <UserContext.Provider value={{ user, isLoading }}>{children}</UserContext.Provider>
}

export { UserProvider, UserContext }
