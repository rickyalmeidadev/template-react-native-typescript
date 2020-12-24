import api from '@/providers/user'

export interface User {
  id: string
  email: string
  token: string
}

export const me = async () => {
  const { data } = await api.get<User>('/me')
  return data
}
