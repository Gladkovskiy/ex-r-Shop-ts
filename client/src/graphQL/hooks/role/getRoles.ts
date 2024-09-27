import {useQuery} from '@apollo/client'
import {GET_ROLES} from '../../role.graphql'

export const useGQGetRoles = () => {
  const query = useQuery(GET_ROLES)

  return query
}
