import fs from 'fs'
import path from 'path'
import {v4 as uuidv4} from 'uuid'
import {
  Products_Eav_Entity_GroupsResult,
  Products_Eav_Entity_ProductsResult,
} from '../../graphql/generated-types'
import {searchGroupforFilterPipeline} from '../../mongoDB/aggregation/searchGroupForFilter/searchGroupForFilter'
import {searchProductPipeline} from '../../mongoDB/aggregation/searchProducts/searchProducts'
import {productSettingsModels} from '../../mongoDB/model/product_settings'
import {productsModels} from '../../mongoDB/model/products'
import {IEavEntityController} from '../../types/controllers/products/eav_entity'
import {onError} from '../../utils/error/onError'
import {deleteFile} from '../../utils/googleDrive'

const {eavEntityModel, eavValueModel} = productsModels
const {fullTextSearchModel, groupModel} = productSettingsModels

export const eavEntityController: IEavEntityController = {
  products_eav_entity_add: async ({filters, ...product}) => {
    /* const ulrsDate = new Date().toLocaleDateString().replace(/\./gi, '-')
    const imgUrls = Array.from(Array(img_urls_length), () => {
      const fileName = uuidv4() + '.png'
      return `img/product/${ulrsDate}/${fileName}`
    }) */
    const res = await eavEntityModel.create({...product})

    // добавляем фильтры в базу
    await Promise.all(
      filters.map(async filter => {
        await eavValueModel.create({
          ...filter,
          group: product.group,
          product_id: res._id,
        })
      })
    )

    // добавляем тэги для автокомплита в базу
    const {searchTag} = product
    await Promise.all(
      searchTag.split(',').map(async text => {
        const find = await fullTextSearchModel.findOne({text: text.trim()})
        if (!find)
          await fullTextSearchModel.create({
            text: text.trim(),
          })
      })
    )

    return res
  },

  products_eav_entity_delete: async id => {
    const res = await eavEntityModel.findByIdAndDelete(id)
    if (!res) onError('Not found product to delete')

    await eavValueModel.deleteMany({product_id: id})

    /*  res.img_urls.map(imgUrl => {
      const dir = path.resolve(imgUrl)

      if (fs.existsSync(dir)) fs.unlinkSync(dir)
    }) */

    res.img_urls.map(fileId => {
      deleteFile(fileId)
    })

    return {id: res._id}
  },

  products_eav_entity_update: async ({
    id,
    newPrice,
    quantity: addQuantity,
    ...discount
  }) => {
    let res

    if (addQuantity !== 0) {
      const {quantity: oldQuantity} = await eavEntityModel.findById(id)

      const quantity = oldQuantity + addQuantity

      res = await eavEntityModel.findByIdAndUpdate(
        id,
        {
          discount,
          quantity: quantity > 0 ? quantity : 0,
        },
        {new: true}
      )
    } else {
      res = await eavEntityModel.findByIdAndUpdate(id, {discount}, {new: true})
    }

    await eavValueModel.findOneAndUpdate(
      {
        product_id: id,
        attr_name: 'Цена',
      },
      {
        ['attr_value.value']: newPrice,
      },
      {
        new: true,
      }
    )

    return res
  },

  products_eav_entity_getById: async id => {
    const product = await eavEntityModel.findById(id)
    const value = await eavValueModel.findOne({
      product_id: id,
      attr_name: 'Цена',
    })

    return {
      product,
      price: +value.attr_value.value,
    }
  },

  products_eav_entity_getByName: async name => {
    /* const regName = new RegExp(name, 'gi')
    const products = await eavEntityModel.find({
      $or: [{'name.ru': regName}, {'name.en': regName}],
    }) */
    const products = await eavEntityModel.aggregate([
      {
        $search: {
          index: 'searchProducts',
          phrase: {
            query: name,
            path: ['name.ru', 'name.en'],
          },
        },
      },
      {
        $limit: 5,
      },
    ])

    return products
  },

  products_eav_entity_globalSearch: async search => {
    // поиск продукции по фразам
    const resProducts =
      await eavEntityModel.aggregate<Products_Eav_Entity_ProductsResult>(
        searchProductPipeline(search)
      )
    const {products, totalProducts} = resProducts[0]

    // ищем группы в результатах поиска
    const resGroups = await eavEntityModel.aggregate(
      searchGroupforFilterPipeline(search.searchText)
    )

    const groupsArr = resGroups.map(({group}) => group)

    const groups = await groupModel
      .find({type: {$in: groupsArr}})
      .select<Products_Eav_Entity_GroupsResult>(['type', 'description'])

    return {
      products,
      totalProducts,
      groups,
    }
  },
}
