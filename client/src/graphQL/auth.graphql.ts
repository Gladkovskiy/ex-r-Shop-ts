import {gql} from './__generated__'

export const LOGIN = gql(`
mutation Auth_user_login($login: String!, $pass: String!) {
  user:auth_user_login(login: $login, pass: $pass) {
    id
    login
    role
    tel
  }
}
`)

export const LOGOUT = gql(`
mutation Mutation {
  auth_user_logout
}
`)

export const CHECK_AUTH = gql(`query Auth_user_checkToken {
  user:auth_user_checkToken {
    id
    login
    role
    tel
  }
}`)

export const ADM_REGISTRATION = gql(`
mutation Auth_user_adminRegistration($user: Auth_user_adminRegistration!) {
  name:auth_user_adminRegistration(user: $user) {
    fullname
  }
}
`)

export const USER_SEARCH = gql(`
query Auth_user_search($text: String!) {
  users: auth_user_search(text: $text) {
    fullname
    mail
    tel
    _id
  }
}
`)

export const USER_DELETE = gql(`
mutation Auth_user_delete($authUserDeleteId: ObjectID!) {
  auth_user_delete(id: $authUserDeleteId) {
    id
  }
}
`)
