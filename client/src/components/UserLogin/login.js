import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div class="container">
      <div className="background-image"></div>
      <div className="login centered">
        <input
          name="username"
          type="text"
          placeholder="Username"
          //ref={register({ required: "This is required." })}
        />
        <div className="pass-wrapper">
          <input
            placeholder="Password"
            name="password"
            type="password"
            //ref={register({ required: "This is required." })}
          />
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
