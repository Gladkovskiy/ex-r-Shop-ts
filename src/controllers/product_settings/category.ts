import {productSettingsModels} from '../../mongoDB/model/product_settings'
import {ICategoryController} from '../../types/controllers/product_settings/category'
import {v4 as uuidv4} from 'uuid'
import dotenv from 'dotenv'
import {onError} from '../../utils/error/onError'
import fs from 'fs'
import path from 'path'
import {deleteFile} from '../../utils/googleDrive'

dotenv.config()

const {categoryModel} = productSettingsModels

export const categoryController: ICategoryController = {
  settings_category_getAll: async () => await categoryModel.find(),

  settings_category_add: async ({description, type, img_path}) => {
    /* const fileName = uuidv4() + '.png'
    const path = `img/category/${fileName}` */

    const find = await categoryModel.findOne({type})
    if (find) onError('Такая категория уже существует', {status: 200})

    const res = await categoryModel.create({
      description,
      type,
      img_path,
    })

    return res
  },

  settings_category_delete: async id => {
    const res = await categoryModel.findByIdAndDelete(id)
    // fs.unlinkSync(path.resolve(res.img_path))
    deleteFile(res.img_path)

    return {id: res._id}
  },
}
