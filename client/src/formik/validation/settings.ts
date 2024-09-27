import * as Yup from 'yup'

interface IValidation<T> {
  validationSchema: Yup.ObjectSchema<Yup.AnyObject>
  initialValues: T
}

export type TFn<T> = (lang: string) => IValidation<T>

export type TKeyError = keyof {
  ru: string
  en: string
}

export const errors = {
  obligatoryField: {
    ru: 'Обязательное поле',
    en: 'Obligatory field',
  },
  onlyLetters: {
    ru: 'Поле должно содержать только буквы',
    en: 'The field must contain only letters',
  },
  email: {
    ru: 'Некорректный адрес почты',
    en: 'Incorrect mail address',
  },
  phone: {
    ru: 'Некорректный номер телефона',
    en: 'Incorrect phone number',
  },
  english: {
    ru: 'Только английские буквы',
    en: 'Only English letters',
  },
  russian: {
    ru: 'Только русские буквы',
    en: 'Only russian letters',
  },
  file: {
    ru: 'Выберите файл',
    en: 'Choose File',
  },
}
