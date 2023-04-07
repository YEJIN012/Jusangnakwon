import { createSlice } from "@reduxjs/toolkit";

// 리뷰 작성페이지에서 술 이름 검색 후 선택한 술 정보
const initialState: {
  id?: number | undefined;
  name?: string | undefined;
  liquorType?: string | undefined;
} = {} ;
const selectedDrinkSlice = createSlice({
  name: "selectedDrink",
  initialState,
  reducers: {
    selectDrink: (state, action) => {
      state = action.payload;
      // console.log(state);
      return state;
    },
    resetDrink: (state, action) => {
      state = initialState;
      // console.log(state)
      return state;
    },
  },
});

export const selectDrinkActions = selectedDrinkSlice.actions;

export default selectedDrinkSlice.reducer;
