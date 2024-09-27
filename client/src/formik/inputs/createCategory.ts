import {IInputData1} from '../../types/formik/input'
import {TKeyValues} from '../validation/createCategory'

export const inputsData: IInputData1<TKeyValues>[] = [
  {label: {ru: 'Название', en: 'Name'}, inputName: 'type'},
  {
    label: {ru: 'Описание на русском', en: 'Description in Russian'},
    inputName: 'ru',
  },
  {
    label: {ru: 'Описание на английском', en: 'Description in English'},
    inputName: 'en',
  },
]
