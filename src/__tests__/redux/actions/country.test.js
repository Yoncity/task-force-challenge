import 'regenerator-runtime';
import * as types from '../../../redux/actionTypes/country';
import * as actions from '../../../redux/actions/country';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Country Actions', () => {
  const mockStore = configureMockStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it(`Should dispatch ${types.GET_COUNTRY_STARTED}`, async () => {
    await store.dispatch(actions.getCountryStarted());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.GET_COUNTRY_STARTED);
    expect(action.length).toEqual(1);
  });

  it(`Should dispatch ${types.GET_COUNTRY_SUCCESS}`, async () => {
    await store.dispatch(actions.getCountrySuccess());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.GET_COUNTRY_SUCCESS);
    expect(action.length).toEqual(1);
  });

  it(`Should dispatch ${types.GET_COUNTRY_FAILED}`, async () => {
    await store.dispatch(actions.getCountryError());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.GET_COUNTRY_FAILED);
    expect(action.length).toEqual(1);
  });
});
