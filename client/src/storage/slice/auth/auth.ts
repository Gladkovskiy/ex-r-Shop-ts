import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Auth_User_LoginData} from '../../../graphQL/__generated__/graphql'

interface IInitialState {
  user: Auth_User_LoginData
  isAuth: boolean
  error: string
}

const initialState: IInitialState = {
  user: {
    login: '',
    role: '',
    id: '',
    tel: '',
  },
  isAuth: false,
  error: '',
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth_User_LoginData>) => {
      state.user = {...action.payload}
      state.isAuth = true
    },
    logout: state => {
      state.user = {login: '', role: '', id: '', tel: ''}
      state.isAuth = false
      state.error = ''
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export default authSlice.reducer
export const authSliceAction = {...authSlice.actions}
