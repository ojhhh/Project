import { configureStore } from "@reduxjs/toolkit"; // createstore랑 비슷하다 다만 기능추가
import { userSlice } from "../features/mainslice";
import { myPageSlice } from "../features/mypageslice";
import { customSlice } from "../features/customslice";
import { clothSlice } from "../features/clothslice";
import postsSlice from "../features/postslice";
import { paymentSlice } from "../features/paymentslice";
import { decalSlice } from "../features/decalslice";
export const store = configureStore({
  reducer: {
    // 가게만들면서 메뉴판 전달
    user: userSlice.reducer,
    mypage: myPageSlice.reducer,
    custom: customSlice.reducer,
    // 가게만들면서 메뉴판 전달
    cloth: clothSlice.reducer,
    payment: paymentSlice.reducer,
    decal: decalSlice.reducer,
    posts: postsSlice,
  },
});
