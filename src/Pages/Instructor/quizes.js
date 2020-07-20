import React from "react";
import Header from "../../Header/header";
import Drawer from "../../Drawer/drawer";
import InstructorHeader from "../../Header/instructor-header";

class Quizes extends React.Component {
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
                    <h2 class="mb-0">Quizzes</h2>

                    <ol class="breadcrumb p-0 m-0">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>

                      <li class="breadcrumb-item active">Quizzes</li>
                    </ol>
                  </div>
                </div>

                <div class="row" role="tablist">
                  <div class="col-auto">
                    <a
                      href="boxed-instructor-edit-quiz.html"
                      class="btn btn-outline-secondary"
                    >
                      Add Quiz
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid page__container page-section">
              <div class="row card-group-row">
                <div class="card-group-row__col col-md-6">
                  <div class="card card-group-row__card card-sm">
                    <div class="card-body d-flex align-items-center">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/angular_routing_200x168.png"
                          alt="Angular Routing In-Depth"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          Angular Routing In-Depth
                        </a>
                        <div class="card-subtitle text-50">15 completed</div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex align-items-center">
                        <div class="flex mr-2">
                          <a href="#" class="btn btn-light btn-sm">
                            <i class="material-icons icon--left">
                              playlist_add_check
                            </i>{" "}
                            Review
                            <span class="badge badge-dark badge-notifications ml-2">
                              5
                            </span>
                          </a>
                        </div>

                        <div class="dropdown">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            data-caret="false"
                            class="text-muted"
                          >
                            <i class="material-icons">more_horiz</i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0)" class="dropdown-item">
                              Review Quiz
                            </a>
                            <a
                              href="boxed-instructor-edit-quiz.html"
                              class="dropdown-item"
                            >
                              Edit Quiz
                            </a>
                            <div class="dropdown-divider"></div>
                            <a
                              href="javascript:void(0)"
                              class="dropdown-item text-danger"
                            >
                              Delete Quiz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-group-row__col col-md-6">
                  <div class="card card-group-row__card card-sm">
                    <div class="card-body d-flex align-items-center">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/angular_testing_200x168.png"
                          alt="Angular Unit Testing"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          Angular Unit Testing
                        </a>
                        <div class="card-subtitle text-50">15 completed</div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex align-items-center">
                        <div class="flex mr-2">
                          <a href="#" class="btn btn-light btn-sm">
                            <i class="material-icons icon--left">
                              playlist_add_check
                            </i>{" "}
                            Review
                            <span class="badge badge-dark badge-notifications ml-2">
                              5
                            </span>
                          </a>
                        </div>

                        <div class="dropdown">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            data-caret="false"
                            class="text-muted"
                          >
                            <i class="material-icons">more_horiz</i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0)" class="dropdown-item">
                              Review Quiz
                            </a>
                            <a
                              href="boxed-instructor-edit-quiz.html"
                              class="dropdown-item"
                            >
                              Edit Quiz
                            </a>
                            <div class="dropdown-divider"></div>
                            <a
                              href="javascript:void(0)"
                              class="dropdown-item text-danger"
                            >
                              Delete Quiz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-group-row__col col-md-6">
                  <div class="card card-group-row__card card-sm">
                    <div class="card-body d-flex align-items-center">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/typescript_200x168.png"
                          alt="Introduction to TypeScript"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          Introduction to TypeScript
                        </a>
                        <div class="card-subtitle text-50">15 completed</div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex align-items-center">
                        <div class="flex mr-2">
                          <a href="#" class="btn btn-light btn-sm">
                            <i class="material-icons icon--left">
                              playlist_add_check
                            </i>{" "}
                            Review
                            <span class="badge badge-dark badge-notifications ml-2">
                              5
                            </span>
                          </a>
                        </div>

                        <div class="dropdown">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            data-caret="false"
                            class="text-muted"
                          >
                            <i class="material-icons">more_horiz</i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0)" class="dropdown-item">
                              Review Quiz
                            </a>
                            <a
                              href="boxed-instructor-edit-quiz.html"
                              class="dropdown-item"
                            >
                              Edit Quiz
                            </a>
                            <div class="dropdown-divider"></div>
                            <a
                              href="javascript:void(0)"
                              class="dropdown-item text-danger"
                            >
                              Delete Quiz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-group-row__col col-md-6">
                  <div class="card card-group-row__card card-sm">
                    <div class="card-body d-flex align-items-center">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/angular_200x168.png"
                          alt="Angular Fundamentals"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          Angular Fundamentals
                        </a>
                        <div class="card-subtitle text-50">15 completed</div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <div class="d-flex align-items-center">
                        <div class="flex mr-2">
                          <a href="#" class="btn btn-light btn-sm">
                            <i class="material-icons icon--left">
                              playlist_add_check
                            </i>{" "}
                            Review
                            <span class="badge badge-dark badge-notifications ml-2">
                              5
                            </span>
                          </a>
                        </div>

                        <div class="dropdown">
                          <a
                            href="#"
                            data-toggle="dropdown"
                            data-caret="false"
                            class="text-muted"
                          >
                            <i class="material-icons">more_horiz</i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right">
                            <a href="javascript:void(0)" class="dropdown-item">
                              Review Quiz
                            </a>
                            <a
                              href="boxed-instructor-edit-quiz.html"
                              class="dropdown-item"
                            >
                              Edit Quiz
                            </a>
                            <div class="dropdown-divider"></div>
                            <a
                              href="javascript:void(0)"
                              class="dropdown-item text-danger"
                            >
                              Delete Quiz
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mb-32pt">
                <ul class="pagination justify-content-start pagination-xsm m-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true" class="material-icons">
                        chevron_left
                      </span>
                      <span>Prev</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Page 1">
                      <span>1</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Page 2">
                      <span>2</span>
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span>Next</span>
                      <span aria-hidden="true" class="material-icons">
                        chevron_right
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="card stack">
                <div class="list-group list-group-flush">
                  <div class="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                    <div class="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/mailchimp_200x168.png"
                          alt="Newsletter Design"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title mb-4pt"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          Newsletter Design
                        </a>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex text-center d-flex align-items-center mr-16pt">
                        <span class="text-50 text-headings text-uppercase mr-12pt">
                          Completed
                        </span>
                        <span class="badge badge-dark badge-notifications">
                          15
                        </span>
                      </div>

                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-caret="false"
                          class="text-muted"
                        >
                          <i class="material-icons">more_vert</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="javascript:void(0)" class="dropdown-item">
                            Review Quiz
                          </a>
                          <a
                            href="boxed-instructor-edit-quiz.html"
                            class="dropdown-item"
                          >
                            Edit Quiz
                          </a>
                          <div class="dropdown-divider"></div>
                          <a
                            href="javascript:void(0)"
                            class="dropdown-item text-danger"
                          >
                            Delete Quiz
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                    <div class="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/xd_200x168.png"
                          alt="Adobe XD"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title mb-4pt"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          Adobe XD
                        </a>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex text-center d-flex align-items-center mr-16pt">
                        <span class="text-50 text-headings text-uppercase mr-12pt">
                          Completed
                        </span>
                        <span class="badge badge-dark badge-notifications">
                          15
                        </span>
                      </div>

                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-caret="false"
                          class="text-muted"
                        >
                          <i class="material-icons">more_vert</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="javascript:void(0)" class="dropdown-item">
                            Review Quiz
                          </a>
                          <a
                            href="boxed-instructor-edit-quiz.html"
                            class="dropdown-item"
                          >
                            Edit Quiz
                          </a>
                          <div class="dropdown-divider"></div>
                          <a
                            href="javascript:void(0)"
                            class="dropdown-item text-danger"
                          >
                            Delete Quiz
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                    <div class="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/invision_200x168.png"
                          alt="inVision App"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title mb-4pt"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          inVision App
                        </a>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex text-center d-flex align-items-center mr-16pt">
                        <span class="text-50 text-headings text-uppercase mr-12pt">
                          Completed
                        </span>
                        <span class="badge badge-dark badge-notifications">
                          15
                        </span>
                      </div>

                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-caret="false"
                          class="text-muted"
                        >
                          <i class="material-icons">more_vert</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="javascript:void(0)" class="dropdown-item">
                            Review Quiz
                          </a>
                          <a
                            href="boxed-instructor-edit-quiz.html"
                            class="dropdown-item"
                          >
                            Edit Quiz
                          </a>
                          <div class="dropdown-divider"></div>
                          <a
                            href="javascript:void(0)"
                            class="dropdown-item text-danger"
                          >
                            Delete Quiz
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-item d-flex flex-column flex-sm-row align-items-sm-center px-12pt">
                    <div class="flex d-flex align-items-center mr-sm-16pt mb-8pt mb-sm-0">
                      <a
                        href="boxed-instructor-edit-quiz.html"
                        class="avatar overlay overlay--primary avatar-4by3 mr-12pt"
                      >
                        <img
                          src="assets/images/paths/craft_200x168.png"
                          alt="Craft by inVision"
                          class="avatar-img rounded"
                        />
                        <span class="overlay__content"></span>
                      </a>
                      <div class="flex">
                        <a
                          class="card-title mb-4pt"
                          href="boxed-instructor-edit-quiz.html"
                        >
                          Craft by inVision
                        </a>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="flex text-center d-flex align-items-center mr-16pt">
                        <span class="text-50 text-headings text-uppercase mr-12pt">
                          Completed
                        </span>
                        <span class="badge badge-dark badge-notifications">
                          15
                        </span>
                      </div>

                      <div class="dropdown">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-caret="false"
                          class="text-muted"
                        >
                          <i class="material-icons">more_vert</i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a href="javascript:void(0)" class="dropdown-item">
                            Review Quiz
                          </a>
                          <a
                            href="boxed-instructor-edit-quiz.html"
                            class="dropdown-item"
                          >
                            Edit Quiz
                          </a>
                          <div class="dropdown-divider"></div>
                          <a
                            href="javascript:void(0)"
                            class="dropdown-item text-danger"
                          >
                            Delete Quiz
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <ul class="pagination justify-content-start pagination-xsm m-0">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true" class="material-icons">
                      chevron_left
                    </span>
                    <span>Prev</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Page 1">
                    <span>1</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Page 2">
                    <span>2</span>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span>Next</span>
                    <span aria-hidden="true" class="material-icons">
                      chevron_right
                    </span>
                  </a>
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
                  <a href="" class="text-70 text-underline mr-8pt small">
                    Terms
                  </a>
                  <a href="" class="text-70 text-underline small">
                    Privacy policy
                  </a>
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
    );
  }
}
export default Quizes;
