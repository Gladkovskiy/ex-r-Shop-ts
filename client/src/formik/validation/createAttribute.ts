import * as Yup from 'yup'
import {errors, TFn, TKeyError} from './settings'

export interface IValue {
  description: {
    ru: string
    en: string
  }
  value: string
}

export interface IForm {
  group: string
  attr_name: string
  values?: IValue[] | null
  ru: string
  en: string
}
const initialValues: IForm = {
  group: '',
  attr_name: '',
  values: null,
  ru: '',
  en: '',
}
export type TKeyValues = keyof IForm

export const validation: TFn<IForm> = lang => {
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
    group: Yup.string().required(errors.obligatoryField[lang as TKeyError]),
    attr_name: Yup.string()
      .matches(/^[aA-zZ\s]+$/, errors.english[lang as TKeyError])
      .required(errors.obligatoryField[lang as TKeyError]),

    ru: Yup.string()
      .required(errors.obligatoryField[lang as TKeyError])
      .matches(/^[аА-яЯ\s]+$/, errors.russian[lang as TKeyError]),

    en: Yup.string()
      .matches(/^[aA-zZ\s]+$/, errors.english[lang as TKeyError])
      .required(errors.obligatoryField[lang as TKeyError]),

    values: Yup.array().nullable(),
  })

  return {
    initialValues,
    validationSchema,
  }
}
