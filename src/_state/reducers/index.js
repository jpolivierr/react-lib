import filterReducer from "./filterReducer";
import requestReducer from "./requestReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    filterReducer,
    requestReducer
})

export default reducers