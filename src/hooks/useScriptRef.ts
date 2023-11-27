import { useEffect, useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/reducer'
// ==============================|| ELEMENT REFERENCE HOOKS  ||============================== //

const useScriptRef = () => {
  const scripted = useRef(true);

  useEffect(
    () => () => {
      scripted.current = false;
    },
    []
  );

  return scripted;
};


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default useScriptRef;
