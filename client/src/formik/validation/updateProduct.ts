import * as Yup from 'yup'
import {errors, TFn, TKeyError} from './settings'

export interface IForm {
  active: boolean
  newPrice: number
  oldPrice: number
  quantity: number
}

const initialValues: IForm = {
  active: false,
  newPrice: 0,
  oldPrice: 0,
  quantity: 0,
}

export type TKeyValues = keyof IForm

export const validation: TFn<IForm> = lang => {
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
    active: Yup.boolean().required(),
    newPrice: Yup.number()
      .min(0)
      .required(errors.obligatoryField[lang as TKeyError]),
    oldPrice: Yup.number()
      .min(0)
      .required(errors.obligatoryField[lang as TKeyError]),
    quantity: Yup.number().required(errors.obligatoryField[lang as TKeyError]),
  })

  return {
    initialValues,
    validationSchema,
  }
}
