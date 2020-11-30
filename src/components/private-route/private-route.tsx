import React, { FC } from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../hooks";

type PrivateRoutePropsType = {
  component: any;
  path: string;
};

const PrivateRoute: FC<PrivateRoutePropsType> = (props) => {
  const { component: Component, ...rest } = props;
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props: any) =>
        auth.getAccessToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
