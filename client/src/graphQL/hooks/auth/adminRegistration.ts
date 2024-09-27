import {useMutation} from '@apollo/client'

import {ADM_REGISTRATION} from '../../auth.graphql'
import {IForm} from '../../../formik/validation/createUser'
import {toUpperCase} from '../../../utils/string/upperCase'

interface IAdmReg {
  onSuccess: () => void
  user: IForm
}

export const useGQAdmReg = ({
  user: {name, surname, tel, ...another},
  onSuccess,
}: IAdmReg) => {
  const mutation = useMutation(ADM_REGISTRATION, {
    variables: {
      user: {
        fullname: toUpperCase(`${surname} ${name}`),
        tel: '+380' + tel,
        ...another,
      },
    },
    onCompleted: () => onSuccess(),
    onError: ({message}) => console.error(message),
  })

  return mutation
}
