import { combineReducers } from "redux";
import commonReducer from "./SubTest/src/Reducers/CommonReducers"

const rootReducer = combineReducers({
  commonReducer: commonReducer,
});

export default rootReducer;
