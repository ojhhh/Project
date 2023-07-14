let init = { allPost: "", cnt: 0 };

const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT":
      return { ...state, allPost: payload };
    case "INSERT":
      return { ...state, cnt: state.cnt + 1 };
    case "UPDATE":
      return { ...state, cnt: state.cnt + 1 };
    case "DELETE":
      return { ...state, cnt: state.cnt + 1 };

    default:
      return state;
  }
};

export default reducer;
