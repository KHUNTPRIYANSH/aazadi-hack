import React, { useState } from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: [value] });
  };

  return (
    <div className="dis">
      <div className="form-card l-form">
        <div className="left-i">
          <img
            src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/login.png"
            alt
          />
        </div>
        <div className="right">
          <form action="#">
            <h1>Artist Login</h1>

            <div className="row">
              <h2>Email</h2>
              <div className="field">
                <input
                  type="text"
                  required
                  name="userUni"
                  defaultValue={user.userPhoneNo}
                  onchange={getUserData}
                  placeholder="Enter Your Email Here"
                />
                <i className="fa fa-envelope" aria-hidden="true" />
              </div>
            </div>
            <div className="row">
              <h2>Password</h2>
              <div className="field">
                <input
                  type="text"
                  required
                  name="userPhoneNo"
                  defaultValue={user.userPhoneNo}
                  onchange={getUserData}
                  placeholder="Enter Your Password Here"
                />
                <i className="fa fa-eye" aria-hidden="true" />
              </div>
            </div>
            <div className="info">
              <input type="checkbox" name id defaultChecked />
              <p>
                I Agree With <span className="blue">Terms Of Services</span> and
                <span className="blue"> Privacy Policy. </span>
              </p>
            </div>
            <div className="row">
              <div className="btns">Login</div>
            </div>
            <div className="info">
              Don't have account
              <span className="blue">
                <Link to="/signUp">SignUp</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
