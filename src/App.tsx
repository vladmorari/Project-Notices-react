import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as p from "./pages";
import * as c from "./components";
import Profile from "./pages/Profile/Profile"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import * as req from "./components/requests";
//Redux version
const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  useEffect(() => {
    req
      .checkAuth()
      .then((res) => {
        switch (res.status) {
          case 200:
            setIsAuthenticated(true);
            break;
          default:
            setIsAuthenticated(false);
        }
      })
      .catch((err) => {
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/login"
          render={(props) => (
            <c.Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          exact
          path="/registration"
          render={() => (
            <c.Registration setIsAuthenticated={setIsAuthenticated} />
          )}
        />

        <PrivateRoute
          exact
          path="/logout"
          isAuthenticated={isAuthenticated}
          render={() => <p.LogOut setIsAuthenticated={setIsAuthenticated} />}
        />
        <PrivateRoute
          exact
          path="/notices"
          component={p.MyNotices}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/"
          component={Profile}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/notices/:id"
          component={p.Notice}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          exact
          path="/createNote"
          component={p.NewNotice}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </>
  );
};

export default App;
