import React from "react";
import Nav from "./components/Nav";
import LogIn from "./components/LogIn";
import Home from "./components/home";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp";
import AdminLogin from "./components/AdminLogin";
import AfterLogInArtist from "./components/AfterLogInArtist";
import HidMenu from "./components/HidMenu";
import Events from "./components/Events";
import Contact from "./components/Contact";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Routes>
          <Route path="/hidMenu" element={<HidMenu />} />
        </Routes>
        <Home />
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route path="/afterartlogin" element={<AfterLogInArtist />} /> */}
        </Routes>
        <About />
        <div className="frame">
          <Events />
          <Contact />
        </div>
      </div>
    </Router>
  );
};

export default App;
