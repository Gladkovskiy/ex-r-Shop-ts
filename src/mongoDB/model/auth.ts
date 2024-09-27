import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {ModelAuth} from '../../types/model'
import {roleSchema} from '../schema/auth/role'
import {userSchema} from '../schema/auth/user'

dotenv.config()

const authDB = mongoose.createConnection(process.env.AUTH_DB)

authDB.on('connected', () => {
  console.log('auth DB connected')
})
authDB.on('close', () => {
  console.log('auth DB close connection')
})

const roleModel = authDB.model(ModelAuth.role, roleSchema)
const userModel = authDB.model(ModelAuth.user, userSchema)
const regModel = authDB.model(ModelAuth.reg, userSchema)

export const authModels = {
  roleModel,
  userModel,
  regModel,
}
