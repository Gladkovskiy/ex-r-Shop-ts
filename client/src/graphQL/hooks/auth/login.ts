import {useMutation} from '@apollo/client'
import {CHECK_AUTH, LOGIN} from '../../auth.graphql'
import {useAuthAction} from '../../../hooks/useAction'

export const useGQLogin = () => {
  const {login, setError} = useAuthAction()

  const mutation = useMutation(LOGIN, {
    onCompleted: ({user}) => {
      login(user)
    },
    onError: error => {
      setError(error.message)
    },
    update: (cache, {data}) => {
      if (data?.user)
        cache.writeQuery({
          query: CHECK_AUTH,
          data: {
            user: {...data.user},
          },
        })
    },
  })

  return mutation
}
