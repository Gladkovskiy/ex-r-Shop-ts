import {Schema} from 'mongoose'
import {Settings_Group} from '../../../graphql/generated-types'
import {descriptionSchema} from './category'

export const groupSchema = new Schema<Settings_Group>(
  {
    category: {
      type: String,
      required: true,
    },
    description: descriptionSchema,
    img_path: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {versionKey: false}
)
