import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const PROXY = process.env.REACT_APP_PROXY;

export const getmypageinfo = createAsyncThunk("mypage/", async () => {
  try {
    const response = await axios.get(`${PROXY}/mypage/`, {
      withCredentials: true,
    });
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    // console.log("getmypageinfo", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const updateuserpw = createAsyncThunk("mypage/", async (data) => {
  try {
    const response = await axios.post(
      `${PROXY}/mypage/updateuserpw`,
      { pw: data },
      {
        withCredentials: true,
      }
    );
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    // console.log("updateuserpw", response.data);
    return response.data;
  } catch (error) {
    // console.log(error);
  }
});

export const updateusernick = createAsyncThunk("mypage/", async (data) => {
  try {
    const response = await axios.post(
      `${PROXY}/mypage/updateusernick`,
      { nick: data },
      {
        withCredentials: true,
      }
    );
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    // console.log("updateusernick", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const imgUpdate = createAsyncThunk("mypage/imgUpdate", async (form) => {
  try {
    // console.log("imgUpdate", form);
    const response = await axios.post(`${PROXY}/mypage/imgUpdate`, form, {
      headers: {
        "Content-Type": "multipart/form-data; charset=utf-8",
      },
      withCredentials: true,
    });
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    // console.log("imgUpdate", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const postWrittenbyme = createAsyncThunk("", async () => {
  try {
    // console.log("postWrittenbyme");
    const response = await axios.get(`${PROXY}/mypage/postWrittenbyme`, {
      withCredentials: true,
    });
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    // console.log("postWrittenbyme", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const getmypostsIliked = createAsyncThunk("", async () => {
  try {
    const response = await axios.get(`${PROXY}/mypage/getmypostsIliked`, {
      withCredentials: true,
    });
    // 그냥  response 하면 작렬화되지않은 데이터라고 쿠사리먹인다.
    // console.log("getmypostsIliked", response.data);
    return response.data;
  } catch (error) {}
});
export const myPageSlice = createSlice({
  name: "mypage",
  initialState: {
    data: null,
    image: null,
    post: null,
    like: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // 비동기 액션의 성공 시 상태 업데이트
    builder.addCase(getmypageinfo.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(postWrittenbyme.fulfilled, (state, action) => {
      state.post = action.payload;
    });
  },
});
