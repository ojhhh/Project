import axios from "axios";

const postSelect = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://127.0.0.1:8080/posts/allposts", {
      withCredentials: true,
    });

    dispatch({ type: "SELECT", payload: data.data });
    dispatch({ type: "LOGIN", payload: data.user_id });
  };
};

const postInsert = (title, content, writer) => {
  return async (dispatch) => {
    const data = await axios.post(
      "http://127.0.0.1:8080/posts/insert",
      {
        title,
        content,
        writer,
      },
      { withCredentials: true }
    );
    if (data) {
      dispatch({ type: "INSERT" });
    }
  };
};

const postUpdate = ({ id, title, content }) => {
  return async (dispatch) => {
    const data = await axios.post(
      "http://127.0.0.1:8080/posts/update",
      {
        id,
        title,
        content,
      },
      { withCredentials: true }
    );
    dispatch({ type: "UPDATE" });
  };
};

const postDelete = (id) => {
  return async (dispatch) => {
    const data = await axios.post(
      "http://127.0.0.1:8080/posts/delete",
      { id },
      { withCredentials: true }
    );
    dispatch({ type: "DELETE" });
  };
};

export const postAction = { postSelect, postInsert, postUpdate, postDelete };
