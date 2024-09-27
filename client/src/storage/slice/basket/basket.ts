import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IChangeQuantity {
  quantity: number
  product_id: string
}

interface IProduct {
  name: string
  price: number
  product_id: string
  quantity: number
  maxQuantity: number
  imgUrl: string
}

interface IInitialState {
  products: IProduct[]
  total: number
}

const initialState: IInitialState = {
  products: [],
  total: 0,
}

export const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products = [...state.products, action.payload]
      state.total = state.products.reduce(
        (acc, {price, quantity}) => acc + price * quantity,
        0
      )
    },
    delProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        ({product_id}) => product_id !== action.payload
      )
      state.total = state.products.reduce(
        (acc, {price, quantity}) => acc + price * quantity,
        0
      )
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantity>) => {
      state.products = state.products.map(product =>
        product.product_id === action.payload.product_id
          ? {...product, quantity: action.payload.quantity}
          : product
      )
      state.total = state.products.reduce(
        (acc, {price, quantity}) => acc + price * quantity,
        0
      )
    },

    emptyBasket: state => {
      state.products = []
      state.total = 0
    },
  },
})

export default basketSlice.reducer
export const basketSliceAction = {...basketSlice.actions}
