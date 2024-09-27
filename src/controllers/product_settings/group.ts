import {productSettingsModels} from '../../mongoDB/model/product_settings'
import {IGropuController} from '../../types/controllers/product_settings/group'
import fs from 'fs'
import path from 'path'
import {v4 as uuidv4} from 'uuid'
import {deleteFile} from '../../utils/googleDrive'

const {groupModel} = productSettingsModels

export const groupController: IGropuController = {
  settings_group_get: async category => await groupModel.find({category}),

  settings_group_add: async group => {
    /* const fileName = uuidv4() + '.jpg'
    const path = `img/group/${fileName}` */

    const res = await groupModel.create({
      ...group,
    })

    return res
  },

  settings_group_delete: async id => {
    const res = await groupModel.findByIdAndDelete(id)
    // fs.unlinkSync(path.resolve(res.img_path))
    deleteFile(res.img_path)

    return {id: res._id}
  },
}
