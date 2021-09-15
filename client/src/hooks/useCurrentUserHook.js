import { useState, useEffect } from "react";

import axios from "axios";
import api from "../constants/api";

// const tempUser = { username: "Sabrina" };

export const useCurrentUserHook = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // TODO: axios call here to get currently logged in user
    retrieveLoggedUserInfo();

    // setCurrentUser(tempUser);
  }, []);

  const retrieveLoggedUserInfo = async () => {
    const res = await axios.get(api.users + "/me", {});
    console.log("response ", res);
    console.log("res user", res.user);
  };
  return {
    currentUser,
    setCurrentUser,
  };
};
