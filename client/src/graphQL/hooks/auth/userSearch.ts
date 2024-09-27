import {useLazyQuery} from '@apollo/client'
import {USER_SEARCH} from '../../auth.graphql'

export const useGQUserSearch = () => {
  const query = useLazyQuery(USER_SEARCH, {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'network-only',
  })

  return query
}
