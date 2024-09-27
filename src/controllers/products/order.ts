import {productsModels} from '../../mongoDB/model/products'
import {IOrderController} from '../../types/controllers/products/order'
import {onError} from '../../utils/error/onError'
import {updateQuantity} from '../../utils/orders'

const {orderModel, eavEntityModel} = productsModels

export const orderController: IOrderController = {
  products_order_getNewCount: async () => {
    const count = await orderModel.countDocuments({status: 'new'})

    return {count}
  },

  products_order_getNew: async ({limit, page}) => {
    const res = await orderModel
      .find({status: 'new'})
      .skip(limit * page)
      .limit(limit)

    return res
  },

  products_order_getForNumber: async orderNumber => {
    const res = await orderModel.findOne({orderNumber})
    if (!res) onError(`${orderNumber} - нет такого заказа`)

    return res
  },

  products_order_add: async order => {
    await Promise.all(
      order.products.map(async ({product_id, quantity: orderQuantity}) => {
        // перепроверка на наличие товара
        const res = await eavEntityModel.findById(product_id)
        if (res.quantity < orderQuantity)
          onError(`Товара ${res.name.ru}, нет в таком количестве`)
        await eavEntityModel.findByIdAndUpdate(product_id, {
          $inc: {quantity: -orderQuantity},
        })
      })
    )

    const totalPrice = order.products.reduce(
      (acc, {price, quantity}) => acc + price * quantity,
      0
    )

    // номер заказа, так как не работает автоинкремент плагин
    let orderNumber = 1
    const lastRecord = await orderModel.find().limit(1).sort({$natural: -1})
    if (lastRecord[0]) orderNumber = lastRecord[0].orderNumber + 1

    const res = await orderModel.create({
      ...order,
      totalPrice,
      status: 'new',
      orderNumber,
    })

    return res
  },

  products_order_confirm: async id => {
    const res = await orderModel.findByIdAndUpdate(id, {status: 'confirm'})

    return res
  },

  products_order_cancel: async id => {
    const {products} = await orderModel.findById(id)

    await Promise.all(
      products.map(async ({product_id, quantity: addQuantity}) => {
        await eavEntityModel.findByIdAndUpdate(product_id, {
          $inc: {quantity: addQuantity},
        })
      })
    )

    const res = await orderModel.findByIdAndUpdate(id, {status: 'cancel'})

    return res
  },

  products_order_comlete: async id => {
    const res = await orderModel.findByIdAndUpdate(id, {status: 'comlete'})

    return res
  },

  products_order_delete: async id => {
    const res = await orderModel.findByIdAndDelete(id)
    if (!res) onError('Нет такого заказа для удаления')

    return {id: res._id}
  },

  products_order_update: async (id, updateOrder) => {
    const oldOrder = await orderModel.findById(id)
    // функция для определения удалённых, обновлённых и новых товаров в заказе
    const {changeQuantity, deleteProducts, newProducts} = updateQuantity(
      oldOrder.products,
      updateOrder.products
    )

    // новые продукты в заказе, количество надо отнять
    await Promise.all(
      newProducts.map(async ({product_id, quantity: subQuantity}) => {
        await eavEntityModel.findByIdAndUpdate(product_id, {
          $inc: {quantity: -subQuantity},
        })
      })
    )

    // удалунные и изменённые товары прибавить
    await Promise.all(
      [...changeQuantity, ...deleteProducts].map(
        async ({product_id, quantity: addQuantity}) => {
          await eavEntityModel.findByIdAndUpdate(product_id, {
            $inc: {quantity: addQuantity},
          })
        }
      )
    )

    const totalPrice = updateOrder.products.reduce(
      (acc, {price, quantity}) => acc + price * quantity,
      0
    )

    // new: true - возвращает обновлённый документ, а не оригинал до обновления
    const res = await orderModel.findByIdAndUpdate(
      id,
      {...updateOrder, totalPrice},
      {new: true}
    )

    return res
  },
}
