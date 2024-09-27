import {IInputData1} from '../../types/formik/input'
import {TKeyValues} from '../validation/addAttributeValue'

export const inputsData: IInputData1<TKeyValues>[] = [
  {label: {ru: 'Значение', en: 'Meaning'}, inputName: 'value'},
  {
    label: {ru: 'Описание на русском', en: 'Description in Russian'},
    inputName: 'ru',
  },
  {
    label: {ru: 'Описание на английском', en: 'Description in English'},
    inputName: 'en',
  },
]
