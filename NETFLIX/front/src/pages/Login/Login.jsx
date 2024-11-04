import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signUp } from "../../firebase";
import netflixSpinner from "../../assets/netflix_spinner.gif";

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const userAuth = async (e) => {
    e.preventDefault();
      setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/home";
    }, 30000);
  };

  return (
    loading ? <div className="loadingSpinner"><img src={netflixSpinner} alt="loading" /></div> :
    <div className="login">
      <img src={logo} className="loginLogo" alt="" />
      <div className="loginForm">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" />
          ) : (
            <></>
          )}
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button onClick={userAuth} type="submit">{signState}</button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="formSwitch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix? <span onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have an account <span onClick={() => {setSignState("Sign In")}}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
