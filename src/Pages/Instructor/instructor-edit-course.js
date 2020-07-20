import React from "react";
import Header from "../../Header/header";
import Drawer from "../../Drawer/drawer";
import InstructorHeader from "../../Header/instructor-header";

class InstructorEditCourse extends React.Component {
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
                <div class="flex d-flex flex-column flex-sm-row align-items-center">
                  <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                    <h2 class="mb-0">Edit Course</h2>

                    <ol class="breadcrumb p-0 m-0">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>

                      <li class="breadcrumb-item active">Edit Course</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-section border-bottom-2">
              <div class="container-fluid page__container">
                <div class="row">
                  <div class="col-md-8">
                    <div class="page-separator">
                      <div class="page-separator__text">Basic information</div>
                    </div>

                    <label class="form-label">Course title</label>
                    <div class="form-group mb-24pt">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Course title"
                        value="Angular Fundamentals"
                      />
                      <small class="form-text text-muted">
                        Please see our <a href="">course title guideline</a>
                      </small>
                    </div>

                    <div class="form-group mb-32pt">
                      <label class="form-label">Description</label>

                      <div
                        style={{ height: "150px" }}
                        class="mb-0"
                        data-toggle="quill"
                        data-quill-placeholder="Course description"
                      >
                        <h1>Hello World!</h1>
                        <p>
                          Some initial <strong>bold</strong> text
                        </p>
                        <p>
                          <br />
                        </p>
                      </div>
                      <small class="form-text text-muted">
                        Shortly describe this course.
                      </small>
                    </div>

                    <div class="page-separator">
                      <div class="page-separator__text">Sections</div>
                    </div>

                    <div
                      class="accordion js-accordion accordion--boxed mb-24pt"
                      id="parent"
                    >
                      <div class="accordion__item">
                        <a
                          href="#"
                          class="accordion__toggle collapsed"
                          data-toggle="collapse"
                          data-target="#course-toc-1"
                          data-parent="#parent"
                        >
                          <span class="flex">Course Overview</span>
                          <span class="accordion__toggle-icon material-icons">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div class="accordion__menu collapse" id="course-toc-1">
                          <div class="accordion__menu-link">
                            <i class="material-icons text-70 icon-16pt icon--left">
                              drag_handle
                            </i>
                            <a class="flex" href="boxed-student-lesson.html">
                              Watch Trailer
                            </a>
                            <span class="text-muted">1m 10s</span>
                          </div>
                        </div>
                      </div>
                      <div class="accordion__item open">
                        <a
                          href="#"
                          class="accordion__toggle"
                          data-toggle="collapse"
                          data-target="#course-toc-2"
                          data-parent="#parent"
                        >
                          <span class="flex">Getting Started with Angular</span>
                          <span class="accordion__toggle-icon material-icons">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div
                          class="accordion__menu collapse show"
                          id="course-toc-2"
                        >
                          <div class="accordion__menu-link">
                            <i class="material-icons text-70 icon-16pt icon--left">
                              drag_handle
                            </i>
                            <a class="flex" href="boxed-student-lesson.html">
                              Introduction
                            </a>
                            <span class="text-muted">8m 42s</span>
                          </div>
                          <div class="accordion__menu-link active">
                            <i class="material-icons text-70 icon-16pt icon--left">
                              drag_handle
                            </i>
                            <a class="flex" href="boxed-student-lesson.html">
                              Introduction to TypeScript
                            </a>
                            <span class="text-muted">50m 13s</span>
                          </div>
                          <div class="accordion__menu-link">
                            <i class="material-icons text-70 icon-16pt icon--left">
                              drag_handle
                            </i>
                            <a class="flex" href="boxed-student-lesson.html">
                              Comparing Angular to AngularJS
                            </a>
                            <span class="text-muted">12m 10s</span>
                          </div>
                          <div class="accordion__menu-link">
                            <i class="material-icons text-70 icon-16pt icon--left">
                              drag_handle
                            </i>
                            <a class="flex" href="boxed-student-take-quiz.html">
                              Quiz: Getting Started With Angular
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="accordion__item">
                        <a
                          href="#"
                          class="accordion__toggle collapsed"
                          data-toggle="collapse"
                          data-target="#course-toc-3"
                          data-parent="#parent"
                        >
                          <span class="flex">
                            Creating and Communicating Between Angular
                            Components
                          </span>
                          <span class="accordion__toggle-icon material-icons">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div class="accordion__menu collapse" id="course-toc-3">
                          <div class="accordion__menu-link">
                            <i class="material-icons text-70 icon-16pt icon--left">
                              drag_handle
                            </i>
                            <a class="flex" href="boxed-student-lesson.html">
                              Angular Components
                            </a>
                            <span class="text-muted">04:23</span>
                          </div>
                        </div>
                      </div>
                      <div class="accordion__item">
                        <a
                          href="#"
                          class="accordion__toggle collapsed"
                          data-toggle="collapse"
                          data-target="#course-toc-4"
                          data-parent="#parent"
                        >
                          <span class="flex">
                            Exploring the Angular Template Syntax
                          </span>
                          <span class="accordion__toggle-icon material-icons">
                            keyboard_arrow_down
                          </span>
                        </a>
                        <div class="accordion__menu collapse" id="course-toc-4">
                          <div class="accordion__menu-link">
                            <i class="material-icons text-70 icon-16pt icon--left">
                              drag_handle
                            </i>
                            <a class="flex" href="boxed-student-lesson.html">
                              Template Syntax
                            </a>
                            <span class="text-muted">04:23</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href="#"
                      class="btn btn-outline-secondary mb-24pt mb-sm-0"
                    >
                      Add Section
                    </a>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-header text-center">
                        <a href="#" class="btn btn-accent">
                          Save changes
                        </a>
                      </div>
                      <div class="list-group list-group-flush">
                        <div class="list-group-item d-flex">
                          <a class="flex" href="#">
                            <strong>Save Draft</strong>
                          </a>
                          <i class="material-icons text-muted">check</i>
                        </div>
                        <div class="list-group-item">
                          <a href="#" class="text-danger">
                            <strong>Delete Course</strong>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="page-separator">
                      <div class="page-separator__text">Video</div>
                    </div>

                    <div class="card">
                      <div class="embed-responsive embed-responsive-16by9">
                        <iframe
                          class="embed-responsive-item"
                          src="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0"
                          allowfullscreen=""
                        ></iframe>
                      </div>
                      <div class="card-body">
                        <label class="form-label">URL</label>
                        <input
                          type="text"
                          class="form-control"
                          value="https://player.vimeo.com/video/97243285?title=0&amp;byline=0&amp;portrait=0"
                          placeholder="Enter Video URL"
                        />
                        <small class="form-text text-muted">
                          Enter a valid video URL.
                        </small>
                      </div>
                    </div>

                    <div class="page-separator">
                      <div class="page-separator__text">Options</div>
                    </div>

                    <div class="card">
                      <div class="card-body">
                        <div class="form-group">
                          <label class="form-label">Category</label>
                          <select
                            name="category"
                            class="form-control custom-select"
                          >
                            <option value="vuejs">VueJs</option>
                            <option value="vuejs">Angular</option>
                            <option value="vuejs">React</option>
                          </select>
                          <small class="form-text text-muted">
                            Select a category.
                          </small>
                        </div>
                        <div class="form-group">
                          <label class="form-label">Price</label>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="input-group form-inline">
                                <span class="input-group-prepend">
                                  <span class="input-group-text">$</span>
                                </span>
                                <input
                                  type="text"
                                  class="form-control"
                                  value="24"
                                />
                              </div>
                            </div>
                          </div>
                          <small class="form-text text-muted">
                            The recommended price is between &dollar;17 and
                            &dollar;24
                          </small>
                        </div>
                        <div class="form-group mb-0">
                          <label class="form-label" for="select03">
                            Tags
                          </label>
                          <select
                            id="select03"
                            data-toggle="select"
                            multiple
                            class="form-control"
                          >
                            <option selected="">JavaScript</option>
                            <option selected="">Angular</option>
                            <option>Bootstrap</option>
                            <option>CSS</option>
                            <option>HTML</option>
                          </select>
                          <small class="form-text text-muted">
                            Select one or more tags.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
export default InstructorEditCourse;
