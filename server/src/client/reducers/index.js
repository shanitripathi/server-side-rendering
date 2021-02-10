import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import AuthReducer from "./AuthReducer";

const reducers = combineReducers({
  user: usersReducer,
  auth: AuthReducer,
});

export default reducers;
