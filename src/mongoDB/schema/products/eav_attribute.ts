import {Schema} from 'mongoose'
import {
  Products_Eav_Attribute,
  Products_Eav_Attribute_Values,
} from '../../../graphql/generated-types'
import {descriptionSchema} from '../product_settings/category'

export const attrValuesSchema = new Schema<Products_Eav_Attribute_Values>(
  {
    value: {
      type: String,
      required: true,
    },
    description: {
      type: descriptionSchema,
      default: null,
    },
  },
  {
    versionKey: false,
    _id: false,
  }
)

export const eavAttributeSchema = new Schema<Products_Eav_Attribute>(
  {
    group: {
      type: String,
      required: true,
      index: true,
    },
    description: {
      type: descriptionSchema,
      required: true,
    },
    attr_name: {
      type: String,
      required: true,
    },
    values: {
      type: [attrValuesSchema],
      default: null,
    },
  },
  {
    versionKey: false,
  }
)
