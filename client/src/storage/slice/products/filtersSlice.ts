import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  Products_Eav_Value_ProductsResult,
  Products_FiltersInput,
  Products_PriceInput,
  ProductSort,
} from '../../../graphQL/__generated__/graphql'

interface IInitialState {
  totalCount: number
  page: number
  filters: Products_FiltersInput[]
  sort: ProductSort
  price: Products_PriceInput | null
  products: Omit<Products_Eav_Value_ProductsResult, 'group' | 'description'>[]
}

const initialState: IInitialState = {
  totalCount: 0,
  page: 0,
  filters: [],
  sort: ProductSort.Rating,
  price: null,
  products: [],
}

export const filtersSlice = createSlice({
  name: 'filtersSlice',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<ProductSort>) => {
      state.products = []
      state.page = 0
      state.sort = action.payload
    },

    setPrice: (state, action: PayloadAction<Products_PriceInput>) => {
      state.products = []
      state.page = 0
      state.price = action.payload
    },

    addFilters: (state, action: PayloadAction<Products_FiltersInput>) => {
      state.products = []
      state.page = 0
      state.filters = [...state.filters, action.payload]
    },

    delFilters: (state, action: PayloadAction<Products_FiltersInput>) => {
      state.products = []
      state.page = 0
      state.filters = state.filters.filter(({attr_name, attr_value}) => {
        if (attr_name !== action.payload.attr_name) {
          return true
        } else if (attr_value !== action.payload.attr_value) {
          return true
        } else {
          return false
        }
      })
    },

    resetAllFilters: state => {
      state.products = []
      state.page = 0
      state.filters = []
    },

    resetPriceFilter: state => {
      state.products = []
      state.page = 0
      state.price = null
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
      state.totalCount = 0
      state.page = 0
    },

    addTotalCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
})

export default filtersSlice.reducer
export const filtersSliceAction = {...filtersSlice.actions}
