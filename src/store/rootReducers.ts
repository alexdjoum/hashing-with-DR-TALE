import { combineReducers } from '@reduxjs/toolkit'
import customizationReducer from "./customizationReducer";

const rootReducers = combineReducers({customizationReducer})
export type RootState = ReturnType<typeof rootReducers>

export default rootReducers;