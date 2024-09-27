import {ObjectId} from 'mongoose'
import {
  Auth_User,
  Auth_User_AdminRegistration,
  Auth_User_LoginData,
  Auth_User_NewPass,
  Auth_User_PaginationAll,
  Auth_User_Registration,
  Auth_User_Update,
  IdResponse,
} from '../../../graphql/generated-types'
import {IJwt} from '../../../utils/token'
import {Response} from 'express'

export interface IUserController {
  auth_user_getAll?: (
    page: number,
    limit: number
  ) => Promise<Auth_User_PaginationAll>
  auth_user_getOne?: (id: ObjectId) => Promise<Auth_User>

  auth_user_search?: (text: string) => Promise<Auth_User[]>

  auth_user_login?: (
    login: string,
    pass: string,
    res: Response
  ) => Promise<Auth_User_LoginData>

  auth_user_checkToken?: (
    user: IJwt | null,
    res: Response
  ) => Promise<Auth_User_LoginData>
  auth_user_logout?: (res: Response) => void

  auth_user_registration?: (user: Auth_User_Registration) => Promise<Auth_User>
  auth_user_confirmRegistration?: (id: ObjectId) => Promise<Auth_User>

  auth_user_adminRegistration?: (
    user: Auth_User_AdminRegistration
  ) => Promise<Auth_User>

  auth_user_delete?: (id: ObjectId) => Promise<IdResponse>

  auth_user_update?: (user: Auth_User_Update) => Promise<Auth_User>
  auth_user_newPass?: (newPass: Auth_User_NewPass) => Promise<IdResponse>
}
