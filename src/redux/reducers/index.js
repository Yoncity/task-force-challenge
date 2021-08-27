import { combineReducers } from "redux";
import continents from "./continents";
import country from "./country";

const reducers = combineReducers({
  continents,
  country,
});

export default reducers;
