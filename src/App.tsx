/* eslint-disable no-fallthrough */
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as p from "./pages";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
//import { Home } from "./pages/Home/Home";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  useEffect(() => {
    console.log("is Auth>>>", isAuthenticated);

    fetch(`http://localhost:8000/check-auth`)
      .then((res) => {
        console.log(res);
        switch (res.status) {
          case 200:
            setIsAuthenticated(true);
            break;
          default:
            setIsAuthenticated(false);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => (
            <p.Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <PrivateRoute
          exact
          path="/"
          component={p.Home}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/profile"
          component={p.Profile}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </>
  );
};

export default App;
