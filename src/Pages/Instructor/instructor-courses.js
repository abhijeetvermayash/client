import React from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/header";
import Drawer from "../../Drawer/drawer";
import InstructorHeader from "../../Header/instructor-header";
import { connect } from "react-redux";
import { FetchInstructorCoursesAction } from "../../Actions/courseActions";
import InsDrawer from "../../Drawer/instructordrawer";

class InstructorCourses extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.FetchInsCourses(); //Action creator FetchInstructorCourses this will fetch courses uploaded by this instructor.
  }
  render() {
    return (
      <div className="layout-boxed">
        <div
          className="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div className="mdk-drawer-layout__content page-content">
            <InstructorHeader />
            <div className="pt-32pt">
              <div className="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                <div className="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
                  <div className="mb-24pt mb-sm-0 mr-sm-24pt">
                    <h2 className="mb-0">Courses</h2>

                    <ol className="breadcrumb p-0 m-0">
                      <li className="breadcrumb-item">
                        <Link to="index.html">Home</Link>
                      </li>

                      <li className="breadcrumb-item active">Courses</li>
                    </ol>
                  </div>
                </div>

                <div className="row" role="tablist">
                  <div className="col-auto">
                    <Link
                      to="/instructor-add-course"
                      className="btn btn-outline-secondary"
                    >
                      Add Course
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid page__container page-section">
              <div className="page-separator">
                <div className="page-separator__text">Development Courses</div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <div
                    className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-overlay-onload-show
                    data-popover-onload-show
                    data-force-reveal
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="/instructor-edit-course"
                      className="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/angular_430x168.png"
                        alt="course"
                      />
                      <span className="overlay__content align-items-start justify-content-start">
                        <span className="overlay__action card-body d-flex align-items-center">
                          <i className="material-icons mr-4pt">edit</i>
                          <span className="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div className="mdk-reveal__content">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title mb-4pt"
                              to="/instructor-edit-course"
                            >
                              Learn Angular fundamentals
                            </Link>
                          </div>
                          <Link
                            to="/instructor-edit-course"
                            className="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div className="d-flex">
                          <div className="rating flex">
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">
                                star_border
                              </span>
                            </span>
                          </div>
                          <small className="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popoverContainer d-none">
                    <div className="media">
                      <div className="media-left mr-12pt">
                        <img
                          src="assets/images/paths/angular_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          className="rounded"
                        />
                      </div>
                      <div className="media-body">
                        <div className="card-title mb-0">
                          Learn Angular fundamentals
                        </div>
                        <p className="lh-1">
                          <span className="text-black-50 small">with</span>
                          <span className="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div className="mb-16pt">
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          className="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-32pt">
                <ul className="pagination justify-content-start pagination-xsm m-0">
                  <li className="page-item disabled">
                    <Link className="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true" className="material-icons">
                        chevron_left
                      </span>
                      <span>Prev</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Page 1">
                      <span>1</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Page 2">
                      <span>2</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                      <span>Next</span>
                      <span aria-hidden="true" className="material-icons">
                        chevron_right
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="page-separator">
                <div className="page-separator__text">Design Courses</div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-4 col-xl-3">
                  <div
                    className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="/instructor-edit-course"
                      className="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/sketch_430x168.png"
                        alt="course"
                      />
                      <span className="overlay__content align-items-start justify-content-start">
                        <span className="overlay__action card-body d-flex align-items-center">
                          <i className="material-icons mr-4pt">edit</i>
                          <span className="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div className="mdk-reveal__content">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title mb-4pt"
                              to="/instructor-edit-course"
                            >
                              Learn Sketch
                            </Link>
                          </div>
                          <Link
                            to="/instructor-edit-course"
                            className="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div className="d-flex">
                          <div className="rating flex">
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">
                                star_border
                              </span>
                            </span>
                          </div>
                          <small className="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popoverContainer d-none">
                    <div className="media">
                      <div className="media-left mr-12pt">
                        <img
                          src="assets/images/paths/sketch_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          className="rounded"
                        />
                      </div>
                      <div className="media-body">
                        <div className="card-title mb-0">Learn Sketch</div>
                        <p className="lh-1">
                          <span className="text-black-50 small">with</span>
                          <span className="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div className="mb-16pt">
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <Link
                          to="/instructor-edit-course"
                          className="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-xl-3">
                  <div
                    className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      className="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/flinto_430x168.png"
                        alt="course"
                      />
                      <span className="overlay__content align-items-start justify-content-start">
                        <span className="overlay__action card-body d-flex align-items-center">
                          <i className="material-icons mr-4pt">edit</i>
                          <span className="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div className="mdk-reveal__content">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title mb-4pt"
                              to="/instructor-edit-course"
                            >
                              Learn Flinto
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            className="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div className="d-flex">
                          <div className="rating flex">
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">
                                star_border
                              </span>
                            </span>
                          </div>
                          <small className="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popoverContainer d-none">
                    <div className="media">
                      <div className="media-left mr-12pt">
                        <img
                          src="assets/images/paths/flinto_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          className="rounded"
                        />
                      </div>
                      <div className="media-body">
                        <div className="card-title mb-0">Learn Flinto</div>
                        <p className="lh-1">
                          <span className="text-black-50 small">with</span>
                          <span className="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div className="mb-16pt">
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          className="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-xl-3">
                  <div
                    className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="/instructor-edit-course"
                      className="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/photoshop_430x168.png"
                        alt="course"
                      />
                      <span className="overlay__content align-items-start justify-content-start">
                        <span className="overlay__action card-body d-flex align-items-center">
                          <i className="material-icons mr-4pt">edit</i>
                          <span className="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div className="mdk-reveal__content">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title mb-4pt"
                              to="/instructor-edit-course"
                            >
                              Learn Photoshop
                            </Link>
                          </div>
                          <Link
                            to="/instructor-edit-course"
                            className="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div className="d-flex">
                          <div className="rating flex">
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">
                                star_border
                              </span>
                            </span>
                          </div>
                          <small className="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popoverContainer d-none">
                    <div className="media">
                      <div className="media-left mr-12pt">
                        <img
                          src="assets/images/paths/photoshop_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          className="rounded"
                        />
                      </div>
                      <div className="media-body">
                        <div className="card-title mb-0">Learn Photoshop</div>
                        <p className="lh-1">
                          <span className="text-black-50 small">with</span>
                          <span className="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div className="mb-16pt">
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          className="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-4 col-xl-3">
                  <div
                    className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      className="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/mailchimp_430x168.png"
                        alt="course"
                      />
                      <span className="overlay__content align-items-start justify-content-start">
                        <span className="overlay__action card-body d-flex align-items-center">
                          <i className="material-icons mr-4pt">edit</i>
                          <span className="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div className="mdk-reveal__content">
                      <div className="card-body">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Newsletter Design
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            className="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div className="d-flex">
                          <div className="rating flex">
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">star</span>
                            </span>
                            <span className="rating__item">
                              <span className="material-icons">
                                star_border
                              </span>
                            </span>
                          </div>
                          <small className="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popoverContainer d-none">
                    <div className="media">
                      <div className="media-left mr-12pt">
                        <img
                          src="assets/images/paths/mailchimp_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          className="rounded"
                        />
                      </div>
                      <div className="media-body">
                        <div className="card-title mb-0">Newsletter Design</div>
                        <p className="lh-1">
                          <span className="text-black-50 small">with</span>
                          <span className="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div className="mb-16pt">
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p className="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div className="row align-items-center">
                      <div className="col-auto">
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center mb-4pt">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p className="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div className="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          className="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul className="pagination justify-content-start pagination-xsm m-0">
                <li className="page-item disabled">
                  <Link className="page-link" to="#" aria-label="Previous">
                    <span aria-hidden="true" className="material-icons">
                      chevron_left
                    </span>
                    <span>Prev</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Page 1">
                    <span>1</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Page 2">
                    <span>2</span>
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="#" aria-label="Next">
                    <span>Next</span>
                    <span aria-hidden="true" className="material-icons">
                      chevron_right
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="js-fix-footer2 bg-white border-top-2">
              <div className="container-fluid page__container page-section d-flex flex-column">
                <p className="text-70 brand mb-24pt">
                  <img
                    className="brand-icon"
                    src="assets/images/logo/black-70@2x.png"
                    width="30"
                    alt="Luma"
                  />{" "}
                  Luma
                </p>
                <p className="measure-lead-max text-50 small mr-8pt">
                  Luma is a beautifully crafted user interface for modern
                  Education Platforms, including Courses & Tutorials, Video
                  Lessons, Student and Teacher Dashboard, Curriculum Management,
                  Earnings and Reporting, ERP, HR, CMS, Tasks, Projects,
                  eCommerce and more.
                </p>
                <p className="mb-8pt d-flex">
                  <Link to="" className="text-70 text-underline mr-8pt small">
                    Terms
                  </Link>
                  <Link to="" className="text-70 text-underline small">
                    Privacy policy
                  </Link>
                </p>
                <p className="text-50 small mt-n1 mb-0">
                  Copyright 2019 &copy; All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <InsDrawer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
};
export default connect(mapStateToProps, {
  FetchInsCourses: FetchInstructorCoursesAction,
})(InstructorCourses);
