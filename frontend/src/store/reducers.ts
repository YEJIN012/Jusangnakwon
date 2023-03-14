import {combineReducers} from '@reduxjs/toolkit';
import todoSlice from '../slices/todoslice'


const rootReducer = combineReducers({
  todo: todoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;