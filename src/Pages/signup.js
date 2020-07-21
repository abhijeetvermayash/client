import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { SingupAction } from "../Actions/actions";

class SignupPage extends React.Component {
  state = { name: "", email: "", password: "" };
  render() {
    return (
      <div className="layout-default layout-login-image">
        <div
          className="layout-login-image__overlay"
          style={{
            backgroundImage:
              "url(assets/images/photodune-4161018-group-of-students-m.jpg)",
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

          <h4 class="m-0">Sign up!</h4>
          <p class="mb-5">Create an account with Luma</p>

          <form action="fixed-index.html" novalidate>
            <div class="form-group">
              <label class="text-label" for="name_2">
                Name:
              </label>
              <div class="input-group input-group-merge">
                <input
                  id="name_2"
                  type="text"
                  required=""
                  onChange={(e) => this.setState({ name: e.target.value })}
                  class="form-control form-control-prepended"
                  placeholder="John Doe"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <span class="far fa-user"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="text-label" for="email_2">
                Email Address:
              </label>
              <div class="input-group input-group-merge">
                <input
                  id="email_2"
                  type="email"
                  required=""
                  onChange={(e) => this.setState({ email: e.target.value })}
                  class="form-control form-control-prepended"
                  placeholder="john@doe.com"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <span class="far fa-envelope"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="text-label" for="password_2">
                Password:
              </label>
              <div class="input-group input-group-merge">
                <input
                  id="password_2"
                  type="password"
                  required=""
                  onChange={(e) => this.setState({ password: e.target.value })}
                  class="form-control form-control-prepended"
                  placeholder="Enter your password"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <span class="far fa-key"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group mb-5">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  checked=""
                  class="custom-control-input"
                  id="terms"
                />
                <label class="custom-control-label" for="terms">
                  I accept <Link to="#">Terms and Conditions</Link>
                </label>
              </div>
            </div>
            <div class="form-group text-center">
              <button
                class="btn btn-primary mb-2"
                onClick={this.Signup}
                type="submit"
              >
                Create Account
              </button>
              <br />
              <Link class="text-body text-underline" to="/login">
                Have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
  Signup = (event) => {
    event.preventDefault();
    const credentials = this.state;
    console.log(credentials);
    this.props.signup(credentials);
  };
}
const mapStateToProps = (state) => {
  console.log(state);
  return state;
};
export default connect(mapStateToProps, { signup: SingupAction })(SignupPage);
