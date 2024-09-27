import {IInputData1} from '../../types/formik/input'
import {TKeyValues} from '../validation/createUser'

export const inputsData: IInputData1<TKeyValues>[] = [
  {
    inputName: 'name',
    label: {
      ru: 'Имя',
      en: 'Name',
    },
  },
  {inputName: 'surname', label: {ru: 'Фамилия', en: 'Surname'}},
  {
    inputName: 'tel',
    label: {
      ru: 'Телефон',
      en: 'Phone',
    },
    leftAddon: '+380',
  },
  {
    inputName: 'mail',
    label: {
      ru: 'Почта',
      en: 'Email',
    },
  },
  {
    inputName: 'password',
    label: {
      ru: 'Пароль',
      en: 'Password',
    },
    password: true,
  },
]
