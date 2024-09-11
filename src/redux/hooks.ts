import { AppDispatch, RootState } from "./store";
import { TypedUseSelectorHook, useDispatch, UseDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;