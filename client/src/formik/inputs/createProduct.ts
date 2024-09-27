import {IInputData1} from '../../types/formik/input'
import {TKeyValues} from '../validation/createProduct'

export const inputsData: IInputData1<TKeyValues>[] = [
  {
    label: {ru: 'Название на русском', en: 'The name is in Russian'},
    inputName: 'nameRu',
  },
  {
    label: {ru: 'Название на английском', en: 'Name in English'},
    inputName: 'nameEn',
  },
  {
    label: {ru: 'Описание на русском', en: 'Description in Russian'},
    inputName: 'descriptionRu',
  },
  {
    label: {ru: 'Описание на английском', en: 'Description in English'},
    inputName: 'descriptionEn',
  },
  {label: {ru: 'Цена', en: 'Price'}, inputName: 'price'},
  {label: {ru: 'Количество', en: 'Quantity'}, inputName: 'quantity'},
  {
    label: {
      ru: 'Фразы, слова для поиска через запятую',
      en: 'Phrases, words for searching through a comma',
    },
    inputName: 'searchTag',
  },
]
