import React from "react"
import jwt_decode from "jwt-decode"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import setAuthToken from "./utils/setAuthToken"
import { setCurrentUser, logoutUser } from "./Actions/actions"

import HomePage from "./Pages/HomePage"
import LoginPage from "./Pages/login"
import SingupPage from "./Pages/signup"
import InstructorDashboard from "./Pages/Instructor/instructor-dashboard"
import InstructorCourses from "./Pages/Instructor/instructor-courses"
import InstructorEarning from "./Pages/Instructor/instructor-earning"
import InstructorEditCourse from "./Pages/Instructor/instructor-edit-course"
import Quizes from "./Pages/Instructor/quizes"
import EditQuiz from "./Pages/Instructor/editquiz"
import Header from "./Header/header"
import Drawer from "./Drawer/drawer"

import store from "./store"

if (localStorage.token) {
  // set auth token
  setAuthToken(localStorage.token)
  const decoded = jwt_decode(localStorage.token)
  //set user
  store.dispatch(setCurrentUser(decoded))
  //check for expired token
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = "/"
  }
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SingupPage} />

          <Route
            path="/instructor-dashboard"
            exact
            component={InstructorDashboard}
          />
          <Route
            path="/instructor-courses"
            exact
            component={InstructorCourses}
          />
          <Route
            path="/instructor-earning"
            exact
            component={InstructorEarning}
          />
          <Route
            path="/instructor-edit-course"
            exact
            component={InstructorEditCourse}
          />
          <Route path="/quizes" exact component={Quizes} />
          <Route path="/editquiz" exact component={EditQuiz} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
