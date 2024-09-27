import {Schema} from 'mongoose'
import {
  Products_Order,
  Products_Order_Product,
} from '../../../graphql/generated-types'

const OrderProductSchema = new Schema<Products_Order_Product>(
  {
    product_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    _id: false,
    versionKey: false,
  }
)

export const orderSchema = new Schema<Products_Order>(
  {
    fio: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: Number,
      required: true,
      index: true,
    },
    status: {
      type: String,
      required: true,
      index: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    products: {
      type: [OrderProductSchema],
      required: true,
    },
    adress: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)
