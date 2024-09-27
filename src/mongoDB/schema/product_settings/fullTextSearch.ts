import {Schema} from 'mongoose'
import {Settings_FullTextSearch} from '../../../graphql/generated-types'

export const fullTextSearchSchema = new Schema<Settings_FullTextSearch>(
  {
    text: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    versionKey: false,
  }
)
