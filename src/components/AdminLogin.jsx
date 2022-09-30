import { useState } from "react";
import "./admin.css";

const AdminLogin = () => {
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
        <div className="form-card admin-f">
          <div className="left-i">
            <img
              src="https://raw.githubusercontent.com/KHUNTPRIYANSH/site_photos/main/admin.png"
              alt
            />
          </div>
          <div className="right">
            <form action="#">
              <h1>Admin Login</h1>
              <div className="row">
                <h2>Select Role</h2>
                <div className="field">
                  <div className="box">
                    <select>
                      <option value="clerk">Clerk</option>
                      <option value="dydo">
                        Distric Youth Development Officer
                      </option>
                      <option value="commissioner">Commissioner</option>
                    </select>
                  </div>
                  <i className="fa fa-user" />
                </div>
              </div>
              <div className="row">
                <h2>Unique Id</h2>
                <div className="field">
                  <input
                    type="text"
                    required
                    name="userId"
                    defaultValue={user.userId}
                    onchange={getUserData}
                    placeholder="Enter Your Unique Id Here"
                  />
                  <i className="fa fa-key" aria-hidden="true" />
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
                  I Agree With <span className="blue">Terms Of Services</span>{" "}
                  and
                  <span className="blue"> Privacy Policy. </span>
                </p>
              </div>
              <div className="row">
                <div className="btns">Log in</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
