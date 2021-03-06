import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { LoginAction } from "../Actions/actions";

class LoginPage extends React.Component {
  state = { email: "", password: "" };
  render() {
    console.log(this.state);
    return (
      <div className="layout-default layout-login-image">
        <div
          className="layout-login-image__overlay"
          style={{
            backgroundImage:
              "url(assets/images/1280_15ntkpxqt54y-sai-kiran-anagani.jpg)",
          }}
        >
          <div className="fullbleed bg-dark" style={{ opacity: ".5" }}></div>
        </div>

        <div
          className="layout-login-image__form bg-white"
          data-perfect-scrollbar
        >
          <div className="d-flex justify-content-center mt-2 mb-5 navbar-light">
            <Link
              to="/"
              className="navbar-brand flex-column mb-2 align-items-center mr-0"
              style={{ minWidth: "0" }}
            >
              <span className="avatar avatar-sm navbar-brand-icon mr-0">
                <span className="avatar-title rounded bg-primary">
                  <img
                    src="assets/images/illustration/student/128/white.svg"
                    alt="logo"
                    className="img-fluid"
                  />
                </span>
              </span>
              Luma
            </Link>
          </div>

          <h4 className="m-0">Welcome back!</h4>
          <p className="mb-5">Login to access your Luma Account </p>

          <form action="fixed-index.html" novalidate>
            <div className="form-group">
              <label className="text-label" for="email_2">
                Email Address:
              </label>
              <div className="input-group input-group-merge">
                <input
                  id="email_2"
                  type="email"
                  required=""
                  className="form-control form-control-prepended"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  placeholder="john@doe.com"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="far fa-envelope"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="text-label" for="password_2">
                Password:
              </label>
              <div className="input-group input-group-merge">
                <input
                  id="password_2"
                  type="password"
                  required=""
                  onChange={(e) => this.setState({ password: e.target.value })}
                  className="form-control form-control-prepended"
                  placeholder="Enter your password"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="fa fa-key"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group mb-5">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  checked=""
                  id="remember"
                />
                <label className="custom-control-label" for="remember">
                  Remember me
                </label>
              </div>
            </div>
            <div className="form-group text-center">
              <button
                className="btn btn-primary mb-5"
                onClick={this.login}
                type="submit"
              >
                Login
              </button>
              <br />
              <Link to="">Forgot password?</Link> <br />
              Don't have an account?{" "}
              <Link className="text-body text-underline" to="/signup">
                Sign up!
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  login = (event) => {
    event.preventDefault();
    const credentials = this.state;
    console.log(credentials);
    this.props.login(credentials);
  };
}
const mapStateToProps = (state) => {
  console.log(12211);
  console.log(state);
  return state;
};

export default connect(mapStateToProps, { login: LoginAction })(LoginPage);
