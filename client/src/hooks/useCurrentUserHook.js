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
    const { data } = await axios.get(api.users + "/me", {});
    console.log("response ", data.firstName);
    setCurrentUser({ firstName: data.firstName });
  };
  return {
    currentUser,
    setCurrentUser,
  };
};
