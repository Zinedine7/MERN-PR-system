import React, {Component} from "react";
import axios from 'axios';
import {Card} from "react-bootstrap";

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSurname = this.onChangeSurname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRePassword = this.onChangeRePassword.bind(this);
        this.onChangeFaculty = this.onChangeFaculty.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            surname: '',
            password: '',
            repassword: '',
            faculty:'',
            email: ''
        };

    }

    //Right before anything load the page this is called
    componentDidMount() {

    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeSurname(e) {
        this.setState({
            surname: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }


    onChangeFaculty(e) {
        this.setState({
            faculty: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeRePassword(e) {
        this.setState({
            repassword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        if(this.state.repassword !== this.state.password)
        {
            alert("Error");
            window.location = '/signup';
            return;
        }

        const user = {
            name: this.state.name,
            surname: this.state.surname,
            password: this.state.password,
            faculty: this.state.faculty,
            email: this.state.email
        };

        console.log(user);

        axios.post('http://localhost:5000/users/signup', user)
            .then(res => {
                console.log("Success");
                window.location = '/login';
            })
            .catch((err) => alert("Error: " + err));

    }


    render() {
        return (
            <div class="outerWrapper">
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <form class="login100-form validate-form">
              <span class="login100-form-logo">
                <img class="img" src="img/IUSlogo2.png" />
              </span>

              <span class="login100-form-title p-b-34 p-t-27">
                Register
              </span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Enter ID"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  placeholder="ID"
                />
                <span class="focus-input100" data-placeholder="&#xf207;"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Enter password"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Confirm password"
              >
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="Confirm password"
                />
                <span class="focus-input100" data-placeholder="&#xf191;"></span>
              </div>

              <div class="contact100-form-checkbox">
                <input
                  class="input-checkbox100"
                  id="ckb1"
                  type="checkbox"
                  name="remember-me"
                />
                <label class="label-checkbox100" for="ckb1">
                  Remember me
                </label>
              </div>

              <div class="container-login100-form-btn">
                <button class="login100-form-btn">
                  Login
                </button>
              </div>

              <div class="text-center p-t-90">
                <a class="txt1" href="index.html">
                  Have an account!? Log in now!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    

        )} }
