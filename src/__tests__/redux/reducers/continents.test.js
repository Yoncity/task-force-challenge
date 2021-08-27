import "regenerator-runtime";
import * as types from "../../../redux/actionTypes/continents";
import continentsReducer from "../../../redux/reducers/continents";
import initialState from "../../../redux/initialState";

describe("Continents Reducer", () => {
  const reducer = (action) => {
    return continentsReducer(initialState.continents, action);
  };

  it("Default State", () => {
    const action = {
      type: undefined,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(initialState.continents);
  });

  it(types.GET_CONTINENTS_STARTED, () => {
    const action = {
      type: types.GET_CONTINENTS_STARTED,
    };
    const expectedState = {
      loading: true,
      data: null,
      error: null,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });

  it(types.GET_CONTINENTS_SUCCESS, () => {
    const continentsInfo = [
      {
        name: "Africa",
        cases: "10000000",
      },
      { name: "Europe", cases: "20000000" },
    ];
    const action = {
      type: types.GET_CONTINENTS_SUCCESS,
      payload: { data: continentsInfo },
    };
    const expectedState = {
      loading: false,
      data: continentsInfo,
      error: null,
    };
    const currentState = reducer(action);
    expect(currentState).toEqual(expectedState);
  });

  it(types.GET_CONTINENTS_FAILED, () => {
    const error = {
      message: "Network Error",
    };
    const action = {
      type: types.GET_CONTINENTS_FAILED,
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
