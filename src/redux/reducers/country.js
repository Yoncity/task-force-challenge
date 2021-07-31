import * as types from "../actionTypes/country";
import initialState from "../initialState";

const country = (state = initialState.country, { type, payload }) => {
  switch (type) {
    case types.GET_COUNTRY_STARTED:
      return { loading: true, error: null, data: null };
    case types.GET_COUNTRY_SUCCESS:
      return { loading: false, error: null, data: payload.data };
    case types.GET_COUNTRY_FAILED:
      return { loading: false, error: payload.error, data: null };
    default:
      return state;
  }
};

export default country;
