import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/login";
import SingupPage from "./Pages/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SingupPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
