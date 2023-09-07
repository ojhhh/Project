import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const clothSlice = createSlice({
  name: "cloth",
  initialState: {
    clothColor: "white",
    clothType: "tshirt",
    clothCapture: false,
  },
  reducers: {
    clothColor: (state, action) => {
      // console.log(action);
      state.clothColor = action.payload;
    },
    clothType: (state, action) => {
      state.clothType = action.payload;
    },
    clothCapture: (state, action) => {
      state.clothCapture = !state.clothCapture;
    },
  },
});

export const { clothColor, clothType, clothCapture } = clothSlice.actions;
