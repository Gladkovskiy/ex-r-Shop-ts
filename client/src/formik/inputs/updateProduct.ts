import {IInputData1} from '../../types/formik/input'
import {TKeyValues} from '../validation/updateProduct'

export const inputsData: IInputData1<TKeyValues>[] = [
  {label: {ru: 'Старая цена', en: 'Old price'}, inputName: 'oldPrice'},
  {label: {ru: 'Новая цена', en: 'New price'}, inputName: 'newPrice'},
  {
    label: {ru: 'Количетсво товара', en: 'Quantity of goods'},
    inputName: 'quantity',
  },
]
