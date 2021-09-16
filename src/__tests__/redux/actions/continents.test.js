import 'regenerator-runtime';
import * as types from '../../../redux/actionTypes/continents';
import * as actions from '../../../redux/actions/continents';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('Country Actions', () => {
  const mockStore = configureMockStore([thunk]);
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it(`Should dispatch ${types.GET_CONTINENTS_STARTED}`, async () => {
    await store.dispatch(actions.getContinentsStarted());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.GET_CONTINENTS_STARTED);
    expect(action.length).toEqual(1);
  });

  it(`Should dispatch ${types.GET_CONTINENTS_SUCCESS}`, async () => {
    await store.dispatch(actions.getContinentsSuccess());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.GET_CONTINENTS_SUCCESS);
    expect(action.length).toEqual(1);
  });

  it(`Should dispatch ${types.GET_CONTINENTS_FAILED}`, async () => {
    await store.dispatch(actions.getContinentsError());
    const action = await store.getActions();
    expect(action[0].type).toEqual(types.GET_CONTINENTS_FAILED);
    expect(action.length).toEqual(1);
  });
});
