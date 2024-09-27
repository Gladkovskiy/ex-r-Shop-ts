import * as Yup from 'yup'
import {errors, TFn, TKeyError} from './settings'

export interface IForm {
  type: string
  ru: string
  en: string
  img: FileList | null
}
const initialValues: IForm = {
  type: '',
  ru: '',
  en: '',
  img: null,
}
export type TKeyValues = keyof IForm

export const validation: TFn<IForm> = lang => {
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
    type: Yup.string()
      .matches(/^[aA-zZ\s]+$/, errors.english[lang as TKeyError])
      .required(errors.obligatoryField[lang as TKeyError]),
    ru: Yup.string()
      .required(errors.obligatoryField[lang as TKeyError])
      .matches(/^[аА-яЯ\s]+$/, errors.russian[lang as TKeyError]),
    en: Yup.string()
      .matches(/^[aA-zZ\s]+$/, errors.english[lang as TKeyError])
      .required(errors.obligatoryField[lang as TKeyError]),
    img: Yup.mixed<FileList>().required(errors.file[lang as TKeyError]),
  })

  return {
    initialValues,
    validationSchema,
  }
}
