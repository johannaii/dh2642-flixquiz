import React from "react";
import { Redirect, Route } from "react-router-dom";
//https://coderwhodreams.com/blog/creating-private-routes-and-handling-session-in-react-js/
function PrivateRoute({ isAuthenticated, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
