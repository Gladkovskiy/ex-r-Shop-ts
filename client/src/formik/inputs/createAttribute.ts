import {IInputData1} from '../../types/formik/input'
import {TKeyValues} from '../validation/createAttribute'

export const inputsData: IInputData1<TKeyValues>[] = [
  {
    label: {ru: 'Название атрибута', en: 'Name of the attribute'},
    inputName: 'attr_name',
  },
  {
    label: {ru: 'Описание на русском', en: 'Description in Russian'},
    inputName: 'ru',
  },
  {
    label: {ru: 'Описание на английском', en: 'Description in English'},
    inputName: 'en',
  },
]
