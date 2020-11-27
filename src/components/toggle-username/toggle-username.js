import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks";

const ToggleUsername = () => {
  const auth = useAuth();
  const user = auth.user;

  if (!user) {
    return (
      <div>
        <Link to="/signin">Войти</Link>
      </div>
    );
  }

  const username = user.user.email.split("@")[0];

  return (
    <div>
      <Link to="/user-details">{username}</Link>
    </div>
  );
};

export default ToggleUsername;
