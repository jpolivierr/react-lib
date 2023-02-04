import filterReducer from "./filterReducer";
import requestReducer from "./requestReducer";
import jobsReducer from "./jobsReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    filterReducer,
    requestReducer,
    jobsReducer
})

export default reducers