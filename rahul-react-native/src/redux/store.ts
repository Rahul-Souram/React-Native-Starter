
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import testReducer from "./reducers/testReducer";

export const store = configureStore({
  reducer: {
    posts: testReducer,
  },
});

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed Redux hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector = <T,>(
  selector: (state: RootState) => T
): T => useSelector(selector);
