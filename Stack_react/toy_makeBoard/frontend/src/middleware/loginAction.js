import axios from "axios";

function login(user_id, user_pw) {
  return async (dispatch) => {
    const { data } = await axios.post(
      "http://127.0.0.1:8080/users/login",
      {
        user_id,
        user_pw,
      },
      { withCredentials: true }
    );
    // console.log(data);
    if (data == "wrong id") {
      alert("아이디가 틀렸습니다.");
      return;
    }
    if (data == "wrong password") {
      alert("비밀번호가 틀렸습니다.");
      return;
    }

    if (data) {
      dispatch({ type: "LOGIN", payload: { user_id } });
      return true;
    }
  };
}

function logout() {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
}

export const loginAction = { login, logout };
