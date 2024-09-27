import {ObjectId} from 'mongoose'
import {
  Auth_Role,
  Auth_User,
  IdResponse,
} from '../../../graphql/generated-types'

export interface IAuthController {
  auth_role_add?: (role: string) => Promise<Auth_Role>
  auth_role_delete?: (id: ObjectId) => Promise<IdResponse>
  auth_role_getAll?: () => Promise<Auth_Role[]>
}
