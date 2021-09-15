import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import api from "../../constants/api";
import { useHistory } from "react-router-dom";

const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
  let history = useHistory();
  const { handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const res = await axios.post(api.users + "/login", {
      emailAddress: data.email,
      password: data.password,
    });
    //check if creation successful
    if (res.status === 201) {
      //create jwt token

      history.push("/LoggedInMain");

      //redirect to logged in screen
    } else {
      //error message
    }

    console.log(res);
    console.log(data);
  };

  return (
    <div class="container">
      <div className="background-image"></div>
      <div className="login centered">
        <input name="username" type="text" placeholder="Username" />
        <div className="pass-wrapper">
          <input placeholder="Password" name="password" type="password" />
          <i>{eye}</i>
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
