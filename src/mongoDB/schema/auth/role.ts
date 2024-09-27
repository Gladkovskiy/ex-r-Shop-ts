import {Schema} from 'mongoose'
import {Auth_Role} from '../../../graphql/generated-types'

export const roleSchema = new Schema<Auth_Role>(
  {
    type: {
      type: String,
      required: true,
    },
  },
  {versionKey: false}
)
