//import { createStore } from 'redux';
//import reducer from './reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './reducer'

// ==============================|| REDUX - MAIN STORE ||============================== //

/*const store = createStore(reducer);*/
/*const persister = 'Free';*/

/*export { store, persister };*/

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector