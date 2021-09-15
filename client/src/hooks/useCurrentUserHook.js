import { useState, useEffect } from "react";

const tempUser = { username: "Sabrina" };

export const useCurrentUserHook = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    // TODO: axios call here to get currently logged in user
    // setCurrentUser(tempUser);
  }, []);

  return {
    currentUser,
    setCurrentUser,
  };
};
