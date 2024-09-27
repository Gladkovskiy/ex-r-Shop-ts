import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {ModelProductSettings} from '../../types/model'
import {categorySchema} from '../schema/product_settings/category'
import {groupSchema} from '../schema/product_settings/group'
import {fullTextSearchSchema} from '../schema/product_settings/fullTextSearch'

dotenv.config()

const productSettingsDB = mongoose.createConnection(
  process.env.PRODUCT_SETTINGS_DB
)

productSettingsDB.on('connected', () => {
  console.log('product settings DB connected')
})
productSettingsDB.on('close', () => {
  console.log('product settings DB close connection')
})

const categoryModel = productSettingsDB.model(
  ModelProductSettings.category,
  categorySchema
)

const groupModel = productSettingsDB.model(
  ModelProductSettings.group,
  groupSchema
)

const fullTextSearchModel = productSettingsDB.model(
  ModelProductSettings.fullTextSearchModel,
  fullTextSearchSchema
)

export const productSettingsModels = {
  categoryModel,

  groupModel,
  fullTextSearchModel,
}
