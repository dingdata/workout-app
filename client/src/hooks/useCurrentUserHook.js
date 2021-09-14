import { useState, useEffect } from "react";

const tempUser = { username: "Sabrina" };

export const useCurrentUserHook = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // TODO: axios call here to get currently logged in user
    // uncomment below if you want to temporarily set a value for currentUser
    // setCurrentUser(tempUser);
  }, []);

  return {
    currentUser,
    setCurrentUser,
  };
};
