import React from "react";

function LoginPage() {
  return (
    <>
      <div className="signin">
        <form action="#" method="post" autoComplete="off">
          <div className="group head">
            <h2>Welcome Back,</h2>
            <p>Sign In To Continue</p>
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
            <button type="submit">
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
    </>
  );
}

export default LoginPage;
