import {useMutation} from '@apollo/client'
import {USER_DELETE, USER_SEARCH} from '../../auth.graphql'

export const useGQUserDelete = (text: string) => {
  const mutation = useMutation(USER_DELETE, {
    update: (cache, {data}) => {
      const oldData = cache.readQuery({
        query: USER_SEARCH,
        variables: {text},
      })

      if (oldData?.users && data?.auth_user_delete?.id)
        cache.writeQuery({
          query: USER_SEARCH,
          variables: {text},
          data: {
            users: oldData.users.filter(
              ({_id}) => _id !== data.auth_user_delete?.id
            ),
          },
        })
    },
  })

  return mutation
}
