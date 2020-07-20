import React from "react";
import Header from "../../Header/header";
import Drawer from "../../Drawer/drawer";
import Preloader from "../../preloader";
import InstructorHeader from "../../Header/instructor-header";

class InstructorDashboard extends React.Component {
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
                    <h2 class="mb-0">Dashboard</h2>

                    <ol class="breadcrumb p-0 m-0">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>

                      <li class="breadcrumb-item active">Dashboard</li>
                    </ol>
                  </div>
                </div>

                <div class="row" role="tablist">
                  <div class="col-auto">
                    <a
                      href="boxed-instructor-earnings.html"
                      class="btn btn-outline-secondary"
                    >
                      Earnings
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="page-section border-bottom-2">
              <div class="container-fluid page__container">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="card border-1 border-left-3 border-left-accent text-center mb-lg-0">
                      <div class="card-body">
                        <h4 class="h2 mb-0">$1,569.00</h4>
                        <div>Earnings this month</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card text-center mb-lg-0">
                      <div class="card-body">
                        <h4 class="h2 mb-0">$3,917.80</h4>
                        <div>Account Balance</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="card text-center mb-lg-0">
                      <div class="card-body">
                        <h4 class="h2 mb-0">$10,211.50</h4>
                        <div>Total Sales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid page__container page-section">
              <div class="page-separator">
                <div class="page-separator__text">Earnings</div>
              </div>
              <div class="card card-body mb-32pt">
                <div
                  id="legend"
                  class="chart-legend mt-0 mb-24pt justify-content-start"
                ></div>
                <div class="chart" style={{ height: "320px" }}>
                  <canvas
                    id="earningsChart"
                    class="chart-canvas js-update-chart-bar"
                    data-chart-legend="#legend"
                    data-chart-line-background-color="gradient:primary,gray"
                    data-chart-prefix="$"
                    data-chart-suffix="k"
                  ></canvas>
                </div>
              </div>

              <div class="row mb-8pt">
                <div class="col-lg-6">
                  <div class="page-separator">
                    <div class="page-separator__text">Transactions</div>
                  </div>
                  <div class="card">
                    <div
                      data-toggle="lists"
                      data-lists-values='[
      "js-lists-values-course", 
      "js-lists-values-document",
      "js-lists-values-amount",
      "js-lists-values-date"
    ]'
                      data-lists-sort-by="js-lists-values-date"
                      data-lists-sort-desc="true"
                      class="table-responsive"
                    >
                      <table class="table table-flush table-nowrap">
                        <thead>
                          <tr>
                            <th colspan="2">
                              <a
                                href="javascript:void(0)"
                                class="sort"
                                data-sort="js-lists-values-course"
                              >
                                Course
                              </a>
                              <a
                                href="javascript:void(0)"
                                class="sort"
                                data-sort="js-lists-values-document"
                              >
                                Document
                              </a>
                              <a
                                href="javascript:void(0)"
                                class="sort"
                                data-sort="js-lists-values-amount"
                              >
                                Amount
                              </a>
                              <a
                                href="javascript:void(0)"
                                class="sort"
                                data-sort="js-lists-values-date"
                              >
                                Date
                              </a>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="list">
                          <tr>
                            <td>
                              <div class="d-flex flex-nowrap align-items-center">
                                <a
                                  href="boxed-instructor-edit-course.html"
                                  class="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                                >
                                  <img
                                    src="assets/images/paths/angular_routing_200x168.png"
                                    alt="course"
                                    class="avatar-img rounded"
                                  />
                                  <span class="overlay__content"></span>
                                </a>
                                <div class="flex">
                                  <a
                                    class="card-title js-lists-values-course"
                                    href="boxed-instructor-edit-course.html"
                                  >
                                    Angular Routing In-Depth
                                  </a>
                                  <small class="text-muted mr-1">
                                    Invoice
                                    <a
                                      href="boxed-invoice.html"
                                      style={{ color: "inherit" }}
                                      class="js-lists-values-document"
                                    >
                                      #8734
                                    </a>{" "}
                                    - &dollar;
                                    <span class="js-lists-values-amount">
                                      89
                                    </span>{" "}
                                    USD
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td class="text-right">
                              <small class="text-muted text-uppercase js-lists-values-date">
                                12 Nov 2018
                              </small>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="d-flex flex-nowrap align-items-center">
                                <a
                                  href="boxed-instructor-edit-course.html"
                                  class="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                                >
                                  <img
                                    src="assets/images/paths/angular_testing_200x168.png"
                                    alt="course"
                                    class="avatar-img rounded"
                                  />
                                  <span class="overlay__content"></span>
                                </a>
                                <div class="flex">
                                  <a
                                    class="card-title js-lists-values-course"
                                    href="boxed-instructor-edit-course.html"
                                  >
                                    Angular Unit Testing
                                  </a>
                                  <small class="text-muted mr-1">
                                    Invoice
                                    <a
                                      href="boxed-invoice.html"
                                      style={{ color: "inherit" }}
                                      class="js-lists-values-document"
                                    >
                                      #8735
                                    </a>{" "}
                                    - &dollar;
                                    <span class="js-lists-values-amount">
                                      89
                                    </span>{" "}
                                    USD
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td class="text-right">
                              <small class="text-muted text-uppercase js-lists-values-date">
                                13 Nov 2018
                              </small>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="d-flex flex-nowrap align-items-center">
                                <a
                                  href="boxed-instructor-edit-course.html"
                                  class="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                                >
                                  <img
                                    src="assets/images/paths/typescript_200x168.png"
                                    alt="course"
                                    class="avatar-img rounded"
                                  />
                                  <span class="overlay__content"></span>
                                </a>
                                <div class="flex">
                                  <a
                                    class="card-title js-lists-values-course"
                                    href="boxed-instructor-edit-course.html"
                                  >
                                    Introduction to TypeScript
                                  </a>
                                  <small class="text-muted mr-1">
                                    Invoice
                                    <a
                                      href="boxed-invoice.html"
                                      style={{ color: "inherit" }}
                                      class="js-lists-values-document"
                                    >
                                      #8736
                                    </a>{" "}
                                    - &dollar;
                                    <span class="js-lists-values-amount">
                                      89
                                    </span>{" "}
                                    USD
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td class="text-right">
                              <small class="text-muted text-uppercase js-lists-values-date">
                                14 Nov 2018
                              </small>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div class="d-flex flex-nowrap align-items-center">
                                <a
                                  href="boxed-instructor-edit-course.html"
                                  class="avatar avatar-4by3 overlay overlay--primary mr-12pt"
                                >
                                  <img
                                    src="assets/images/paths/angular_200x168.png"
                                    alt="course"
                                    class="avatar-img rounded"
                                  />
                                  <span class="overlay__content"></span>
                                </a>
                                <div class="flex">
                                  <a
                                    class="card-title js-lists-values-course"
                                    href="boxed-instructor-edit-course.html"
                                  >
                                    Learn Angular Fundamentals
                                  </a>
                                  <small class="text-muted mr-1">
                                    Invoice
                                    <a
                                      href="boxed-invoice.html"
                                      style={{ color: "inherit" }}
                                      class="js-lists-values-document"
                                    >
                                      #8737
                                    </a>{" "}
                                    - &dollar;
                                    <span class="js-lists-values-amount">
                                      89
                                    </span>{" "}
                                    USD
                                  </small>
                                </div>
                              </div>
                            </td>
                            <td class="text-right">
                              <small class="text-muted text-uppercase js-lists-values-date">
                                15 Nov 2018
                              </small>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="page-separator">
                    <div class="page-separator__text">Comments</div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="media">
                        <div class="media-left mr-12pt">
                          <a href="#" class="avatar avatar-sm">
                            <span class="avatar-title rounded-circle">LB</span>
                          </a>
                        </div>
                        <div class="media-body d-flex flex-column">
                          <div class="d-flex align-items-center">
                            <a href="boxed-profile.html" class="card-title">
                              Laza Bogdan
                            </a>
                            <small class="ml-auto text-muted">27 min ago</small>
                            <br />
                          </div>
                          <span class="text-muted">
                            on{" "}
                            <a
                              href="boxed-instructor-edit-course.html"
                              class="text-50"
                              style={{ textDecoration: "underline" }}
                            >
                              Data Visualization With Chart.js
                            </a>
                          </span>
                          <p class="mt-1 mb-0 text-70">
                            How can I load Charts on a page?
                          </p>
                        </div>
                      </div>
                      <div class="media ml-sm-32pt mt-3 border rounded p-3 bg-light d-inline-flex measure-paragraph-max">
                        <div class="media-left mr-12pt">
                          <a href="#" class="avatar avatar-sm">
                            <span class="avatar-title rounded-circle">FM</span>
                          </a>
                        </div>
                        <div class="media-body">
                          <div class="d-flex align-items-center">
                            <a href="boxed-profile.html" class="card-title">
                              FrontendMatter
                            </a>
                            <small class="ml-auto text-muted">just now</small>
                          </div>
                          <p class="mt-1 mb-0 text-70">
                            Hi Bogdan,
                            <br /> Thank you for purchasing our course! <br />
                            <br />
                            Please have a look at the charts library
                            documentation{" "}
                            <a href="#" class="text-underline">
                              here
                            </a>{" "}
                            and follow the instructions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-footer">
                      <form action="#" id="message-reply">
                        <div class="input-group input-group-merge">
                          <input
                            type="text"
                            class="form-control form-control-appended"
                            required=""
                            placeholder="Quick Reply"
                          />
                          <div class="input-group-append">
                            <div class="input-group-text pr-2">
                              <button class="btn btn-flush" type="button">
                                <i class="material-icons">tag_faces</i>
                              </button>
                            </div>
                            <div class="input-group-text pl-0">
                              <div
                                class="custom-file custom-file-naked d-flex"
                                style={{ width: "24px", overflow: "hidden" }}
                              >
                                <input
                                  type="file"
                                  class="custom-file-input"
                                  id="customFile"
                                />
                                <label
                                  class="custom-file-label"
                                  style={{ color: "inherit" }}
                                  for="customFile"
                                >
                                  <i class="material-icons">attach_file</i>
                                </label>
                              </div>
                            </div>
                            <div class="input-group-text pl-0">
                              <button class="btn btn-flush" type="button">
                                <i class="material-icons">send</i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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
export default InstructorDashboard;
