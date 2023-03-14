import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";

const rootReducer = combineReducers({
  todo: todoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
