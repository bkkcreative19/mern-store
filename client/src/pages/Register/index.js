import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as routes from "../../constants/routes";
import * as userAction from "../../actions/userActions";
import * as userConstants from "../../constants/userConstants";
import "./Register.scss";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userRegisterData = useSelector((state) => state.userRegister);

  const { error, loading, message, success } = userRegisterData;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // setVerificationMessage('');
    // if (password !== confirmPassword) {
    //   return setVerificationMessage("Passwords don't match");
    // }
    dispatch(userAction.register(firstName, lastName, email, password));
  };

  return (
    <section className="register">
      <h3>Create account</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First name"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={handleSubmit}>Create</button>
      </form>
    </section>
  );
};
