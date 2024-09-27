import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState {
  text: string
}

const initialState: IInitialState = {
  text: 'localStorage OK',
}

export const simpleSlice = createSlice({
  name: 'simpleSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
})

export default simpleSlice.reducer
export const simpleSliceAction = {...simpleSlice.actions}
