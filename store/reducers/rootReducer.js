import authReducer from "./authReducer";
import noteReducer from "./noteReducer";
import componentReducer from "./componentReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    note: noteReducer,
    component: componentReducer
});
export default rootReducer;
