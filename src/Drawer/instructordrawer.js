import React from "react";
import { Link } from "react-router-dom";

class InsDrawer extends React.Component {
  render() {
    return (
      <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
        <div className="mdk-drawer__content">
          <div
            className="sidebar sidebar-light sidebar-light-dodger-blue sidebar-left"
            data-perfect-scrollbar
          >
            <Link
              to="/"
              className="sidebar-brand sidebar-brand-dark bg-primary-pickled-bluewood"
            >
              <span className="avatar avatar-xl sidebar-brand-icon h-auto">
                <span className="avatar-title rounded bg-primary">
                  <img
                    src="assets/images/illustration/student/128/white.svg"
                    className="img-fluid"
                    alt="logo"
                  />
                </span>
              </span>

              <span>Luma</span>
            </Link>
            <div className="sidebar-heading">Instructor</div>
            <ul className="sidebar-menu">
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="/instructor-add-course"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    school
                  </span>
                  <span className="sidebar-menu-text">Add Course</span>
                </Link>
                <Link
                  className="sidebar-menu-button"
                  to="boxed-instructor-dashboard.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    school
                  </span>
                  <span className="sidebar-menu-text">
                    Instructor Dashboard
                  </span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-instructor-courses.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    import_contacts
                  </span>
                  <span className="sidebar-menu-text">Manage Courses</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-instructor-quizzes.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    help
                  </span>
                  <span className="sidebar-menu-text">Manage Quizzes</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-instructor-earnings.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    trending_up
                  </span>
                  <span className="sidebar-menu-text">Earnings</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-instructor-statement.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    receipt
                  </span>
                  <span className="sidebar-menu-text">Statement</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-instructor-edit-course.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    post_add
                  </span>
                  <span className="sidebar-menu-text">Edit Course</span>
                </Link>
              </li>
              <li className="sidebar-menu-item">
                <Link
                  className="sidebar-menu-button"
                  to="boxed-instructor-edit-quiz.html"
                >
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    format_shapes
                  </span>
                  <span className="sidebar-menu-text">Edit Quiz</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default InsDrawer;
