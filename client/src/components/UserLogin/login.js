import React from "react";
import "./login.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../constants/api";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";
import { useContext } from "react";

const eye = <FontAwesomeIcon icon={faEye} />;
const Login = () => {
  let history = useHistory();

  const { setCurrentUser } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await axios.post(api.users + "/login", {
      emailAddress: data.emailAddress,
      password: data.password,
    });

    //check if login successful
    if (res.status === 200) {
      //create jwt token
      history.push("/allWorkouts");
      console.log(res);
      setCurrentUser({ firstName: res.data.firstName });
      //redirect to logged in screen
    } else {
      //error message
      //how to bring back and display error on screen?
    }

    console.log(res);
  };

  return (
    <div class="container">
      <div className="background-image"></div>
      <div className="login centered">
        <input
          name="username"
          type="text"
          placeholder="Username"
          {...register("emailAddress")}

          //ref={register({ required: "This is required." })}
        />
        <div className="pass-wrapper">
          <input
            placeholder="Password"
            name="password"
            type="password"
            {...register("password")}

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
