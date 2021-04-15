import { combineReducers } from "redux";
import { personReducer } from "./personReducer";
import { personsReducer } from "./personsReducer";
import { showpersonReducer } from "./showpersonReducer";

export const reducers = combineReducers({
  person: personReducer,
  persons: personsReducer,
  showpresons: showpersonReducer,
});
