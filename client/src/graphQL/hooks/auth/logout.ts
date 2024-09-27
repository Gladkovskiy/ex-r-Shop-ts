import {useMutation} from '@apollo/client'
import {LOGOUT} from '../../auth.graphql'
import {useAuthAction} from '../../../hooks/useAction'

export const useGQLogout = () => {
  const {logout} = useAuthAction()
  const mutation = useMutation(LOGOUT, {
    onCompleted: () => {
      logout()
    },
  })

  return mutation
}
