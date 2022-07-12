import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { useDispatch } from "react-redux";
import favoriteSlice from "./modules/favorite";
import mapSlice from "./modules/map";
import officeSlice from "./modules/office";
import userSlice from "./modules/user";

const rootReducer = combineReducers({
  map: mapSlice.reducer,
  // user: User,
  office: officeSlice.reducer,
  favorite: favoriteSlice.reducer,
  user:userSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
