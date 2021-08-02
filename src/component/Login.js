import React, { useState } from "react";
import "../style/Login.css";
import Logo from "../image/logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/" className="login_link">
        <img src={Logo} alt="" className="login_logo" />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={signIn} className="login_signInButton">
            Sign In
          </button>

          <p>
            By signing-in you agree to the AMAZON CLONE condition of use sale.
            Please see our Pricacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice
          </p>

          <button onClick={register} className="create_account">
            Create Your Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
