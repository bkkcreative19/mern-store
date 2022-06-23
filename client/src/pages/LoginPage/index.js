import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as routes from "../../constants/routes";
import * as userAction from "../../actions/userActions";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import * as userConstants from "../../constants/userConstants";
import "./Login.scss";

export const LoginPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userAuthData = useSelector((state) => state.userLogin);

  const { userInfo, error, loading } = userAuthData;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      if (params.redirect === "checkout-information") {
        navigate(`/checkout/information`);
      } else {
        navigate(`/${params.redirect}`);
      }
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
        <button onClick={submitHandler}>Log in</button>
      </form>
    </section>
  );
};
