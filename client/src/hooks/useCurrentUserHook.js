import { useState, useEffect } from "react";

import axios from "axios";
import api from "../constants/api";

export const useCurrentUserHook = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    retrieveLoggedUserInfo();
    // const tempUser = { firstName: "Sabrina" };
    // setCurrentUser(tempUser);
  }, []);

  const retrieveLoggedUserInfo = async () => {
    const { data } = await axios.get(api.usersMe, {});
    if (data) {
      setCurrentUser({ firstName: data.firstName });
    } else {
      setCurrentUser(null);
    }
  };

  return {
    currentUser,
    setCurrentUser,
  };
};
