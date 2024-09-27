import * as Yup from 'yup'
import {errors, TFn, TKeyError} from './settings'

interface IDescriptionLang {
  ru: string
  en: string
}

interface IAttrValue {
  description: IDescriptionLang
  value: string
}

export interface IFilter {
  attr_description: IDescriptionLang
  attr_name: string
  attr_value: IAttrValue
}

export interface IForm {
  nameRu: string
  nameEn: string
  descriptionRu: string
  descriptionEn: string
  group: string
  price: number
  quantity: number
  filters?: IFilter[]
  imgs: FileList | null
  searchTag: string
}

const initialValues: IForm = {
  nameRu: '',
  nameEn: '',
  descriptionRu: '',
  descriptionEn: '',
  group: '',
  price: 0,
  quantity: 0,
  filters: [],
  imgs: null,
  searchTag: '',
}

export type TKeyValues = keyof IForm

export const validation: TFn<IForm> = lang => {
  const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
    nameRu: Yup.string().required(errors.obligatoryField[lang as TKeyError]),
    nameEn: Yup.string().required(errors.obligatoryField[lang as TKeyError]),
    descriptionRu: Yup.string().required(
      errors.obligatoryField[lang as TKeyError]
    ),
    descriptionEn: Yup.string().required(
      errors.obligatoryField[lang as TKeyError]
    ),
    group: Yup.string().required(errors.obligatoryField[lang as TKeyError]),
    price: Yup.number().required(errors.obligatoryField[lang as TKeyError]),
    quantity: Yup.number().required(errors.obligatoryField[lang as TKeyError]),
    filters: Yup.array().required(),
    imgs: Yup.mixed<FileList>().required(errors.file[lang as TKeyError]),
    searchTag: Yup.string().required(errors.obligatoryField[lang as TKeyError]),
  })

  return {
    initialValues,
    validationSchema,
  }
}
