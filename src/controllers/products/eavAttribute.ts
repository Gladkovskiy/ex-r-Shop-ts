import {productsModels} from '../../mongoDB/model/products'
import {IEavAttributeController} from '../../types/controllers/products/eav_attribute'
import {onError} from '../../utils/error/onError'

const {eavAttributeModel} = productsModels

export const eavAttributeController: IEavAttributeController = {
  products_eav_attribute_get: async group =>
    await eavAttributeModel.find({group}),

  products_eav_attribute_add: async attr =>
    await eavAttributeModel.create(attr),

  products_eav_attribute_update: async (id, values) =>
    await eavAttributeModel.findByIdAndUpdate(id, {values}, {new: true}),

  products_eav_attribute_delete: async id => {
    const res = await eavAttributeModel.findByIdAndDelete(id)

    if (!res) onError('Not found attribute to delete')

    return {id: res._id}
  },
}
