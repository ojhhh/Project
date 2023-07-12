import axios from "axios";

function login(user_id, user_pw) {
  return async (dispatch) => {
    const { data } = await axios.get("http://127.0.0.1:8080/users/login", {
      params: { user_id, user_pw },
    });
    if (data) {
      dispatch({ type: "LOGIN" });
    }
  };
}

function logout() {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
}

export const logins = { login, logout };
