// import "../../setupTests.ts";
import React from "react";
import { render } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../../redux/reducers";
import initialState from "../../redux/initialState";
import Home from "../../containers/Home";

let store;

let container;

describe("Home Container", () => {
  beforeEach(() => {
    store = createStore(reducers, initialState, applyMiddleware(thunk));
    container = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  afterEach(() => {
    container.unmount();
    container = null;
  });

  it("Should render header properly", () => {
    const { getByText } = container;
    getByText("C O V I C A L C");
    getByText("CONTACT");
  });

  it("Should render UserInput properly", () => {
    const { getByText } = container;
    getByText("UPDATES");
    getByText("Search a country");
    getByText("SUBMIT");
  });

  it("Should render ScrollableContent properly", () => {
    const { getByText } = container;
    getByText("PER CONTINENTS");
  });

  it("Should render my portrait", () => {
    const { getByText } = container;
    getByText("YONATAN DAWIT");
    getByText("Software Developer");
    getByText("06 August 2021");
  });
  it("Should render Footer properly", () => {
    const { getByText } = container;

    getByText("REACH ME");
    getByText("Email");
    getByText("yonatan.dawit.dev@gmail.com");
    getByText("Phone");
    getByText("+256 785 323 292");
    getByText("Profile");
    getByText("Click here to see my profile");

    getByText("Developed By");
    getByText("Yonatan @Yoncity");
    getByText("DesignedBy");
    getByText("Awesomity Lab");
  });
});
