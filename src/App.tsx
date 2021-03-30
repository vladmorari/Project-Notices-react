import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as p from "./pages";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import * as req from "./components/requests";
const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

  useEffect(() => {
    req.checkAuth()
      .then((res) => {
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
          path="/logout"
          isAuthenticated={isAuthenticated}
          render={(props: any) => (
            <p.LogOut {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
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
          component={p.Profile}
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
