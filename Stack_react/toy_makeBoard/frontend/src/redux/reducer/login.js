let init = {
  id: "",
  isLogin: false,
};

function reducer(state = init, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      // console.log(payload);
      return {
        ...state,
        id: payload,
        isLogin: true,
      };

    case "LOGOUT":
      return { ...state, id: "", isLogin: false };

    default:
      return state;
  }
}

export default reducer;
