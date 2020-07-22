import React from "react";
import Header from "../Header/header";
import Drawer from "../Drawer/drawer";
import { Link } from "react-router-dom";
import { FetchCourseAction } from "../Actions/actions";
import { connect } from "react-redux";

class Courses extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.courses(); //this.props.course() is key for action creator FetchCourseAction and it will fetch all the courses.
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
            <Header />

            <div className="page-section">
              <div className="container-fluid page__container">
                <div
                  className="d-flex flex-column flex-sm-row align-items-sm-center mb-24pt"
                  style={{ whiteSpace: "nowrap" }}
                >
                  <small className="flex text-muted text-headings text-uppercase mr-3 mb-2 mb-sm-0">
                    Displaying 4 out of 10 courses
                  </small>
                  <div className="w-auto ml-sm-auto table d-flex align-items-center mb-2 mb-sm-0">
                    <small className="text-muted text-headings text-uppercase mr-3 d-none d-sm-block">
                      Sort by
                    </small>

                    <Link
                      to="#"
                      className="sort desc small text-headings text-uppercase"
                    >
                      Newest
                    </Link>

                    <Link
                      to="#"
                      className="sort small text-headings text-uppercase ml-2"
                    >
                      Popularity
                    </Link>
                  </div>

                  <Link
                    to="#"
                    data-target="#library-drawer"
                    data-toggle="sidebar"
                    className="btn btn-sm btn-white ml-sm-16pt"
                  >
                    <i className="material-icons icon--left">tune</i> Filters
                  </Link>
                </div>

                <div className="page-separator">
                  <div className="page-separator__text">Popular Courses</div>
                </div>

                <div className="row card-group-row">
                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
                      data-overlay-onload-show
                      data-popover-onload-show
                      data-force-reveal
                      data-partial-height="44"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link to="#" className="js-image" data-position="">
                        <img
                          src="assets/images/paths/mailchimp_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content align-items-start justify-content-start">
                          <span className="overlay__action card-body d-flex align-items-center">
                            <i className="material-icons mr-4pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="mdk-reveal__content">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex">
                              <Link
                                className="card-title"
                                to="boxed-student-course.html"
                              >
                                Newsletter Design
                              </Link>
                              <small className="text-50 font-weight-bold mb-4pt">
                                Elijah Murray
                              </small>
                            </div>
                            <Link
                              to="boxed-student-course.html"
                              data-toggle="tooltip"
                              data-title="Remove Favorite"
                              data-placement="top"
                              data-boundary="window"
                              className="ml-4pt material-icons text-20 card-course__icon-favorite"
                            >
                              favorite
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
                            <small className="text-50">6 hours</small>
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
                          <div className="card-title mb-0">
                            Newsletter Design
                          </div>
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay mdk-reveal js-mdk-reveal card-group-row__card"
                      data-partial-height="44"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link
                        to="boxed-student-course.html"
                        className="js-image"
                        data-position=""
                      >
                        <img
                          src="assets/images/paths/xd_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content align-items-start justify-content-start">
                          <span className="overlay__action card-body d-flex align-items-center">
                            <i className="material-icons mr-4pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="mdk-reveal__content">
                        <div className="card-body">
                          <div className="d-flex">
                            <div className="flex">
                              <Link
                                className="card-title"
                                to="boxed-student-course.html"
                              >
                                inVision App
                              </Link>
                              <small className="text-50 font-weight-bold mb-4pt">
                                Elijah Murray
                              </small>
                            </div>
                            <Link
                              to="boxed-student-course.html"
                              data-toggle="tooltip"
                              data-title="Add Favorite"
                              data-placement="top"
                              data-boundary="window"
                              className="ml-4pt material-icons text-20 card-course__icon-favorite"
                            >
                              favorite_border
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
                            <small className="text-50">6 hours</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="popoverContainer d-none">
                      <div className="media">
                        <div className="media-left mr-12pt">
                          <img
                            src="assets/images/paths/invision_40x40@2x.png"
                            width="40"
                            height="40"
                            alt="Angular"
                            className="rounded"
                          />
                        </div>
                        <div className="media-body">
                          <div className="card-title mb-0">inVision App</div>
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="page-separator">
                  <div className="page-separator__text">
                    Development Courses
                  </div>
                </div>

                <div className="row card-group-row">
                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link
                        to="boxed-student-course.html"
                        className="card-img-top js-image"
                        data-position=""
                        data-height="140"
                      >
                        <img
                          src="assets/images/paths/angular_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content">
                          <span className="overlay__action d-flex flex-column text-center">
                            <i className="material-icons icon-32pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="card-body flex">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title"
                              to="boxed-student-course.html"
                            >
                              Learn Angular fundamentals
                            </Link>
                            <small className="text-50 font-weight-bold mb-4pt">
                              Elijah Murray
                            </small>
                          </div>
                          <Link
                            to="boxed-student-course.html"
                            data-toggle="tooltip"
                            data-title="Add Favorite"
                            data-placement="top"
                            data-boundary="window"
                            className="ml-4pt material-icons text-20 card-course__icon-favorite"
                          >
                            favorite_border
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
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              access_time
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>6 hours</small>
                            </p>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              play_circle_outline
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>12 lessons</small>
                            </p>
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
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link
                        to="boxed-student-course.html"
                        className="card-img-top js-image"
                        data-position=""
                        data-height="140"
                      >
                        <img
                          src="assets/images/paths/swift_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content">
                          <span className="overlay__action d-flex flex-column text-center">
                            <i className="material-icons icon-32pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="card-body flex">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title"
                              to="boxed-student-course.html"
                            >
                              Build an iOS Application in Swift
                            </Link>
                            <small className="text-50 font-weight-bold mb-4pt">
                              Elijah Murray
                            </small>
                          </div>
                          <Link
                            to="boxed-student-course.html"
                            data-toggle="tooltip"
                            data-title="Add Favorite"
                            data-placement="top"
                            data-boundary="window"
                            className="ml-4pt material-icons text-20 card-course__icon-favorite"
                          >
                            favorite_border
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
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              access_time
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>6 hours</small>
                            </p>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              play_circle_outline
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>12 lessons</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="popoverContainer d-none">
                      <div className="media">
                        <div className="media-left mr-12pt">
                          <img
                            src="assets/images/paths/swift_40x40@2x.png"
                            width="40"
                            height="40"
                            alt="Angular"
                            className="rounded"
                          />
                        </div>
                        <div className="media-body">
                          <div className="card-title mb-0">
                            Build an iOS Application in Swift
                          </div>
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
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

                <div className="row card-group-row">
                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link
                        to="boxed-student-course.html"
                        className="card-img-top js-image"
                        data-position=""
                        data-height="140"
                      >
                        <img
                          src="assets/images/paths/sketch_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content">
                          <span className="overlay__action d-flex flex-column text-center">
                            <i className="material-icons icon-32pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="card-body flex">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title"
                              to="boxed-student-course.html"
                            >
                              Learn Sketch
                            </Link>
                            <small className="text-50 font-weight-bold mb-4pt">
                              Elijah Murray
                            </small>
                          </div>
                          <Link
                            to="boxed-student-course.html"
                            data-toggle="tooltip"
                            data-title="Add Favorite"
                            data-placement="top"
                            data-boundary="window"
                            className="ml-4pt material-icons text-20 card-course__icon-favorite"
                          >
                            favorite_border
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
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              access_time
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>6 hours</small>
                            </p>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              play_circle_outline
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>12 lessons</small>
                            </p>
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
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link
                        to="boxed-student-course.html"
                        className="card-img-top js-image"
                        data-position=""
                        data-height="140"
                      >
                        <img
                          src="assets/images/paths/flinto_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content">
                          <span className="overlay__action d-flex flex-column text-center">
                            <i className="material-icons icon-32pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="card-body flex">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title"
                              to="boxed-student-course.html"
                            >
                              Learn Flinto
                            </Link>
                            <small className="text-50 font-weight-bold mb-4pt">
                              Elijah Murray
                            </small>
                          </div>
                          <Link
                            to="boxed-student-course.html"
                            data-toggle="tooltip"
                            data-title="Add Favorite"
                            data-placement="top"
                            data-boundary="window"
                            className="ml-4pt material-icons text-20 card-course__icon-favorite"
                          >
                            favorite_border
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
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              access_time
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>6 hours</small>
                            </p>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              play_circle_outline
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>12 lessons</small>
                            </p>
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
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link
                        to="boxed-student-course.html"
                        className="card-img-top js-image"
                        data-position=""
                        data-height="140"
                      >
                        <img
                          src="assets/images/paths/photoshop_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content">
                          <span className="overlay__action d-flex flex-column text-center">
                            <i className="material-icons icon-32pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="card-body flex">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title"
                              to="boxed-student-course.html"
                            >
                              Learn Photoshop
                            </Link>
                            <small className="text-50 font-weight-bold mb-4pt">
                              Elijah Murray
                            </small>
                          </div>
                          <Link
                            to="boxed-student-course.html"
                            data-toggle="tooltip"
                            data-title="Add Favorite"
                            data-placement="top"
                            data-boundary="window"
                            className="ml-4pt material-icons text-20 card-course__icon-favorite"
                          >
                            favorite_border
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
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              access_time
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>6 hours</small>
                            </p>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              play_circle_outline
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>12 lessons</small>
                            </p>
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
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-4 col-xl-3 card-group-row__col">
                    <div
                      className="card card-sm card--elevated p-relative o-hidden overlay overlay--primary-dodger-blue js-overlay card-group-row__card"
                      data-toggle="popover"
                      data-trigger="click"
                    >
                      <Link
                        to="boxed-student-course.html"
                        className="card-img-top js-image"
                        data-position=""
                        data-height="140"
                      >
                        <img
                          src="assets/images/paths/figma_430x168.png"
                          alt="course"
                        />
                        <span className="overlay__content">
                          <span className="overlay__action d-flex flex-column text-center">
                            <i className="material-icons icon-32pt">
                              play_circle_outline
                            </i>
                            <span className="card-title text-white">
                              Preview
                            </span>
                          </span>
                        </span>
                      </Link>

                      <div className="card-body flex">
                        <div className="d-flex">
                          <div className="flex">
                            <Link
                              className="card-title"
                              to="boxed-student-course.html"
                            >
                              Learn Figma
                            </Link>
                            <small className="text-50 font-weight-bold mb-4pt">
                              Elijah Murray
                            </small>
                          </div>
                          <Link
                            to="boxed-student-course.html"
                            data-toggle="tooltip"
                            data-title="Add Favorite"
                            data-placement="top"
                            data-boundary="window"
                            className="ml-4pt material-icons text-20 card-course__icon-favorite"
                          >
                            favorite_border
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
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="row justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              access_time
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>6 hours</small>
                            </p>
                          </div>
                          <div className="col-auto d-flex align-items-center">
                            <span className="material-icons icon-16pt text-black-50 mr-4pt">
                              play_circle_outline
                            </span>
                            <p className="flex text-black-50 lh-1 mb-0">
                              <small>12 lessons</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="popoverContainer d-none">
                      <div className="media">
                        <div className="media-left mr-12pt">
                          <img
                            src="assets/images/paths/figma_40x40@2x.png"
                            width="40"
                            height="40"
                            alt="Angular"
                            className="rounded"
                          />
                        </div>
                        <div className="media-body">
                          <div className="card-title mb-0">Learn Figma</div>
                          <p className="lh-1 mb-0">
                            <span className="text-black-50 small">with</span>
                            <span className="text-black-50 small font-weight-bold">
                              Elijah Murray
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="my-16pt text-black-70">
                        Learn the fundamentals of working with Angular and how
                        to create basic applications.
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
                            to="boxed-student-course.html"
                            className="btn btn-primary"
                          >
                            Watch trailer
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
                  Luma is Link beautifully crafted user interface for modern
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
          <Drawer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
};

export default connect(mapStateToProps, { courses: FetchCourseAction })(
  Courses
);
