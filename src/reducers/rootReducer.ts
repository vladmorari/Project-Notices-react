import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import locationReducer from "./locationReducer";
const rootReducer = combineReducers({
  notes: notesReducer,
  location: locationReducer,
});
export default rootReducer;
