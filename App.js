import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/style.css";

import Navigation from "./components/navbar.component";
import Login from "./components/Login.component";
import SignUp from "./components/SignUp.component";
import Courses from "./components/Courses.component";
import UserCourses from "./components/UserCourses.component";

const containerStyle = {
  maxWidth: "100%",
  paddingLeft: "0px",
  paddingRight: "0px",
};

function App() {
  return (
    <Router>
      <div className="outerWrapper">
        <div className="wrapper">
          <Navigation />
          <Route path="/Signup" component={SignUp} />
          <Route path="/Courses" component={Courses} />
          <Route path="/UserCourses" component={UserCourses} />
        </div>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
