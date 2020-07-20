import React from "react";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
      <div className="mdk-drawer__content">
        <div
          className="sidebar sidebar-light sidebar-light-dodger-blue sidebar-left"
          data-perfect-scrollbar
        >
          <Link
            to="boxed-index.html"
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

          <div className="sidebar-heading">Student</div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item active">
              <Link className="sidebar-menu-button" to="boxed-index.html">
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  home
                </span>
                <span className="sidebar-menu-text">Home</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link className="sidebar-menu-button" to="boxed-courses.html">
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  local_library
                </span>
                <span className="sidebar-menu-text">Browse Courses</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link className="sidebar-menu-button" to="boxed-paths.html">
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  style
                </span>
                <span className="sidebar-menu-text">Browse Paths</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-dashboard.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  account_box
                </span>
                <span className="sidebar-menu-text">Student Dashboard</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-my-courses.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  search
                </span>
                <span className="sidebar-menu-text">My Courses</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-paths.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  timeline
                </span>
                <span className="sidebar-menu-text">My Paths</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-path.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  change_history
                </span>
                <span className="sidebar-menu-text">Path Details</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-course.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  face
                </span>
                <span className="sidebar-menu-text">Course Preview</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-lesson.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  panorama_fish_eye
                </span>
                <span className="sidebar-menu-text">Lesson Preview</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-take-course.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  class
                </span>
                <span className="sidebar-menu-text">Take Course</span>
                <span className="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">
                  PRO
                </span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-take-lesson.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  import_contacts
                </span>
                <span className="sidebar-menu-text">Take Lesson</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-take-quiz.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  dvr
                </span>
                <span className="sidebar-menu-text">Take Quiz</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-quiz-results.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  poll
                </span>
                <span className="sidebar-menu-text">My Quizzes</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-quiz-result-details.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  live_help
                </span>
                <span className="sidebar-menu-text">Quiz Result</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-path-assessment.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  layers
                </span>
                <span className="sidebar-menu-text">Skill Assessment</span>
              </Link>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-student-path-assessment-result.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  assignment_turned_in
                </span>
                <span className="sidebar-menu-text">Skill Result</span>
              </Link>
            </li>
          </ul>
          <div className="sidebar-heading">Instructor</div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                to="boxed-instructor-dashboard.html"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  school
                </span>
                <span className="sidebar-menu-text">Instructor Dashboard</span>
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

          <div className="sidebar-heading">Applications</div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button js-sidebar-collapse"
                data-toggle="collapse"
                to="#enterprise_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  donut_large
                </span>
                Enterprise
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="enterprise_menu"
              >
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-erp-dashboard.html"
                  >
                    <span className="sidebar-menu-text">ERP Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-crm-dashboard.html"
                  >
                    <span className="sidebar-menu-text">CRM Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-hr-dashboard.html"
                  >
                    <span className="sidebar-menu-text">HR Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-employees.html"
                  >
                    <span className="sidebar-menu-text">Employees</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-staff.html">
                    <span className="sidebar-menu-text">Staff</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-leaves.html">
                    <span className="sidebar-menu-text">Leaves</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button disabled"
                    to="boxed-departments.html"
                  >
                    <span className="sidebar-menu-text">Departments</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#productivity_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  access_time
                </span>
                Productivity
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="productivity_menu"
              >
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-projects.html"
                  >
                    <span className="sidebar-menu-text">Projects</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-tasks-board.html"
                  >
                    <span className="sidebar-menu-text">Tasks Board</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-tasks-list.html"
                  >
                    <span className="sidebar-menu-text">Tasks List</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button disabled"
                    to="boxed-kanban.html"
                  >
                    <span className="sidebar-menu-text">Kanban</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#ecommerce_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  shopping_cart
                </span>
                eCommerce
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="ecommerce_menu"
              >
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ecommerce.html"
                  >
                    <span className="sidebar-menu-text">Shop Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button disabled"
                    to="boxed-edit-product.html"
                  >
                    <span className="sidebar-menu-text">Edit Product</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#messaging_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  message
                </span>
                Messaging
                <span className="sidebar-menu-badge badge badge-accent badge-notifications ml-auto">
                  2
                </span>
                <span className="sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="messaging_menu"
              >
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-messages.html"
                  >
                    <span className="sidebar-menu-text">Messages</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-email.html">
                    <span className="sidebar-menu-text">Email</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#cms_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  content_copy
                </span>
                CMS
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul className="sidebar-submenu collapse sm-indent" id="cms_menu">
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-cms-dashboard.html"
                  >
                    <span className="sidebar-menu-text">CMS Dashboard</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-posts.html">
                    <span className="sidebar-menu-text">Posts</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#account_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  account_box
                </span>
                Account
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="account_menu"
              >
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-pricing.html">
                    <span className="sidebar-menu-text">Pricing</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-login.html">
                    <span className="sidebar-menu-text">Login</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-signup.html">
                    <span className="sidebar-menu-text">Signup</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-signup-payment.html"
                  >
                    <span className="sidebar-menu-text">Payment</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-reset-password.html"
                  >
                    <span className="sidebar-menu-text">Reset Password</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-change-password.html"
                  >
                    <span className="sidebar-menu-text">Change Password</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-edit-account.html"
                  >
                    <span className="sidebar-menu-text">Edit Account</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-edit-account-profile.html"
                  >
                    <span className="sidebar-menu-text">
                      Profile &amp; Privacy
                    </span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-edit-account-notifications.html"
                  >
                    <span className="sidebar-menu-text">
                      Email Notifications
                    </span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-edit-account-password.html"
                  >
                    <span className="sidebar-menu-text">Account Password</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-billing.html">
                    <span className="sidebar-menu-text">Subscription</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-billing-upgrade.html"
                  >
                    <span className="sidebar-menu-text">Upgrade Account</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-billing-payment.html"
                  >
                    <span className="sidebar-menu-text">
                      Payment Information
                    </span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-billing-history.html"
                  >
                    <span className="sidebar-menu-text">Payment History</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-billing-invoice.html"
                  >
                    <span className="sidebar-menu-text">Invoice</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#community_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  people_outline
                </span>
                Community
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="community_menu"
              >
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-teachers.html"
                  >
                    <span className="sidebar-menu-text">Browse Teachers</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-student-profile.html"
                  >
                    <span className="sidebar-menu-text">Student Profile</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-teacher-profile.html"
                  >
                    <span className="sidebar-menu-text">Teacher Profile</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-blog.html">
                    <span className="sidebar-menu-text">Blog</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-blog-post.html"
                  >
                    <span className="sidebar-menu-text">Blog Post</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-faq.html">
                    <span className="sidebar-menu-text">FAQ</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-help-center.html"
                  >
                    <span className="sidebar-menu-text">Help Center</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-discussions.html"
                  >
                    <span className="sidebar-menu-text">Discussions</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-discussion.html"
                  >
                    <span className="sidebar-menu-text">
                      Discussion Details
                    </span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-discussions-ask.html"
                  >
                    <span className="sidebar-menu-text">Ask Question</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <div className="sidebar-heading">UI</div>
          <ul className="sidebar-menu">
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#components_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  tune
                </span>
                Components
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="components_menu"
              >
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-buttons.html"
                  >
                    <span className="sidebar-menu-text">Buttons</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-avatars.html"
                  >
                    <span className="sidebar-menu-text">Avatars</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-forms.html"
                  >
                    <span className="sidebar-menu-text">Forms</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-loaders.html"
                  >
                    <span className="sidebar-menu-text">Loaders</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-tables.html"
                  >
                    <span className="sidebar-menu-text">Tables</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-cards.html"
                  >
                    <span className="sidebar-menu-text">Cards</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-icons.html"
                  >
                    <span className="sidebar-menu-text">Icons</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="boxed-ui-tabs.html">
                    <span className="sidebar-menu-text">Tabs</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-alerts.html"
                  >
                    <span className="sidebar-menu-text">Alerts</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-badges.html"
                  >
                    <span className="sidebar-menu-text">Badges</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-progress.html"
                  >
                    <span className="sidebar-menu-text">Progress</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-pagination.html"
                  >
                    <span className="sidebar-menu-text">Pagination</span>
                  </Link>
                </li>

                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button disabled" to="">
                    <span className="sidebar-menu-text">Disabled</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#plugins_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  folder
                </span>
                Plugins
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="plugins_menu"
              >
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-charts.html"
                  >
                    <span className="sidebar-menu-text">Charts</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-flatpickr.html"
                  >
                    <span className="sidebar-menu-text">Flatpickr</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-daterangepicker.html"
                  >
                    <span className="sidebar-menu-text">Date Range Picker</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-dragula.html"
                  >
                    <span className="sidebar-menu-text">Dragula</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-dropzone.html"
                  >
                    <span className="sidebar-menu-text">Dropzone</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-range-sliders.html"
                  >
                    <span className="sidebar-menu-text">Range Sliders</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-quill.html"
                  >
                    <span className="sidebar-menu-text">Quill</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-select2.html"
                  >
                    <span className="sidebar-menu-text">Select2</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-nestable.html"
                  >
                    <span className="sidebar-menu-text">Nestable</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-fancytree.html"
                  >
                    <span className="sidebar-menu-text">Fancy Tree</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-maps-vector.html"
                  >
                    <span className="sidebar-menu-text">Vector Maps</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-sweet-alert.html"
                  >
                    <span className="sidebar-menu-text">Sweet Alert</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="boxed-ui-plugin-toastr.html"
                  >
                    <span className="sidebar-menu-text">Toastr</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button disabled" to="">
                    <span className="sidebar-menu-text">Disabled</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-menu-item">
              <Link
                className="sidebar-menu-button"
                data-toggle="collapse"
                to="#layouts_menu"
              >
                <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                  view_compact
                </span>
                Layouts
                <span className="ml-auto sidebar-menu-toggle-icon"></span>
              </Link>
              <ul
                className="sidebar-submenu collapse sm-indent"
                id="layouts_menu"
              >
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="compact-index.html">
                    <span className="sidebar-menu-text">Compact</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="mini-index.html">
                    <span className="sidebar-menu-text">Mini</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link
                    className="sidebar-menu-button"
                    to="mini-secondary-index.html"
                  >
                    <span className="sidebar-menu-text">Mini + Secondary</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="index.html">
                    <span className="sidebar-menu-text">App</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item active">
                  <Link className="sidebar-menu-button" to="boxed-index.html">
                    <span className="sidebar-menu-text">Boxed</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="sticky-index.html">
                    <span className="sidebar-menu-text">Sticky</span>
                  </Link>
                </li>
                <li className="sidebar-menu-item">
                  <Link className="sidebar-menu-button" to="fixed-index.html">
                    <span className="sidebar-menu-text">Fixed</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Drawer;
