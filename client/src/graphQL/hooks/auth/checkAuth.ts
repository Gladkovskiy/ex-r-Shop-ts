import {useQuery} from '@apollo/client'
import {CHECK_AUTH} from '../../auth.graphql'
import {useAuthAction} from '../../../hooks/useAction'

export const useGQCheckAuth = () => {
  const {logout, login} = useAuthAction()

  const query = useQuery(CHECK_AUTH, {
    onCompleted: ({user}) => {
      if (!user.id) logout()
      else login({...user})
    },
  })

  return query
}
