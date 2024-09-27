import * as Yup from 'yup'

interface IForm {
  login: string
  pass: string
}

export const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
  login: Yup.string().required('Не ввели логин'),
  pass: Yup.string().required('Не ввели пароль'),
})

export const initialValues: IForm = {
  login: '',
  pass: '',
}

export type TKeyValues = keyof IForm
