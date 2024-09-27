import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import {Auth_User} from '../graphql/generated-types'

dotenv.config()

export const sendMail = async (user: Auth_User) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,

    auth: {
      user: process.env.COMPANY_MAIL,
      pass: process.env.MAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: `"SHOP" <${process.env.COMPANY_MAIL}>`,
    to: user.mail,
    subject: 'Подтверждение регистрации',
    html: `<h1>${user.fullname}, Вас приветствует магазин SHOP</h1>
        <p>для подтверждения регистрации перейдите по ссылке:</p>
        <a href=${user._id}>${user._id}</a>`,
  })
}
