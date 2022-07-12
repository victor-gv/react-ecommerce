import React from "react";
import Header from "../Navbar/Navbar";
import './LoginPage.css'

function LoginPage() {
  return (
    <>
    <Header />
      <div className="login__container">
        <div className="signin">
          <form action="#" method="post" autoComplete="off">
            <div className="group head">
              <h2>Please,</h2>
              <p>Sign In To Continue your purchase</p>
            </div>
            <div className="group">
              <label htmlFor="username-field">Email or Username</label>
              <br />
              <input
                type="text"
                name="username"
                id="username-field"
                required=""
              />
            </div>
            <div className="group">
              <label htmlFor="password-field">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password-field"
                required=""
              />
              <span
                toggle="#password-field"
                className="fa fa-fw fa-eye field-icon toggle-password"
              />
            </div>
            <div className="group forgot-pass-link">
              <a>Forget Password?</a>
            </div>
            <div className="group">
              <button type="button">
                <span>Login</span>
              </button>
            </div>
            <div className="group sign-up-link">
              <p>
                New User? <a>Signup</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
