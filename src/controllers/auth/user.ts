import {authModels} from '../../mongoDB/model/auth'
import {IUserController} from '../../types/controllers/auth/user'
import {onError} from '../../utils/error/onError'
import bcrypt from 'bcrypt'
import {jwtCreate} from '../../utils/token'
import {sendMail} from '../../utils/nodemailer'
import {CookieOptions} from 'express'

const {userModel, regModel} = authModels

const cookieOption: CookieOptions = {
  httpOnly: true,
  // secure: true, //https only
  sameSite: process.env.NODE_ENV === 'production', // 'none' не один домен, 'strict' или true один домен, false для разработки
  maxAge: 7 * 24 * 60 * 60 * 1000,
}

export const userController: IUserController = {
  auth_user_adminRegistration: async user => {
    const {mail, tel, password} = user

    // проверка на совпадения, хотя и mongoose проверяет
    const findMail = await userModel.findOne({mail})
    if (findMail) onError('Mail exists', {status: 200})
    const findTel = await userModel.findOne({tel})
    if (findTel) onError('Tel exists', {status: 200})

    // хэширование пароля
    const hashPass = bcrypt.hashSync(password, 5)

    const res = await userModel.create({
      ...user,
      password: hashPass,
    })

    return res
  },

  auth_user_delete: async id => {
    const res = await userModel.findByIdAndDelete(id)

    if (!res) onError('Not found user to delete')

    return {id: res._id}
  },

  auth_user_update: async user => {
    const {mail, tel, fullname} = user

    // проверка уникальности изменнёного эмейла и телефона
    const findMail = await userModel.findOne({mail})
    if (findMail) onError('Mail exists')
    const findTel = await userModel.findOne({tel})
    if (findTel) onError('Tel exists')

    const res = await userModel.findByIdAndUpdate(user._id, {
      mail,
      tel,
      fullname,
    })

    return res
  },

  auth_user_newPass: async newPass => {
    const {_id, pass} = newPass
    const hashPass = bcrypt.hashSync(pass, 5)
    const res = await userModel.findByIdAndUpdate(_id, {password: hashPass})

    return {id: res._id}
  },

  auth_user_getAll: async (page, limit) => {
    const skip = (page - 1) * limit
    const users = await userModel.find().skip(skip).limit(limit)
    const count = await userModel.countDocuments()

    return {users, count}
  },

  auth_user_search: async text => {
    if (text === '') return []

    const textWithoutPlus = text.replace(/\+/gi, '')
    const regName = new RegExp(`^${textWithoutPlus}`, 'i')
    const regTel = new RegExp(`^\\+${textWithoutPlus}`, 'i')

    const users = await userModel
      .find({
        $or: [{fullname: regName}, {tel: regTel}],
      })
      .limit(10)

    return users
  },

  auth_user_getOne: async id => await userModel.findById(id),

  auth_user_login: async (login, password, res) => {
    const user = await userModel.findOne({$or: [{tel: login}, {mail: login}]})

    if (!user) onError('Login not found', {status: 200})

    const comparePass = bcrypt.compareSync(password, user.password)
    if (!comparePass) onError('Incorrect password', {status: 200})

    const token = jwtCreate({
      id: user._id,
      login: user.fullname,
      role: user.role,
    })

    res.cookie('token', token, cookieOption)

    return {
      id: user._id,
      login: user.fullname,
      role: user.role,
      tel: user.tel,
    }
  },

  auth_user_checkToken: async (user, res) => {
    if (!user) {
      res.clearCookie('token')
      return {
        id: null,
        login: '',
        role: '',
        tel: '',
      }
    }

    const token = jwtCreate(user)
    const userData = await userModel.findById(user.id)

    res.cookie('token', token, cookieOption)

    return {
      ...user,
      tel: userData.tel,
    }
  },

  auth_user_logout: res => {
    res.clearCookie('token', cookieOption)
  },

  auth_user_registration: async user => {
    const {mail, tel, password} = user

    // проверка на совпадения, хотя и mongoose проверяет
    const findMail = await userModel.findOne({mail})
    if (findMail) onError('Mail exists')
    const findTel = await userModel.findOne({tel})
    if (findTel) onError('Tel exists')

    // если человек повторно регистрируется, то стреть старую запись и сделать новую
    await regModel.deleteOne({$or: [{mail}, {tel}]})

    // хэширование пароля
    const hashPass = bcrypt.hashSync(password, 5)

    const res = await regModel.create({
      ...user,
      password: hashPass,
    })

    await sendMail(res)

    return res
  },

  auth_user_confirmRegistration: async id => {
    const remove = await regModel.findByIdAndRemove(id)
    if (!remove) onError('Regiatration confirm error')

    const res = await userModel.create({
      tel: remove.tel,
      mail: remove.mail,
      fullname: remove.fullname,
      password: remove.password,
      role: remove.role,
    })

    return res
  },
}
