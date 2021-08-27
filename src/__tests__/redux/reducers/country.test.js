import "regenerator-runtime";
import * as types from "../../../redux/actionTypes/country";
import countryReducer from "../../../redux/reducers/country";
import initialState from "../../../redux/initialState";

describe("Country Reducer", () => {
  const reducer = (action) => {
    return countryReducer(initialState.country, action);
  };

  it("Default State", () => {
    const action = {
      type: undefined,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(initialState.country);
  });

  it(types.GET_COUNTRY_STARTED, () => {
    const action = {
      type: types.GET_COUNTRY_STARTED,
    };
    const expectedState = {
      loading: true,
      data: null,
      error: null,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });

  it(types.GET_COUNTRY_SUCCESS, () => {
    const countryInfo = [
      {
        name: "Rwanda",
        cases: "1000000",
      },
      { name: "Eritrea", cases: "100000" },
    ];
    const action = {
      type: types.GET_COUNTRY_SUCCESS,
      payload: { data: countryInfo },
    };
    const expectedState = {
      loading: false,
      data: countryInfo,
      error: null,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });

  it(types.GET_COUNTRY_FAILED, () => {
    const error = {
      message: "Network Error",
    };
    const action = {
      type: types.GET_COUNTRY_FAILED,
      payload: { error },
    };
    const expectedState = {
      loading: false,
      data: null,
      error: error,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });
});
