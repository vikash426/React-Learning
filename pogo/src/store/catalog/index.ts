import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { catalogInitialState } from './intitialState';
import * as catalogEffects from "./affects";


const {actions, reducer} = createSlice({
  name: 'catalog',
  initialState: catalogInitialState,
  reducers: {
    ...catalogEffects
  },
})

export {actions, reducer}