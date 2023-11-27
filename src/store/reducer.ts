//import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducers from './rootReducers'
import {useDispatch} from "react-redux";
// reducer import
import customizationReducer from './customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

/*const reducer = combineReducers({
  customization: customizationReducer
});*!/*/

 export const store = configureStore({
  reducer: rootReducers
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>