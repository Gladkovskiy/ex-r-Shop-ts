import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {ModelProducts} from '../../types/model'
import {eavAttributeSchema} from '../schema/products/eav_attribute'
import {eavEntitySchema} from '../schema/products/eav_entity'
import {eavValueSchema} from '../schema/products/eav_value'
import {orderSchema} from '../schema/products/order'

dotenv.config()

const productsDB = mongoose.createConnection(process.env.PRODUCTS_DB)

productsDB.on('connected', () => {
  console.log('products DB connected')
})
productsDB.on('close', () => {
  console.log('products DB close connection')
})

const eavAttributeModel = productsDB.model(
  ModelProducts.eav_attribute,
  eavAttributeSchema
)
const eavEntityModel = productsDB.model(
  ModelProducts.eav_entity,
  eavEntitySchema
)
const eavValueModel = productsDB.model(ModelProducts.eav_value, eavValueSchema)
const orderModel = productsDB.model(ModelProducts.order, orderSchema)

export const productsModels = {
  eavAttributeModel,
  eavEntityModel,
  eavValueModel,
  orderModel,
}
