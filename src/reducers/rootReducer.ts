import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import locationReducer from "./locationReducer";
import isLoadingReducer from "./isLoadingReducer";
const rootReducer = combineReducers({
  notes: notesReducer,
  location: locationReducer,
  isLoading: isLoadingReducer,
});
export default rootReducer;
