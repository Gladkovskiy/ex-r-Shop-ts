import {gql} from './__generated__'

export const GET_ROLES = gql(`
query Auth_role_getAll {
  roles:auth_role_getAll {
    type
  }
}
`)
