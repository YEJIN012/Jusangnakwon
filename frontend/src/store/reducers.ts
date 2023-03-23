import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import tabSlice from "@/slices/tabSlice";

const persistConfig = {
  key : "root",
  storage,
  // whitelist:[],
  // blacklist:[]
}

const rootReducer = combineReducers({
  tab: tabSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
