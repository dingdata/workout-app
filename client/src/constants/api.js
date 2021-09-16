const api = {
  exercises: `${process.env.REACT_APP_API_URL}/api/exercises`,
  users: `${process.env.REACT_APP_API_URL}/api/users`,
  userLogin: `${process.env.REACT_APP_API_URL}/api/users/login`,
  usersLogout: `${process.env.REACT_APP_API_URL}/api/users/logout`,
  usersMe: `${process.env.REACT_APP_API_URL}/api/users/me`,
  usersExercise: `${process.env.REACT_APP_API_URL}/api/users/exercises`,
};

export default api;
