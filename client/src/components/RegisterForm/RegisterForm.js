import React from "react";

import { useForm } from "react-hook-form";
import "./RegisterForm.scss";
//import "normalize.css";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="register-form">
      <p>Sign up for free account</p>
      <div classname="name-group">
        <div className="form-group">
          <input
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="form-group">
        <input
          name="emailAddress"
          placeholder="Email Address"
          //   ref={register({ required: true })}
        />
      </div>
      <div className="form-group">
        <input
          name="createPassword"
          placeholder="Create Password"
          //   ref={register({ required: true })}
        />
      </div>
      <button type="submit" className="form-submit-button">
        Register
      </button>
    </form>
  );
}
