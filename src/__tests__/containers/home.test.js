import React from "react";
import Home from "../../containers/Home";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);
let store;

beforeEach(() => {
  store = mockStore({});
});

describe("Home Container", () => {
  it("Should Render Homepage", () => {
    // expect(container).toMatchSnapshot();
  });
});

afterEach(() => {});
