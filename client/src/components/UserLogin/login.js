import React from "react";
import "./login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../constants/api";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";
import { useContext, useState } from "react";

const eye = <FontAwesomeIcon icon={faEye} />;
const Login = () => {
  let history = useHistory();

  const { setCurrentUser } = useContext(UserContext);

  //mask password
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  //mask password end

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(api.users + "/login", {
        emailAddress: data.emailAddress,
        password: data.password,
      });

      history.push("/allWorkouts");
      setCurrentUser({ firstName: res.data.firstName });
    } catch (err) {
      console.error(err.response.data);
      // TODO: you can make use of this error message to display on the UI
    }
  };

  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="login centered">
        <input
          name="username"
          type="text"
          placeholder="Username"
          {...register("emailAddress")}
        />
        <div className="pass-wrapper">
          <input
            placeholder="Password"
            name="password"
            type={passwordShown ? "text" : "password"}
            {...register("password")}
          />
          <i onClick={togglePasswordVisiblity}>{eye}</i>
        </div>
        <button
          type="submit"
          className="button__secondary button__link"
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
