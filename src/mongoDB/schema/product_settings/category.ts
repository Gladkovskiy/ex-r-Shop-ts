import {Schema} from 'mongoose'
import {
  Settings_Category,
  DescriptionLang,
} from '../../../graphql/generated-types'

export const descriptionSchema = new Schema<DescriptionLang>(
  {
    ru: {
      type: String,
      required: true,
    },
    en: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    _id: false,
  }
)

export const categorySchema = new Schema<Settings_Category>(
  {
    type: {
      type: String,
      required: true,
      unique: true,
    },
    description: descriptionSchema,
    img_path: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)
