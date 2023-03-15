import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
    {
      id: 1,
      title: "리덕스툴킷",
      content: "그게뭔데그게뭔데그거어떻게하는건데",
    },

    {
      id: 2,
      title: "타입스크립트",
      content: "그게뭔데그게뭔데그거어떻게하는건데",
    },

    {
      id: 3,
      title: "리액트",
      content: "그게뭔데그게뭔데그거어떻게하는건데",
    },

    {
      id: 4,
      title: "SQLD",
      content: "그게뭔데그게뭔데그거어떻게하는건데",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeEx(state, action) {
      state.taskList = action.payload;
    },
  },
});

export const exampleActions = todoSlice.actions;

export default todoSlice.reducer;
