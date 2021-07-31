import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Error from "./components/Error";
import locale from "./locale";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="*"
          render={(props) => (
            <Error {...props} message={locale.eng.pageNotFound} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
