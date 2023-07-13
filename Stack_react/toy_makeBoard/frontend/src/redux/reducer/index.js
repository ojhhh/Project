import { combineReducers } from "redux";
import logins from "./login";
import posts from "./posts";

const rootReducer = combineReducers({ logins, posts });

export default rootReducer;
