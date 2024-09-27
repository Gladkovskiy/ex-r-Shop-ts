import {Resolvers} from '../../generated-types'

const roleResolver: Resolvers = {
  Mutation: {
    auth_role_add: (_, {role}, {controllers: {roleController}}) =>
      roleController.auth_role_add(role),

    auth_role_delete: (_, {id}, {controllers: {roleController}}) =>
      roleController.auth_role_delete(id),
  },
  Query: {
    auth_role_getAll: (_, __, {controllers: {roleController}}) =>
      roleController.auth_role_getAll(),
  },
}

export default roleResolver
