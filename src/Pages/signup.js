import React from "react"
import { connect } from "react-redux"

import { Link, withRouter } from "react-router-dom"
import { SingupAction } from "../Actions/actions"

class SignupPage extends React.Component {
  constructor() {
    super()
    this.state = { username: "", email: "", password: "" }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    if (this.props.Credentials.isAuthenticated) {
      this.props.history.push("/")
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    this.props.SingupAction(newUser, this.props.history)
  }

  render() {
    return (
      <div className="layout-default layout-login-image">
        <div
          className="layout-login-image__overlay"
          style={{
            backgroundImage:
              "url(assets/images/photodune-4161018-group-of-students-m.jpg)"
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

          <h4 className="m-0">Sign up!</h4>
          <p className="mb-5">Create an account with Luma</p>

          <form onSubmit={this.onSubmit} noValidate>
            <div className="form-group">
              <label className="text-label">Name:</label>
              <div className="input-group input-group-merge">
                <input
                  id="name_2"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  className="form-control form-control-prepended"
                  placeholder="John Doe"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="far fa-user"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="text-label">Email Address:</label>
              <div className="input-group input-group-merge">
                <input
                  id="email_2"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  className="form-control form-control-prepended"
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
              <label className="text-label">Password:</label>
              <div className="input-group input-group-merge">
                <input
                  id="password_2"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  className="form-control form-control-prepended"
                  placeholder="Enter your password"
                />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="far fa-key"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group text-center">
              <button className="btn btn-primary mb-2" type="submit">
                Create Account
              </button>
              <br />
              <Link className="text-body text-underline" to="/login">
                Have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  Credentials: state.Credentials
})

export default connect(mapStateToProps, { SingupAction })(
  withRouter(SignupPage)
)
