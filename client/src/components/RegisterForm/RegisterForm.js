import React from "react";
import api from "../../constants/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./RegisterForm.scss";
import * as Yup from "yup";
import axios from "axios";
//import "normalize.css";

import { useHistory } from "react-router-dom";

export default function RegisterForm() {
  let history = useHistory();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid")
      .test("Unique Email", "Email already in use", async (emailAddress) => {
        const { data } = await axios.post(api.users + "/isUniqueEmail", {
          emailAddress: emailAddress,
        });
        //  console.log(data.result);
        return data.result;
      }),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const onSubmit = async (data) => {
    //console.log(data);
    const res = await axios.post(api.users, {
      firstName: data.firstName,
      lastName: data.lastName,
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
  };

  return (
    <div className="container-register">
      <form onSubmit={handleSubmit(onSubmit)} className="register-form">
        <p className="signup-header">Sign up for a free account</p>
        <div classname="name-group">
          <div className="form-group">
            <input
              name="firstName"
              type="text"
              {...register("firstName")}
              placeholder="First Name"
            />
            {errors.firstName && (
              <span className="error-display">{errors.firstName.message}</span>
            )}
          </div>
          <div className="form-group">
            <input
              name="lastName"
              type="text"
              {...register("lastName")}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <span className="error-display">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        <div className="form-group">
          <input
            name="email"
            type="text"
            {...register("email")}
            placeholder="Email Address"
          />
          {errors.email && (
            <span className="error-display">{errors.email.message}</span>
          )}
        </div>
        <div className="form-group">
          <input
            placeholder="Create Password"
            name="password"
            type="password"
            {...register("password")}
          />
          {errors.password && (
            <span className="error-display">{errors.password.message}</span>
          )}
        </div>
        <div className="form-group">
          <input
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="error-display">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="button__secondary button__link form-submit-button"
        >
          Register
        </button>
      </form>
    </div>
  );
}
