import axios from 'axios';
import * as types from '../actionTypes/continents';

export const getContinentsStarted = () => ({
  type: types.GET_CONTINENTS_STARTED,
});

export const getContinentsSuccess = (data) => ({
  type: types.GET_CONTINENTS_SUCCESS,
  payload: { data },
});

export const getContinentsError = (error) => ({
  type: types.GET_CONTINENTS_FAILED,
  payload: { error },
});

const getContinents = () => (dispatch) => {
  dispatch(getContinentsStarted());

  try {
    axios
      .get('https://corona.lmao.ninja/v2/continents?yesterday=false&sort')
      .then((data) => dispatch(getContinentsSuccess(data.data)))
      .catch((error) => dispatch(getContinentsError(error)));
  } catch (error) {
    dispatch(getContinentsError(error.message));
  }
};

export default getContinents;
