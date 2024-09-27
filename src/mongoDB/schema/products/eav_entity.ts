import {Schema} from 'mongoose'
import {
  Products_Eav_Entity,
  Products_Eav_Entity_Discount,
} from '../../../graphql/generated-types'
import {descriptionSchema} from '../product_settings/category'

const eavEntityDiscountSchema = new Schema<Products_Eav_Entity_Discount>(
  {
    active: {
      type: Boolean,
      required: true,
    },
    oldPrice: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
    versionKey: false,
  }
)

export const eavEntitySchema = new Schema<Products_Eav_Entity>(
  {
    group: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    name: {
      type: descriptionSchema,
      required: true,
      index: true,
    },
    description: {
      type: descriptionSchema,
      required: true,
    },
    img_urls: {
      type: [String],
      required: true,
    },
    discount: {
      type: eavEntityDiscountSchema,
      default: {
        active: false,
        oldPrice: '0',
      },
    },
    searchTag: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
)
