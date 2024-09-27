import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {basketSliceAction} from '../storage/slice/basket/basket'
import {authSliceAction} from '../storage/slice/auth/auth'
import {filtersSliceAction} from '../storage/slice/products/filtersSlice'
import {searchProductsSliceAction} from '../storage/slice/search/searchProductsSlice'

export const useBasketAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(basketSliceAction, dispatch)
}

export const useAuthAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(authSliceAction, dispatch)
}

export const useFiltersAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(filtersSliceAction, dispatch)
}

export const useSearchAction = () => {
  const dispatch = useDispatch()
  return bindActionCreators(searchProductsSliceAction, dispatch)
}
