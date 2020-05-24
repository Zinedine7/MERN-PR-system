import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Cookie from "js-cookie";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/style.css";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/main.css";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/util.css";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.isLogin = this.isLogin.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }

  //Right before anything load the page this is called
  componentDidMount() {
    if (this.isLogin()) {
      //window.location = '/';
      return;
    }

    this.setState({
      email: "",
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/login", user)
      .then((res) => {
        console.log(res.data);
        Cookie.set("token", res.data.token);
        Cookie.set("userId", res.data.userId);
        //Return to the user list
        window.location = "/";
      })
      .catch((err) => {
        Cookie.remove("token");
        Cookie.remove("userId");

        alert("Error: " + err);
        //Return to the user list
        window.location = "/";
      });
  }

  isLogin() {
    if (!Cookie.get("token")) return false;
    else return Cookie.get("token") !== "" && Cookie.get("userId") !== "";
  }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form">
              <span className="login100-form-logo">
                <img className="img" src="img/IUSlogo2.png" />
              </span>

              <span className="login100-form-title p-b-34 p-t-27">Log in</span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Enter ID"
              >
                <input
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="ID"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf207;"
                ></span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span
                  className="focus-input100"
                  data-placeholder="&#xf191;"
                ></span>
              </div>

              <div className="contact100-form-checkbox">
                <input
                  className="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label className="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>

              <div className="container-login100-form-btn">
                <button className="login100-form-btn">Login</button>
              </div>

              <div className="text-center p-t-90">
                <a className="txt1" href="register.html">
                  Don't have an account!? Register!
                </a>
              </div>
            </form>
          </div>
        </div>
        <div id="dropDownSelect1"></div>
      </div>
    );
  }
}
