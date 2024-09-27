import {configureStore} from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistCombineReducers,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AuthReducer from './slice/auth/auth'
import BasketReducer from './slice/basket/basket'
import FiltersReducer from './slice/products/filtersSlice'
import SearchReducer from './slice/search/searchProductsSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const localStorageReducers = persistCombineReducers(persistConfig, {
  BasketReducer,
  //редюсеры state которых хранится в localStorage
})

const rooReducer = {
  //все редюсеры
  AuthReducer,
  FiltersReducer,
  localStorageReducers,
  SearchReducer,
}

export const store = configureStore({
  reducer: {...rooReducer},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
