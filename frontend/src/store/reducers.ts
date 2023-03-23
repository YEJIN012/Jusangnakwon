import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage";
import tabSlice from "@/slices/tabSlice";

const persistConfig = {
  key : "root",
  // storage,
  storage:storageSession,
  // whitelist:[],
  // blacklist:[]
}

const rootReducer = combineReducers({
  tab: tabSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default persistedReducer
