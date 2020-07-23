import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../Actions/actions";

class Header extends React.Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.Credentials;

    const authLinks = (
      <ul className="nav navbar-nav ml-auto mr-0">
        <li className="nav-item">
          <Link
            to="#"
            className="btn btn-outline-white"
            onClick={this.onLogoutClick.bind(this)}
          >
            Logout
          </Link>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav ml-auto mr-0">
        <li className="nav-item">
          <Link
            to="/login"
            className="nav-link"
            data-toggle="tooltip"
            data-title="Login"
            data-placement="bottom"
            data-boundary="window"
          >
            <i className="material-icons">lock_open</i>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="btn btn-outline-white">
            Get Started
          </Link>
        </li>
      </ul>
    );

    return (
      <div
        className="navbar navbar-expand navbar-dark navbar-dark-dodger-blue navbar-shadow"
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
          to="/login"
          onClick={() => window.location.reload()}
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

        <ul className="nav navbar-nav d-none d-sm-flex flex justify-content-start ml-8pt">
          <li className="nav-item active">
            <Link to="boxed-index.html" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-caret="false"
            >
              Courses
            </Link>
            <div className="dropdown-menu">
              <Link to="/courses" className="dropdown-item">
                Browse Courses
              </Link>
              <Link to="boxed-student-course.html" className="dropdown-item">
                Preview Course
              </Link>
              <Link to="boxed-student-lesson.html" className="dropdown-item">
                Preview Lesson
              </Link>
              <Link
                to="boxed-student-take-course.html"
                className="dropdown-item"
              >
                <span className="mr-16pt">Take Course</span>{" "}
                <span className="badge badge-notifications badge-accent text-uppercase ml-auto">
                  Pro
                </span>
              </Link>
              <Link
                to="boxed-student-take-lesson.html"
                className="dropdown-item"
              >
                Take Lesson
              </Link>
              <Link to="boxed-student-take-quiz.html" className="dropdown-item">
                Take Quiz
              </Link>
              <Link
                to="boxed-student-quiz-result-details.html"
                className="dropdown-item"
              >
                Quiz Result
              </Link>
              <Link to="boxed-student-dashboard.html" className="dropdown-item">
                Student Dashboard
              </Link>
              <Link
                to="boxed-student-my-courses.html"
                className="dropdown-item"
              >
                My Courses
              </Link>
              <Link
                to="boxed-student-quiz-results.html"
                className="dropdown-item"
              >
                My Quizzes
              </Link>
              <Link to="boxed-help-center.html" className="dropdown-item">
                Help Center
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-caret="false"
            >
              Paths
            </Link>
            <div className="dropdown-menu">
              <Link to="boxed-paths.html" className="dropdown-item">
                Browse Paths
              </Link>
              <Link to="boxed-student-path.html" className="dropdown-item">
                Path Details
              </Link>
              <Link
                to="boxed-student-path-assessment.html"
                className="dropdown-item"
              >
                Skill Assessment
              </Link>
              <Link
                to="boxed-student-path-assessment-result.html"
                className="dropdown-item"
              >
                Skill Result
              </Link>
              <Link to="boxed-student-paths.html" className="dropdown-item">
                My Paths
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link to="boxed-pricing.html" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-caret="false"
            >
              Teachers
            </Link>
            <div className="dropdown-menu">
              <Link to="/instructor-dashboard" className="dropdown-item">
                Instructor Dashboard
              </Link>
              <Link
                to="boxed-instructor-courses.html"
                className="dropdown-item"
              >
                Manage Courses
              </Link>
              <Link
                to="boxed-instructor-quizzes.html"
                className="dropdown-item"
              >
                Manage Quizzes
              </Link>
              <Link
                to="boxed-instructor-earnings.html"
                className="dropdown-item"
              >
                Earnings
              </Link>
              <Link
                to="boxed-instructor-statement.html"
                className="dropdown-item"
              >
                Statement
              </Link>
              <Link
                to="boxed-instructor-edit-course.html"
                className="dropdown-item"
              >
                Edit Course
              </Link>
              <Link
                to="boxed-instructor-edit-quiz.html"
                className="dropdown-item"
              >
                Edit Quiz
              </Link>
            </div>
          </li>
          <li
            className="nav-item dropdown"
            data-toggle="tooltip"
            data-title="Community"
            data-placement="bottom"
            data-boundary="window"
          >
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              data-caret="false"
            >
              <i className="material-icons">people_outline</i>
            </Link>
            <div className="dropdown-menu">
              <Link to="boxed-teachers.html" className="dropdown-item">
                Browse Teachers
              </Link>
              <Link to="boxed-student-profile.html" className="dropdown-item">
                Student Profile
              </Link>
              <Link to="boxed-teacher-profile.html" className="dropdown-item">
                Instructor Profile
              </Link>
              <Link to="boxed-blog.html" className="dropdown-item">
                Blog
              </Link>
              <Link to="boxed-blog-post.html" className="dropdown-item">
                Blog Post
              </Link>
              <Link to="boxed-faq.html" className="dropdown-item">
                FAQ
              </Link>
              <Link to="boxed-help-center.html" className="dropdown-item">
                Help Center
              </Link>
              <Link to="boxed-discussions.html" className="dropdown-item">
                Discussions
              </Link>
              <Link to="boxed-discussion.html" className="dropdown-item">
                Discussion Details
              </Link>
              <Link to="boxed-discussions-ask.html" className="dropdown-item">
                Ask Question
              </Link>
            </div>
          </li>
        </ul>

        <form
          className="search-form navbar-search d-none d-lg-flex mr-16pt"
          action="boxed-index.html"
          style={{ maxWidth: "230px" }}
        >
          <button className="btn" type="submit">
            <i className="material-icons">search</i>
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search ..."
          />
        </form>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  Credentials: state.Credentials,
});
export default connect(mapStateToProps, { logoutUser })(Header);
