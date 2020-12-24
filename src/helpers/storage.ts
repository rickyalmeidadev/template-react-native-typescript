import AsyncStorage from '@react-native-async-storage/async-storage'

export const getToken = () => AsyncStorage.getItem('@app/token')

export const removeToken = () => AsyncStorage.removeItem('@app/token')
