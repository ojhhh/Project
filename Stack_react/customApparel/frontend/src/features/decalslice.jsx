import { createSlice } from "@reduxjs/toolkit";

export const decalSlice = createSlice({
  name: "decal",
  initialState: {
    decalName: [],
    decalNum: 0,
    decalText: 0,
    decalMyPic: [],
  },
  reducers: {
    decalName: (state, action) => {
      state.decalName.push(action.payload);
    },
    decalNum: (state, action) => {
      if (action.payload == "plus") {
        state.decalNum += 1;
      } else if (action.payload == "minus") {
        state.decalNum -= 1;
      } else {
        state.decalNum = 0;
      }
    },
    decalText: (state, action) => {
      state.decalText += 1;
    },
    decalMyPic: (state, action) => {
      state.decalMyPic.push(action.payload);
    },
    decalClear: (state, action) => {
      console.log("데칼선택이 초기화되었습니다.");
      state.decalName = [];
      state.decalNum = 0;
    },
  },
});

export const { decalName, decalNum, decalText, decalMyPic, decalClear } =
  decalSlice.actions;
