import { createSlice } from "@reduxjs/toolkit";

// 게시글 목록 관리 slice
const postsSlice = createSlice({
  name: "posts",
  // list 빈배열 (초기상태)
  initialState: { list: [] },
  reducers: {
    addPost: (state, action) => {
      // payload로 받은 게시글을 배열에 추가
      state.list.push(action.payload);
    },
    removePost: (state, action) => {
      state.list = state.list.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.list.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    // 게시물 전체리스트 새로 설정
    setPosts: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addPost, removePost, updatePost, setPosts } = postsSlice.actions;

export default postsSlice.reducer;
