import React from "react";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import AdminLogin from "./components/AdminLogin";
import AfterLogInArtist from "./components/AfterLogInArtist";
import HidMenu from "./components/HidMenu";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Home />
        <Routes>
          <Route path="/hidMenu" element={<HidMenu />} />
          <Route path="/" />
        </Routes>
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/afterartlogin" element={<AfterLogInArtist />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
