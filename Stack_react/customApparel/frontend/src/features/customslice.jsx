import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const customSlice = createSlice({
  name: "custom",
  initialState: {
    nowselectproduct: 1,
    basic: [
      {
        id: 1,
        name: "티셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "9,000",
        cloth: "tshirt",
        intprice: 100,
        count: 1,
        sum: 100,
        decalNum: 0,
        decaldata: "응애",
      },
      {
        id: 2,
        name: "긴팔셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "10,000",
        cloth: "longsleeveshirt",
        intprice: 10000,
        count: 1,
        sum: 100,
        decalNum: 0,
        decaldata: "응애",
      },
      {
        id: 3,
        name: "원피스",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "11,000",
        cloth: "onepiece",
        intprice: 11000,
        count: 1,
        sum: 100,
        decalNum: 0,
        decaldata: "응애",
      },
      {
        id: 4,
        name: "후드티셔츠",
        color: ["white", "red", "yellow", "green", "blue", "orange", "navy"],
        size: ["FREE", "M", "L", "XL", "2XL", "3XL"],
        price: "12,000",
        cloth: "tanktop",
        intprice: 12000,
        count: 1,
        sum: 100,
        decalNum: 0,
        decaldata: "응애",
      },
    ],
  },
  reducers: {
    customName: (state, action) => {
      // console.log("customName", action.payload);
      state.basic[state.nowselectproduct - 1].decaldata = action.payload;
      // console.log(state.basic[state.nowselectproduct - 1].decaldata);
    },
    customNum: (state, action) => {
      // console.log("customNum", action.payload);
      state.basic[state.nowselectproduct - 1].decalNum = action.payload;
    },
    selectnumber: (state, action) => {
      state.nowselectproduct = action.payload;
      // console.log("customSlice", state.nowselectproduct);
    },
  },
});

export const { customName, customNum, selectnumber } = customSlice.actions;
