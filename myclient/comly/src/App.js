import "./App.css";
import React from "react";
import NavBar from "./components/navBar";
import AppSignUp from "./components/appSignUp";
import AppLogin from "./components/appLogin";
import { Routes, Route } from "react-router-dom";
import AppComment from "./components/appComment";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/signUp" element={<AppSignUp />} />
        <Route exact path="/login" element={<AppLogin />} />
        <Route exact path="/" element={<AppComment />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
