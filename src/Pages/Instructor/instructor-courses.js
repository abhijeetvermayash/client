import React from "react"
import { Link } from "react-router-dom"
import Header from "../../Header/header"
import Drawer from "../../Drawer/drawer"
import InstructorHeader from "../../Header/instructor-header"

class InstructorCourses extends React.Component {
  render() {
    return (
      <div className="layout-boxed">
        <div
          class="mdk-drawer-layout js-mdk-drawer-layout"
          data-push
          data-responsive-width="992px"
        >
          <div class="mdk-drawer-layout__content page-content">
            <InstructorHeader />
            <div class="pt-32pt">
              <div class="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                <div class="flex d-flex flex-column flex-sm-row align-items-center mb-24pt mb-md-0">
                  <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                    <h2 class="mb-0">Courses</h2>

                    <ol class="breadcrumb p-0 m-0">
                      <li class="breadcrumb-item">
                        <Link to="index.html">Home</Link>
                      </li>

                      <li class="breadcrumb-item active">Courses</li>
                    </ol>
                  </div>
                </div>

                <div class="row" role="tablist">
                  <div class="col-auto">
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="btn btn-outline-secondary"
                    >
                      Add Course
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid page__container page-section">
              <div class="page-separator">
                <div class="page-separator__text">Development Courses</div>
              </div>

              <div class="row">
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-overlay-onload-show
                    data-popover-onload-show
                    data-force-reveal
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/angular_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Learn Angular fundamentals
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/angular_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">
                          Learn Angular fundamentals
                        </div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/swift_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Build an iOS Application in Swift
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/swift_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">
                          Build an iOS Application in Swift
                        </div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/wordpress_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Build a WordPress Website
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/wordpress_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">
                          Build a WordPress Website
                        </div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position="left"
                    >
                      <img
                        src="assets/images/paths/react_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Become a React Native Developer
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/react_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">
                          Become a React Native Developer
                        </div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-32pt">
                <ul class="pagination justify-content-start pagination-xsm m-0">
                  <li class="page-item disabled">
                    <Link class="page-link" to="#" aria-label="Previous">
                      <span aria-hidden="true" class="material-icons">
                        chevron_left
                      </span>
                      <span>Prev</span>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="#" aria-label="Page 1">
                      <span>1</span>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="#" aria-label="Page 2">
                      <span>2</span>
                    </Link>
                  </li>
                  <li class="page-item">
                    <Link class="page-link" to="#" aria-label="Next">
                      <span>Next</span>
                      <span aria-hidden="true" class="material-icons">
                        chevron_right
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="page-separator">
                <div class="page-separator__text">Design Courses</div>
              </div>

              <div class="row">
                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/sketch_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Learn Sketch
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/sketch_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">Learn Sketch</div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/flinto_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Learn Flinto
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/flinto_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">Learn Flinto</div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/photoshop_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Learn Photoshop
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/photoshop_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">Learn Photoshop</div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6 col-md-4 col-xl-3">
                  <div
                    class="card card-sm card--elevated p-relative o-hidden overlay overlay--primary js-overlay mdk-reveal js-mdk-reveal "
                    data-partial-height="44"
                    data-toggle="popover"
                    data-trigger="click"
                  >
                    <Link
                      to="boxed-instructor-edit-course.html"
                      class="js-image"
                      data-position=""
                    >
                      <img
                        src="assets/images/paths/mailchimp_430x168.png"
                        alt="course"
                      />
                      <span class="overlay__content align-items-start justify-content-start">
                        <span class="overlay__action card-body d-flex align-items-center">
                          <i class="material-icons mr-4pt">edit</i>
                          <span class="card-title text-white">Edit</span>
                        </span>
                      </span>
                    </Link>
                    <div class="mdk-reveal__content">
                      <div class="card-body">
                        <div class="d-flex">
                          <div class="flex">
                            <Link
                              class="card-title mb-4pt"
                              to="boxed-instructor-edit-course.html"
                            >
                              Newsletter Design
                            </Link>
                          </div>
                          <Link
                            to="boxed-instructor-edit-course.html"
                            class="ml-4pt material-icons text-black-20 card-course__icon-favorite"
                          >
                            edit
                          </Link>
                        </div>
                        <div class="d-flex">
                          <div class="rating flex">
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star</span>
                            </span>
                            <span class="rating__item">
                              <span class="material-icons">star_border</span>
                            </span>
                          </div>
                          <small class="text-black-50">6 hours</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="popoverContainer d-none">
                    <div class="media">
                      <div class="media-left mr-12pt">
                        <img
                          src="assets/images/paths/mailchimp_40x40@2x.png"
                          width="40"
                          height="40"
                          alt="Angular"
                          class="rounded"
                        />
                      </div>
                      <div class="media-body">
                        <div class="card-title mb-0">Newsletter Design</div>
                        <p class="lh-1">
                          <span class="text-black-50 small">with</span>
                          <span class="text-black-50 small font-weight-bold">
                            Elijah Murray
                          </span>
                        </p>
                      </div>
                    </div>

                    <p class="my-16pt text-black-70">
                      Learn the fundamentals of working with Angular and how to
                      create basic applications.
                    </p>

                    <div class="mb-16pt">
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Fundamentals of working with Angular</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Create complete Angular applications</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Working with the Angular CLI</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Understanding Dependency Injection</small>
                        </p>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="material-icons icon-16pt text-black-50 mr-8pt">
                          check
                        </span>
                        <p class="flex text-black-50 lh-1 mb-0">
                          <small>Testing with Angular</small>
                        </p>
                      </div>
                    </div>

                    <div class="row align-items-center">
                      <div class="col-auto">
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            access_time
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>6 hours</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center mb-4pt">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            play_circle_outline
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>12 lessons</small>
                          </p>
                        </div>
                        <div class="d-flex align-items-center">
                          <span class="material-icons icon-16pt text-black-50 mr-4pt">
                            assessment
                          </span>
                          <p class="flex text-black-50 lh-1 mb-0">
                            <small>Beginner</small>
                          </p>
                        </div>
                      </div>
                      <div class="col text-right">
                        <Link
                          to="boxed-instructor-edit-course.html"
                          class="btn btn-primary"
                        >
                          Edit course
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="pagination justify-content-start pagination-xsm m-0">
                <li class="page-item disabled">
                  <Link class="page-link" to="#" aria-label="Previous">
                    <span aria-hidden="true" class="material-icons">
                      chevron_left
                    </span>
                    <span>Prev</span>
                  </Link>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="#" aria-label="Page 1">
                    <span>1</span>
                  </Link>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="#" aria-label="Page 2">
                    <span>2</span>
                  </Link>
                </li>
                <li class="page-item">
                  <Link class="page-link" to="#" aria-label="Next">
                    <span>Next</span>
                    <span aria-hidden="true" class="material-icons">
                      chevron_right
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div class="js-fix-footer2 bg-white border-top-2">
              <div class="container-fluid page__container page-section d-flex flex-column">
                <p class="text-70 brand mb-24pt">
                  <img
                    class="brand-icon"
                    src="assets/images/logo/black-70@2x.png"
                    width="30"
                    alt="Luma"
                  />{" "}
                  Luma
                </p>
                <p class="measure-lead-max text-50 small mr-8pt">
                  Luma is a beautifully crafted user interface for modern
                  Education Platforms, including Courses & Tutorials, Video
                  Lessons, Student and Teacher Dashboard, Curriculum Management,
                  Earnings and Reporting, ERP, HR, CMS, Tasks, Projects,
                  eCommerce and more.
                </p>
                <p class="mb-8pt d-flex">
                  <Link to="" class="text-70 text-underline mr-8pt small">
                    Terms
                  </Link>
                  <Link to="" class="text-70 text-underline small">
                    Privacy policy
                  </Link>
                </p>
                <p class="text-50 small mt-n1 mb-0">
                  Copyright 2019 &copy; All rights reserved.
                </p>
              </div>
            </div>
          </div>
          <Drawer />
        </div>
      </div>
    )
  }
}
export default InstructorCourses
