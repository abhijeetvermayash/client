import React from "react"
import { Link } from "react-router-dom"

class StudentHeader extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div>
        <div
          className="navbar navbar-expand pr-0 navbar-dark navbar-dark-dodger-blue navbar-shadow"
          id="default-navbar"
          data-primary
        >
          <button
            className="navbar-toggler w-auto mr-16pt d-block d-lg-none rounded-0"
            type="button"
            data-toggle="sidebar"
          >
            <span className="material-icons">short_text</span>
          </button>
          <Link
            to="boxed-index.html"
            className="navbar-brand mr-16pt d-lg-none"
          >
            <span className="avatar avatar-sm navbar-brand-icon mr-0 mr-lg-8pt">
              <span className="avatar-title rounded bg-primary">
                <img
                  src="assets/images/illustration/student/128/white.svg"
                  alt="logo"
                  className="img-fluid"
                />
              </span>
            </span>

            <span className="d-none d-lg-block">Luma</span>
          </Link>

          <span className="d-none d-md-flex align-items-center mr-16pt">
            <span className="avatar avatar-sm mr-12pt">
              <span className="avatar-title rounded navbar-avatar">
                <i className="material-icons">opacity</i>
              </span>
            </span>

            <small className="flex d-flex flex-column">
              <strong className="navbar-text-100">Experience IQ</strong>
              <span className="navbar-text-50">2,300 points</span>
            </small>
          </span>

          <form
            className="search-form navbar-search d-none d-md-flex mr-16pt"
            action="boxed-index.html"
          >
            <button className="btn" type="submit">
              <i className="material-icons">search</i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search ..."
              name="searchbar"
            />
          </form>

          <div className="flex"></div>

          <div className="nav navbar-nav flex-nowrap d-flex mr-16pt">
            <div
              className="nav-item dropdown dropdown-notifications dropdown-xs-down-full"
              data-toggle="tooltip"
              data-title="Messages"
              data-placement="bottom"
              data-boundary="window"
            >
              <button
                className="nav-link btn-flush dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-caret="false"
              >
                <i className="material-icons icon-24pt">mail_outline</i>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <div data-perfect-scrollbar className="position-relative">
                  <div className="dropdown-header">
                    <strong>Messages</strong>
                  </div>
                  <div className="list-group list-group-flush mb-0">
                    <Link
                      to=""
                      className="list-group-item list-group-item-action unread"
                    >
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-black-50">5 minutes ago</small>

                        <span className="ml-auto unread-indicator bg-accent"></span>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <img
                            src="assets/images/people/110/woman-5.jpg"
                            alt="people"
                            className="avatar-img rounded-circle"
                          />
                        </span>
                        <span className="flex d-flex flex-column">
                          <strong className="text-black-100">Michelle</strong>
                          <span className="text-black-70">
                            Clients loved the new design.
                          </span>
                        </span>
                      </span>
                    </Link>

                    <Link
                      to=""
                      className="list-group-item list-group-item-action"
                    >
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-black-50">5 minutes ago</small>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <img
                            src="assets/images/people/110/woman-5.jpg"
                            alt="people"
                            className="avatar-img rounded-circle"
                          />
                        </span>
                        <span className="flex d-flex flex-column">
                          <strong className="text-black-100">Michelle</strong>
                          <span className="text-black-70">🔥 Superb job..</span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="nav-item ml-16pt dropdown dropdown-notifications dropdown-xs-down-full"
              data-toggle="tooltip"
              data-title="Notifications"
              data-placement="bottom"
              data-boundary="window"
            >
              <button
                className="nav-link btn-flush dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                data-caret="false"
              >
                <i className="material-icons">notifications_none</i>
                <span className="badge badge-notifications badge-accent">
                  2
                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <div data-perfect-scrollbar className="position-relative">
                  <div className="dropdown-header">
                    <strong>System notifications</strong>
                  </div>
                  <div className="list-group list-group-flush mb-0">
                    <Link
                      to=""
                      className="list-group-item list-group-item-action unread"
                    >
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-black-50">3 minutes ago</small>

                        <span className="ml-auto unread-indicator bg-accent"></span>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <span className="avatar-title rounded-circle bg-light">
                            <i className="material-icons font-size-16pt text-accent">
                              account_circle
                            </i>
                          </span>
                        </span>
                        <span className="flex d-flex flex-column">
                          <span className="text-black-70">
                            Your profile information has not been synced
                            correctly.
                          </span>
                        </span>
                      </span>
                    </Link>

                    <Link
                      to=""
                      className="list-group-item list-group-item-action"
                    >
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-black-50">5 hours ago</small>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <span className="avatar-title rounded-circle bg-light">
                            <i className="material-icons font-size-16pt text-primary">
                              group_add
                            </i>
                          </span>
                        </span>
                        <span className="flex d-flex flex-column">
                          <strong className="text-black-100">Adrian. D</strong>
                          <span className="text-black-70">
                            Wants to join your private group.
                          </span>
                        </span>
                      </span>
                    </Link>

                    <Link
                      to=""
                      className="list-group-item list-group-item-action"
                    >
                      <span className="d-flex align-items-center mb-1">
                        <small className="text-black-50">1 day ago</small>
                      </span>
                      <span className="d-flex">
                        <span className="avatar avatar-xs mr-2">
                          <span className="avatar-title rounded-circle bg-light">
                            <i className="material-icons font-size-16pt text-warning">
                              storage
                            </i>
                          </span>
                        </span>
                        <span className="flex d-flex flex-column">
                          <span className="text-black-70">
                            Your deploy was successful.
                          </span>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-item dropdown">
              <Link
                to="#"
                className="nav-link d-flex align-items-center dropdown-toggle"
                data-toggle="dropdown"
                data-caret="false"
              >
                <span className="avatar avatar-sm mr-8pt2">
                  <span className="avatar-title rounded-circle bg-primary">
                    <i className="material-icons">account_box</i>
                  </span>
                </span>
              </Link>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-header">
                  <strong>Account</strong>
                </div>
                <Link className="dropdown-item" to="boxed-edit-account.html">
                  Edit Account
                </Link>
                <Link className="dropdown-item" to="boxed-billing.html">
                  Billing
                </Link>
                <Link className="dropdown-item" to="boxed-billing-history.html">
                  Payments
                </Link>
                <Link className="dropdown-item" to="boxed-login.html">
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentHeader
