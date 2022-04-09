import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as routes from "../../constants/routes";
import * as userAction from "../../actions/userActions";
import { useNavigate, useLocation } from "react-router-dom";
import * as userConstants from "../../constants/userConstants";
import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuthData = useSelector((state) => state.userLogin);

  const { userInfo, error, loading } = userAuthData;
  console.log(location);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userAction.auth(email, password));
  };

  return (
    <section className="login">
      <h3>Login</h3>
      <form onSubmit={submitHandler}>
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
        <button onClick={submitHandler}>Sign in</button>
      </form>
    </section>
  );
};
