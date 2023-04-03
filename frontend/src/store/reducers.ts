import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import tabSlice from "@/slices/tabSlice";
import selectedDrinkSlice from "@/slices/selectedDrinkSlice";
import UserInfoSlice from "@/slices/userInfoSlice";

const persistConfig = {
  key : "root",
  // storage,
  storage:storageSession,
  // whitelist:[],
  blacklist:["selectedDrink"]
}

const rootReducer = combineReducers({
  tab: tabSlice,
  selectedDrink: selectedDrinkSlice,
  userInfo: UserInfoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer
