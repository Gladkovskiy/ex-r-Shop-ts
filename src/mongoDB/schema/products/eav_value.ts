import {Schema} from 'mongoose'
import {Products_Eav_Value} from '../../../graphql/generated-types'
import {attrValuesSchema} from './eav_attribute'
import {descriptionSchema} from '../product_settings/category'

export const eavValueSchema = new Schema<Products_Eav_Value>(
  {
    group: {
      type: String,
      required: true,
      index: true,
    },
    product_id: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    attr_name: {
      type: String,
      required: true,
      index: true,
    },
    attr_value: {
      type: attrValuesSchema,
      required: true,
      index: true,
    },
    attr_description: {
      type: descriptionSchema,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)
