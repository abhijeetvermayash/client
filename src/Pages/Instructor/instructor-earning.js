import React from "react";
import Header from "../../Header/header";
import Drawer from "../../Drawer/drawer";
import InstructorHeader from "../../Header/instructor-header";

class InstructorEarning extends React.Component {
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
                    <h2 class="mb-0">Earnings</h2>

                    <ol class="breadcrumb p-0 m-0">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>

                      <li class="breadcrumb-item active">Earnings</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div class="container-fluid page__container page-section">
              <div class="page-separator">
                <div class="page-separator__text">Overview</div>
              </div>

              <div class="card mb-lg-32pt">
                <div class="card-header d-flex align-items-center">
                  <strong class="card-title">Revenue</strong>
                  <div class="flatpickr-wrapper flatpickr-calendar-right d-flex ml-auto">
                    <div
                      id="recent_orders_date"
                      data-toggle="flatpickr"
                      data-flatpickr-wrap="true"
                      data-flatpickr-static="true"
                      data-flatpickr-mode="range"
                      data-flatpickr-alt-format="d/m/Y"
                      data-flatpickr-date-format="d/m/Y"
                    >
                      <a
                        href="javascript:void(0)"
                        class="link-date"
                        data-toggle
                      >
                        13/03/2018 to 20/03/2018
                      </a>
                      <input
                        class="d-none"
                        type="hidden"
                        value="13/03/2018 to 20/03/2018"
                        data-input
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div
                    class="chart-legend mt-0 mb-24pt justify-content-start"
                    id="ordersChartLegend"
                  ></div>
                  <div class="chart">
                    <canvas
                      id="ordersChart"
                      class="chart-canvas js-update-chart-bar"
                      data-chart-legend="#ordersChartLegend"
                      data-chart-prefix="$"
                      data-chart-suffix="k"
                      data-chart-line-background-color="gradient:primary"
                    ></canvas>
                  </div>
                </div>
              </div>

              <div class="page-separator">
                <div class="page-separator__text">Transactions</div>
              </div>

              <div class="card mb-0">
                <div
                  data-toggle="lists"
                  data-lists-values='[
      "js-lists-values-course", 
      "js-lists-values-revenue",
      "js-lists-values-fees"
    ]'
                  data-lists-sort-by="js-lists-values-revenue"
                  data-lists-sort-desc="true"
                  class="table-responsive"
                >
                  <table class="table table-nowrap table-flush">
                    <thead>
                      <tr class="text-uppercase small">
                        <th>
                          <a
                            href="javascript:void(0)"
                            class="sort"
                            data-sort="js-lists-values-course"
                          >
                            Course
                          </a>
                        </th>
                        <th class="text-center" style={{ width: "130px" }}>
                          <a
                            href="javascript:void(0)"
                            class="sort"
                            data-sort="js-lists-values-fees"
                          >
                            Fees
                          </a>
                        </th>
                        <th class="text-center" style={{ width: "130px" }}>
                          <a
                            href="javascript:void(0)"
                            class="sort"
                            data-sort="js-lists-values-revenue"
                          >
                            Revenue
                          </a>
                        </th>
                      </tr>
                    </thead>

                    <tbody class="list">
                      <tr>
                        <td>
                          <div class="media flex-nowrap align-items-center">
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
                            <div class="media-body">
                              <a
                                class="text-body js-lists-values-course"
                                href="boxed-instructor-edit-course.html"
                              >
                                <strong>Angular Routing In-Depth</strong>
                              </a>
                              <div class="text-muted small">34 Sales</div>
                            </div>
                          </div>
                        </td>
                        <td class="text-center text-black-70">
                          &dollar;<span class="js-lists-values-fees">120</span>{" "}
                          USD
                        </td>
                        <td class="text-center text-black-70">
                          &dollar;
                          <span class="js-lists-values-revenue">8,737</span> USD
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="media flex-nowrap align-items-center">
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
                            <div class="media-body">
                              <a
                                class="text-body js-lists-values-course"
                                href="boxed-instructor-edit-course.html"
                              >
                                <strong>Angular Unit Testing</strong>
                              </a>
                              <div class="text-muted small">38 Sales</div>
                            </div>
                          </div>
                        </td>
                        <td class="text-center text-black-70">
                          <span class="js-lists-values-fees sr-only">0</span>
                          <i class="material-icons text-muted">remove</i>
                        </td>
                        <td class="text-center text-black-70">
                          &dollar;
                          <span class="js-lists-values-revenue">2,521</span> USD
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="media flex-nowrap align-items-center">
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
                            <div class="media-body">
                              <a
                                class="text-body js-lists-values-course"
                                href="boxed-instructor-edit-course.html"
                              >
                                <strong>Introduction to TypeScript</strong>
                              </a>
                              <div class="text-muted small">8 Sales</div>
                            </div>
                          </div>
                        </td>
                        <td class="text-center text-black-70">
                          <span class="js-lists-values-fees sr-only">0</span>
                          <i class="material-icons text-muted">remove</i>
                        </td>
                        <td class="text-center text-black-70">
                          &dollar;
                          <span class="js-lists-values-revenue">1,413</span> USD
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="media flex-nowrap align-items-center">
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
                            <div class="media-body">
                              <a
                                class="text-body js-lists-values-course"
                                href="boxed-instructor-edit-course.html"
                              >
                                <strong>Learn Angular Fundamentals</strong>
                              </a>
                              <div class="text-muted small">31 Sales</div>
                            </div>
                          </div>
                        </td>
                        <td class="text-center text-black-70">
                          <span class="js-lists-values-fees sr-only">0</span>
                          <i class="material-icons text-muted">remove</i>
                        </td>
                        <td class="text-center text-black-70">
                          &dollar;
                          <span class="js-lists-values-revenue">1,234</span> USD
                        </td>
                      </tr>
                    </tbody>
                    <tfoot class="text-right">
                      <tr>
                        <td>
                          <ul class="pagination justify-content-start pagination-xsm m-0">
                            <li class="page-item disabled">
                              <a
                                class="page-link"
                                href="#"
                                aria-label="Previous"
                              >
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
                        </td>
                        <td colspan="2">
                          Total <i class="material-icons text-muted">remove</i>{" "}
                          <strong>&dollar;6,129 USD</strong>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
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
export default InstructorEarning;
