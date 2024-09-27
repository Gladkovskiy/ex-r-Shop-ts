import * as Yup from 'yup'
import {errors, TFn, TKeyError} from './settings'

export interface IForm {
  firstname: string
  name: string
  secondname: string
  tel: string
  adress: string
}

export const initialValues: IForm = {
  firstname: '',
  name: '',
  secondname: '',
  tel: '',
  adress: 'delivery API',
}

const phoneRegExp =
  /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/

export const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
  firstname: Yup.string()
    .required('Обязательное поле')
    .matches(/^[aA-zZ-аА-яЯ\s]+$/, 'Имя должно содержать только буквы'),
  name: Yup.string()
    .required('Обязательное поле')
    .matches(/^[aA-zZ-аА-яЯ\s]+$/, 'Имя должно содержать только буквы'),
  secondname: Yup.string()
    .required('Обязательное поле')
    .matches(/^[aA-zZ-аА-яЯ\s]+$/, 'Фамилия должна содержать только буквы'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Некорректный номер телефона')
    .required('Обязательное поле'),
  adress: Yup.string().required('Обязательное поле'),
})

export type TKeyValues = keyof IForm

export const validation: TFn<IForm> = lang => {
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
    firstname: Yup.string()
      .required(errors.obligatoryField[lang as TKeyError])
      .matches(/^[aA-zZ-аА-яЯ\s]+$/, errors.onlyLetters[lang as TKeyError]),
    name: Yup.string()
      .required(errors.obligatoryField[lang as TKeyError])
      .matches(/^[aA-zZ-аА-яЯ\s]+$/, errors.onlyLetters[lang as TKeyError]),
    secondname: Yup.string()
      .required(errors.obligatoryField[lang as TKeyError])
      .matches(/^[aA-zZ-аА-яЯ\s]+$/, errors.onlyLetters[lang as TKeyError]),
    tel: Yup.string()
      .matches(phoneRegExp, errors.phone[lang as TKeyError])
      .required(errors.obligatoryField[lang as TKeyError]),
    adress: Yup.string().required(errors.obligatoryField[lang as TKeyError]),
  })

  return {
    initialValues,
    validationSchema,
  }
}
