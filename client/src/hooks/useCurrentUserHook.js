import { useState, useEffect } from "react";

import axios from "axios";
import api from "../constants/api";

export const useCurrentUserHook = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    retrieveLoggedUserInfo();
    // const tempUser = { username: "Sabrina" };
    // setCurrentUser(tempUser);
  }, []);

  const retrieveLoggedUserInfo = async () => {
    const { data } = await axios.get(api.users + "/me", {});
    setCurrentUser({ firstName: data.firstName });
  };

  return {
    currentUser,
    setCurrentUser,
  };
};
