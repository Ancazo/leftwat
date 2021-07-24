import React, { useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useCookies } from "react-cookie";

const authContext = createContext();
function useAuth() {
  return useContext(authContext);
}

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  const history = useHistory();
  const [cookies] = useCookies(["name"]);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        cookies.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
