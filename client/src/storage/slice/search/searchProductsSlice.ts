import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  ProductSort,
  Products_Eav_Entity_GroupsResult,
  Products_Eav_Value_ProductsResult,
} from '../../../graphQL/__generated__/graphql'

interface IInitialState {
  limit: number
  page: number
  sort: ProductSort
  products: Omit<Products_Eav_Value_ProductsResult, 'group' | 'description'>[]
  groups: Products_Eav_Entity_GroupsResult[]
  count: number
}

const initialState: IInitialState = {
  limit: 10,
  page: 0,
  products: [],
  sort: ProductSort.Rating,
  count: 0,
  groups: [],
}

export const searchProductsSlice = createSlice({
  name: 'searchProductsSlice',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<ProductSort>) => {
      state.products = []
      state.page = 0
      state.sort = action.payload
    },

    addProducts: (
      state,
      action: PayloadAction<
        Omit<Products_Eav_Value_ProductsResult, 'group' | 'description'>[]
      >
    ) => {
      state.products = [...state.products, ...action.payload]
    },

    resetProducts: state => {
      state.products = []
      state.page = 0
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },

    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload
    },

    setGroups: (
      state,
      action: PayloadAction<Products_Eav_Entity_GroupsResult[]>
    ) => {
      state.groups = action.payload
    },
  },
})

export default searchProductsSlice.reducer
export const searchProductsSliceAction = {...searchProductsSlice.actions}
