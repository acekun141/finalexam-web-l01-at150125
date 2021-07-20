import { combineReducers } from "redux";
import user from "./user/reducer";
import listClass from "./listClass/reducer";
import listStudent from "./listStudent/reducer";

export default combineReducers({ user, listClass, listStudent });
