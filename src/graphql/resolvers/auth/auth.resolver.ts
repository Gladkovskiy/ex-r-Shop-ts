import {Resolvers} from '../../generated-types'

const authResolvers: Resolvers = {
  Mutation: {
    auth_user_adminRegistration: (_, {user}, {controllers: {userController}}) =>
      userController.auth_user_adminRegistration(user),

    auth_user_registration: (_, {user}, {controllers: {userController}}) =>
      userController.auth_user_registration(user),

    auth_user_delete: (_, {id}, {controllers: {userController}}) =>
      userController.auth_user_delete(id),

    auth_user_update: (_, {user}, {controllers: {userController}}) =>
      userController.auth_user_update(user),

    auth_user_newPass: (_, {newPass}, {controllers: {userController}}) =>
      userController.auth_user_newPass(newPass),

    ayth_user_confirmRegistration: (_, {id}, {controllers: {userController}}) =>
      userController.auth_user_confirmRegistration(id),

    auth_user_logout: (_, __, {controllers: {userController}, res}) =>
      userController.auth_user_logout(res),

    auth_user_login: (_, {login, pass}, {controllers: {userController}, res}) =>
      userController.auth_user_login(login, pass, res),
  },
  Query: {
    auth_user_getAll: (_, {limit, page}, {controllers: {userController}}) =>
      userController.auth_user_getAll(page, limit),

    auth_user_getOne: (_, {id}, {controllers: {userController}}) =>
      userController.auth_user_getOne(id),

    auth_user_checkToken: (_, __, {controllers: {userController}, user, res}) =>
      userController.auth_user_checkToken(user, res),

    auth_user_search: (_, {text}, {controllers: {userController}}) =>
      userController.auth_user_search(text),
  },
}

export default authResolvers
