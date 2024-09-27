import {authModels} from '../../mongoDB/model/auth'
import {IAuthController} from '../../types/controllers/auth/role'
import {onError} from '../../utils/error/onError'

export const roleController: IAuthController = {
  auth_role_add: async role => await authModels.roleModel.create({type: role}),

  auth_role_delete: async id => {
    const res = await authModels.roleModel.findByIdAndDelete(id)

    if (!res) onError('Not found role to delete')

    return {id: res._id}
  },

  auth_role_getAll: async () => await authModels.roleModel.find(),
}
