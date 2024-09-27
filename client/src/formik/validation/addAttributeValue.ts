import * as Yup from 'yup'
import {errors, TFn, TKeyError} from './settings'

export interface IForm {
  value: string
  ru: string
  en: string
}
const initialValues: IForm = {
  value: '',
  ru: '',
  en: '',
}
export type TKeyValues = keyof IForm

export const validation: TFn<IForm> = lang => {
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
    value: Yup.string()
      .matches(/^[aA-zZ\s\d]+$/, errors.english[lang as TKeyError])
      .required(errors.obligatoryField[lang as TKeyError]),

    ru: Yup.string().required(errors.obligatoryField[lang as TKeyError]),
    // .matches(/^[аА-яЯ\s\d]+$/, 'только русские буквы'),

    en: Yup.string()
      // .matches(/^[aA-zZ\s\d]+$/, 'только английские буквы')
      .required(errors.obligatoryField[lang as TKeyError]),
  })

  return {
    initialValues,
    validationSchema,
  }
}
