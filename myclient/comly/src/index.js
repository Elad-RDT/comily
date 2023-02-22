import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserProvider from "./components/signup";
import App from "./App";
import AuthPasswordsProvider from "./components/login";
import Comments from "./components/comment";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthPasswordsProvider>
    <UserProvider>
      <Comments>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Comments>
    </UserProvider>
  </AuthPasswordsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
