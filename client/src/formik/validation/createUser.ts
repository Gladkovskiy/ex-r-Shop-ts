import * as Yup from 'yup'
import {errors, TFn, TKeyError} from '../validation/settings'

export interface IForm {
  name: string
  surname: string
  mail: string
  password: string
  tel: string
  role: string
}
const initialValues: IForm = {
  name: '',
  surname: '',
  mail: '',
  password: '',
  tel: '',
  role: 'USER',
}
const phoneRegExp = /^\d{3}\d{2}\d{2}\d{2}$/
// eslint-disable-next-line
const mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export type TKeyValues = keyof IForm

export const validation: TFn<IForm> = language => {
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
    name: Yup.string()
      .required(errors.obligatoryField[language as TKeyError])
      .matches(/^[aA-zZ-аА-яЯ\s]+$/, errors.onlyLetters[language as TKeyError]),
    surname: Yup.string()
      .required(errors.obligatoryField[language as TKeyError])
      .matches(/^[aA-zZ-аА-яЯ\s]+$/, errors.onlyLetters[language as TKeyError]),
    mail: Yup.string()
      .matches(mailRegExp, errors.email[language as TKeyError])
      .required(errors.obligatoryField[language as TKeyError]),
    password: Yup.string().required(
      errors.obligatoryField[language as TKeyError]
    ),
    tel: Yup.string()
      .matches(phoneRegExp, errors.phone[language as TKeyError])
      .required(errors.obligatoryField[language as TKeyError]),
    role: Yup.string().required(errors.obligatoryField[language as TKeyError]),
  })

  return {
    initialValues,
    validationSchema,
  }
}
