import React, { useState } from "react";
import { getToken } from "../util/jwt";
import { getDomain } from "../util/env";

import Axios from "axios";

export const UserContext = React.createContext(undefined);

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState({
    userName: "",
    _id: undefined,
    friends: [],
  });
  const [loggedIn, setLoggedIn] = useState(false);

  const validateUser = async () => {
    const accessToken = getToken();
    if (accessToken) {
      const userResponse = await Axios.post(`${getDomain()}/users/validate`, {
        accessToken,
      });
      const validUser = userResponse.data;
      if (validUser) {
        setCurrentUser(validUser);
        setLoggedIn(true);
      } else {
        return;
      }
    }
  };

  return {
    UserContext,
    currentUser,
    setCurrentUser,
    validateUser,
    loggedIn,
    setLoggedIn,
  };
};
