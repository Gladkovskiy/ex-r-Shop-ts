import {useQuery} from '@apollo/client'
import {GET_SEARCH} from '../../search.graphql'

export const useGQGetSearch = (text: string) => {
  const query = useQuery(GET_SEARCH, {
    variables: {
      searchText: text,
    },
  })

  return query
}
