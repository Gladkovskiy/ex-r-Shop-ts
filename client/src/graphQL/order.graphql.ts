import {gql} from './__generated__'

export const ORDERS_GET = gql(`
query Products_order_getNew($pagination: Pagination_input!) {
  orders:products_order_getNew(pagination: $pagination) {
    _id
    adress
    createdAt
    fio
    orderNumber
    products {
      name
      price
      product_id
      quantity
    }
    status
    tel
    totalPrice
    updatedAt
  }
}
`)

export const ORDERS_COUNT = gql(`
query Products_order_getNewCount {
  orderCount:products_order_getNewCount {
    count
  }
}

`)

export const ORDERS_GET_BY_ID = gql(`
query Products_order_getForNumber($orderNumber: Int!) {
  order:products_order_getForNumber(orderNumber: $orderNumber) {
    _id
    adress
    createdAt
    fio
    orderNumber
    products {
      name
      price
      product_id
      quantity
    }
    status
    tel
    totalPrice
    updatedAt
  }
}
`)

export const ORDERS_ADD = gql(`
mutation Products_order_add($order: Products_order_input!) {
  order:products_order_add(order: $order) {
    _id
    adress
    createdAt
    fio
    orderNumber
    products {
      name
      price
      product_id
      quantity
    }
    status
    tel
    totalPrice
    updatedAt
  }
}
`)

export const ORDERS_CANCEL = gql(`
mutation Products_order_cancel($productsOrderCancelId: ObjectID!) {
  order:products_order_cancel(id: $productsOrderCancelId) {
    _id
    orderNumber
    fio
    tel
    adress
    status
    products {
      product_id
      name
      price
      quantity
    }
    totalPrice
    createdAt
    updatedAt
  }
}
`)

export const ORDERS_COMPLETE = gql(`
mutation Products_order_comlete($productsOrderComleteId: ObjectID!) {
  order: products_order_comlete(id: $productsOrderComleteId) {
    _id
    orderNumber
    fio
    tel
    adress
    status
    products {
      product_id
      name
      price
      quantity
    }
    totalPrice
    createdAt
    updatedAt
  }
}
`)

export const ORDERS_CONFIRM = gql(`
mutation Products_order_confirm($productsOrderConfirmId: ObjectID!) {
  order: products_order_confirm(id: $productsOrderConfirmId) {
    _id
    orderNumber
    fio
    tel
    adress
    status
    products {
      product_id
      name
      price
      quantity
    }
    totalPrice
    createdAt
    updatedAt
  }
}
`)

export const ORDERS_DELET = gql(`
mutation Products_order_delete($productsOrderDeleteId: ObjectID!) {
  order: products_order_delete(id: $productsOrderDeleteId) {
    id
  }
}
`)

export const ORDERS_UPDATE = gql(`
mutation Products_order_update($productsOrderUpdateId: ObjectID!, $order: Products_order_input!) {
  order: products_order_update(id: $productsOrderUpdateId, order: $order) {
    _id
    orderNumber
    fio
    tel
    adress
    status
    products {
      product_id
      name
      price
      quantity
    }
    totalPrice
    createdAt
    updatedAt
  }
}
`)
