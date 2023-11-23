import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./components/utils/AuthProvider";
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GoogleOAuthProvider clientId="863614788657-m6edv61lk1adf7hn9f13pss3i9g3790f.apps.googleusercontent.com">
    <AuthProvider>
      <App />
    </AuthProvider>
    </GoogleOAuthProvider>
  </Router>
);
