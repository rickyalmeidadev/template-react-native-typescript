import axios from 'axios'
import { getToken, removeToken } from '@/helpers'

const __API__ = 'http://localhost:5000/v1/users'

const instance = axios.create({ baseURL: __API__ })

instance.interceptors.request.use(async config => {
  const token = await getToken()
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.status === 401) await removeToken()
    return Promise.reject(error)
  }
)

export default instance
