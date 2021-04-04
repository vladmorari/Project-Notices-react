import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import * as p from "./pages";
import * as c from "./components";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import * as req from "./components/requests";
import { useSelector } from "react-redux";

//Redux version
const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const isLoading = useSelector((state: any) => state.isLoading.isLoading);

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
      {isLoading ? <c.IsLoading></c.IsLoading> : null}

      <Switch>
        <PrivateRoute
          path="/notices/:id"
          component={p.Notice}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/notices"
          component={p.MyNotices}
          isAuthenticated={isAuthenticated}
        />
        <Route
          path="/login"
          render={(props) => (
            <c.Login {...props} setIsAuthenticated={setIsAuthenticated} />
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <c.Registration setIsAuthenticated={setIsAuthenticated} />
          )}
        />

        <PrivateRoute
          path="/logout"
          isAuthenticated={isAuthenticated}
          render={() => <p.LogOut setIsAuthenticated={setIsAuthenticated} />}
        />

        <PrivateRoute
          path="/createNote"
          component={p.NewNotice}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/"
          component={Profile}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    </>
  );
};

export default App;
