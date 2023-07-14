import axios from "axios";

function signAction(user_id, user_pw, user_name) {
  return async (dispatch) => {
    const { data } = await axios.get("http://127.0.0.1:8080/users/signUp", {
      params: { user_id, user_pw, user_name },
    });
    // console.log(data);
    if (!data) {
      return false;
    } else {
      return true;
    }
  };
}

export default signAction;
