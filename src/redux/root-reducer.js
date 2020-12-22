//brain guy
//all combined here

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
});
