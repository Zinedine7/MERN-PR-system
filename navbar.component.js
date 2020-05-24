import React, { Component } from "react";
import { Link } from "react-router-dom";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/style.css";
import Logo from "../img/IUSlogo2.png";
import Cookie from "js-cookie";
import axios from "axios";

const btnStyle = {
  margin: "5px",
};

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);

    this.state = {
      isLogin: false,
      buttons: "",
    };
  }

  /*async componentDidMount() {
    /*Check if the user is properly authenticated*/
  /*6if (!Cookie.get("token")) {
      this.setState({
        buttons: (
          <div>
            <Button variant="success" style={btnStyle} href="/login">
              Login
            </Button>
            <Button variant="outline-success" style={btnStyle} href="/signup">
              Sign up
            </Button>
          </div>
        ),
      });
      return;
    }*/

  /*const response = await fetch(
      "http://localhost:5000/users/auth?token=" +
        Cookie.get("token") +
        "&userId=" +
        Cookie.get("userId")
    );*/

  /* if (response.status === 200)
      this.setState({
        buttons: (
          <Button variant="success" style={btnStyle} onClick={this.logout}>
            logout
          </Button>
        ),
      });
    else {
      this.setState({
        buttons: (
          <div>
            <Button variant="success" style={btnStyle} href="/login">
              Login
            </Button>
            <Button variant="outline-success" style={btnStyle} href="/signup">
              Sign up
            </Button>
          </div>
        ),
      });
    }
  }*/

  logout() {
    axios
      .get(
        "http://localhost:5000/users/logout?token=" +
          Cookie.get("token") +
          "&userId=" +
          Cookie.get("userId")
      )
      .then((res) => {
        Cookie.remove("token");
        Cookie.remove("userId");
        window.location = "/";
      })
      .catch((err) => {
        /*alert("Error: " + err);*/ //Very strange beacause we considere it has an error but it is not...
        Cookie.remove("token");
        Cookie.remove("userId");
        window.location = "/";
      });
  }

  render() {
    return (
      <nav className="navigation">
        <div className="logo">
          <img className="ius" src={Logo} />
          <span className="user">Adem Dugalić</span>
        </div>
        <div className="upButtons">
          <div className="links">
            <Link id="home" href="index.html">
              <span data-hover="Home">Home</span>
            </Link>
            <Link id="MyCourses" href="myCourses.html">
              <span data-hover="MyCourses">My courses</span>
            </Link>
            <Link id="AddCourses" to="/Courses">
              <span data-hover="AddCourses">Add courses</span>
            </Link>
            <Link id="Schedule" href="schedule.html">
              <span data-hover="Schedule">Schedule</span>
            </Link>
          </div>
        </div>
        <div className="downButtons">
          <div className="links">
            <Link id="LogOut" href="#">
              <span data-hover="LogOut">Log Out</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
