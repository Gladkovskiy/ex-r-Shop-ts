import jwt from 'jsonwebtoken'
import {onError} from './error/onError'
import dotenv from 'dotenv'

dotenv.config()

export interface IJwt {
  id: string
  login: string
  role: string
}

export const jwtCreate = ({id, login, role}: IJwt): string =>
  jwt.sign({id, role, login}, process.env.SECRET_KEY, {expiresIn: '7d'})

export const jwtDecode = (jwtToken: string): IJwt | null => {
  try {
    // `Bearer ${token}`
    const token = jwtToken.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET_KEY)

    return decoded as IJwt
  } catch (error) {
    // console.log(error.message)
    return null
  }
}

export const jwtDecodeCookie = (jwtToken: string | undefined): IJwt | null => {
  try {
    const arrCookie = jwtToken.split('; ')
    const findToken = arrCookie.find(
      cookieItem => cookieItem.split('=')[0] === 'token'
    )

    if (findToken) {
      const token = findToken.split('=')[1]
      const decoded = jwt.verify(token, process.env.SECRET_KEY)

      return decoded as IJwt
    } else {
      throw new Error()
    }
  } catch (error) {
    return null
  }
}

export const checkRole = (user: IJwt | null, role: string): void => {
  if (!user) onError('Вы не авторизированы')
  if (user.role !== role) onError('У вас нет доступа')
}
