import {Schema} from 'mongoose'
import {Auth_User} from '../../../graphql/generated-types'

export const userSchema = new Schema<Auth_User>(
  {
    fullname: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
      unique: true,
      index: true,
      required: true,
    },
    tel: {
      type: String,
      match: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
      unique: true,
      index: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'USER',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)
