import {Resolvers} from '../../generated-types'

const orderResolver: Resolvers = {
  Mutation: {
    products_order_add: (_, {order}, {controllers: {orderController}}) =>
      orderController.products_order_add(order),

    products_order_confirm: (_, {id}, {controllers: {orderController}}) =>
      orderController.products_order_confirm(id),

    products_order_comlete: (_, {id}, {controllers: {orderController}}) =>
      orderController.products_order_comlete(id),

    products_order_cancel: (_, {id}, {controllers: {orderController}}) =>
      orderController.products_order_cancel(id),

    products_order_update: (_, {id, order}, {controllers: {orderController}}) =>
      orderController.products_order_update(id, order),

    products_order_delete: (_, {id}, {controllers: {orderController}}) =>
      orderController.products_order_delete(id),
  },
  Query: {
    products_order_getNewCount: (_, __, {controllers: {orderController}}) =>
      orderController.products_order_getNewCount(),

    products_order_getNew: (
      _,
      {pagination},
      {controllers: {orderController}}
    ) => orderController.products_order_getNew(pagination),

    products_order_getForNumber: (
      _,
      {orderNumber},
      {controllers: {orderController}}
    ) => orderController.products_order_getForNumber(orderNumber),
  },
}

export default orderResolver
