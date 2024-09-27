import * as Yup from 'yup'

interface IForm {
  name: string
  surname: string
  mail: string
  password: string
  tel: string
}

export const initialValues: IForm = {
  name: '',
  surname: '',
  mail: '',
  password: '',
  tel: '',
}

const phoneRegExp = /^\d{3}\d{2}\d{2}\d{2}$/
// eslint-disable-next-line
const mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const validationSchema: Yup.ObjectSchema<IForm> = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  surname: Yup.string().required('Обязательное поле'),
  mail: Yup.string()
    .matches(mailRegExp, 'Некорректный адрес почты')
    .required('Обязательное поле'),
  password: Yup.string().required('Обязательное поле'),
  tel: Yup.string()
    .matches(phoneRegExp, 'Некорректный номер телефона')
    .required('Обязательное поле'),
})

export type TKeyValues = keyof IForm
