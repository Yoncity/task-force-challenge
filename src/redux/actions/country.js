import * as types from "../actionTypes/country";
import axios from "axios";

export const getCountryStarted = () => ({
  type: types.GET_COUNTRY_STARTED,
});
export const getCountrySuccess = (data) => ({
  type: types.GET_COUNTRY_SUCCESS,
  payload: { data },
});

export const getCountryError = (error) => ({
  type: types.GET_COUNTRY_FAILED,
  payload: { error },
});

const getCountry = (country) => (dispatch) => {
  dispatch(getCountryStarted());
  try {
    axios
      .get(`https://corona.lmao.ninja/v2/countries/${country}?strict=true`)
      .then((data) => dispatch(getCountrySuccess(data.data)))
      .catch((error) => dispatch(getCountryError(error)));
  } catch (error) {
    dispatch(getCountryError(error.message));
  }
};

export default getCountry;
