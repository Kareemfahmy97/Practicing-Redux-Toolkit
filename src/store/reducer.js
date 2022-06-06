import logging from "./logginReducer";
import counter from "./counterReducer";
import { combineReducers } from "redux";


const reducers = combineReducers({
    counter,
    logging,
})

export default reducers;