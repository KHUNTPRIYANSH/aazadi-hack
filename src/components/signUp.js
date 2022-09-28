import React from "react";
import { useState } from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";
const SingUp = () => {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userPhoneNo: "",
  });

  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: [value] });
  };
  return (
    <>
      <div className="dis">
        <div className="form-card form-1">
          <div className="left-i">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/ind.png"
              alt
            />
          </div>
          <div className="right s-form">
            <form action="#">
              <h1>Signup</h1>
              <div className="row">
                <h2>Full Name</h2>
                <div className="field">
                  <input
                    type="text"
                    required
                    name="userName"
                    defaultValue={user.userName}
                    onchange={getUserData}
                    placeholder="Enter Your Full Name "
                  />
                  <i className="fa fa-user" />
                </div>
              </div>
              <div className="row">
                <h2>Mobile Number</h2>
                <div className="field">
                  <input
                    type="text"
                    required
                    name="userPassword"
                    defaultValue={user.userPassword}
                    onchange={getUserData}
                    placeholder="Enter Your Password"
                  />
                  <i className="fa fa-phone" aria-hidden="true" />
                </div>
              </div>
              <div className="row">
                <h2>Email</h2>
                <div className="field">
                  <input
                    type="text"
                    required
                    name="userEmail"
                    defaultValue={user.userEmail}
                    onchange={getUserData}
                    placeholder="Enter Your Email"
                  />
                  <i className="fa fa-envelope-o" aria-hidden="true" />
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
                    placeholder="Enter Your Mobile No."
                  />
                  <i className="fa fa-eye" aria-hidden="true" />
                </div>
              </div>
              <div className="info">
                <input type="checkbox" name id defaultChecked />
                <p>
                  I Agree With <span className="blue">Terms Of Services</span>{" "}
                  and
                  <span className="blue"> Privacy Policy. </span>
                </p>
              </div>
              <div className="row">
                <div className="btns">Sign Up</div>
              </div>{" "}
              <div className="info">
                Already have an account
                <span className="blue">
                  <Link to="/">Login</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;
