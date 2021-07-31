import * as types from "../actionTypes/continents";
import initialState from "../initialState";

const continents = (state = initialState.continents, { type, payload }) => {
  switch (type) {
    case types.GET_CONTINENTS_STARTED:
      return { loading: true, error: null, data: null };
    case types.GET_CONTINENTS_SUCCESS:
      return { loading: false, error: null, data: payload.data };
    case types.GET_CONTINENTS_FAILED:
      return { loading: false, error: payload.error, data: null };
    default:
      return state;
  }
};

export default continents;
