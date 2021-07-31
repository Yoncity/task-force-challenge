import { combineReducers } from "redux";
import authenticate from "./auth";
import continents from "./continents";
import country from "./country";

const reducers = combineReducers({
  authenticate,
  continents,
  country,
});

export default reducers;
