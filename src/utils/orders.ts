import {Product_Order_Product_Input} from '../graphql/generated-types'

type Products = Product_Order_Product_Input[]

/* const oldArr = [
  {
    product_id: '123',
    quantity: 4,
    name: '',
    price: 1111,
  },
  {
    product_id: '124',
    quantity: 4,
    name: '',
    price: 1111,
  },
  {
    product_id: '125',
    quantity: 8,
    name: '',
    price: 1111,
  },
]
const newArr = [
  {
    product_id: '123',
    quantity: 4,
    name: '',
    price: 1111,
  },
  {
    product_id: '125',
    quantity: 6,
    name: '',
    price: 1111,
  },
  {
    product_id: '126',
    quantity: 5,
    name: '',
    price: 1111,
  },
  {
    product_id: '128',
    quantity: 2,
    name: '',
    price: 1111,
  },
] */

export const updateQuantity = (
  oldOrderProducts: Products,
  newOrderProducts: Products
) => {
  const newProducts = newOrderProducts.reduce(
    (arr: Products, {product_id, quantity}) => {
      for (const element of oldOrderProducts) {
        if (element.product_id === product_id) return arr
      }
      return [...arr, {product_id, quantity}]
    },
    []
  )

  /* const newProducts = newOrderProducts.filter(({product_id}) => {
    for (let element of oldOrderProducts) {
      if (element.product_id === product_id) return false
    }
    return true
  }) */

  const deleteProducts = oldOrderProducts.reduce(
    (arr: Products, {product_id, quantity}) => {
      for (const element of newOrderProducts) {
        if (element.product_id === product_id) return arr
      }
      return [...arr, {product_id, quantity}]
    },
    []
  )

  /* const deleteProducts = oldOrderProducts.filter(({product_id}) => {
    for (let element of newOrderProducts) {
      if (element.product_id === product_id) return false
    }
    return true
  }, []) */

  const changeQuantity = oldOrderProducts.reduce(
    (arr: Products, {product_id, quantity}) => {
      for (const element of newOrderProducts) {
        if (element.product_id === product_id && element.quantity !== quantity)
          return [
            ...arr,
            {
              product_id,
              quantity: quantity - element.quantity,
            },
          ]
      }
      return arr
    },
    []
  )

  return {
    newProducts,
    deleteProducts,
    changeQuantity,
  }
}

// console.log(updateQuantity(oldArr, newArr))
