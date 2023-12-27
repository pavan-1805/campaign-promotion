import { combineReducers } from "redux";
import campaign from "./campaign";
import promotion from "./promotion";
import survey from "./survey";

const rootReducer =  combineReducers({
    campaign,
    promotion,
    survey
})
export default rootReducer;