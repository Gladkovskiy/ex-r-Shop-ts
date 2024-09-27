import {IInputData1} from '../../types/formik/input'
import {TKeyValues} from '../validation/order'

export const inputs: IInputData1<TKeyValues>[] = [
  {label: {ru: 'Фамилия', en: 'Surname'}, inputName: 'firstname'},
  {label: {ru: 'Имя', en: 'Name'}, inputName: 'name'},
  {label: {ru: 'Отчество', en: 'Secondname'}, inputName: 'secondname'},
  {label: {ru: 'Телефон', en: 'Phone'}, inputName: 'tel'},
  {label: {ru: 'Адрес', en: 'Address'}, inputName: 'adress'},
]
