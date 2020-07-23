import React from "react"
import { Field, reduxForm } from "redux-form"
import { connect } from "react-redux"
import InstructorHeader from "../../Header/instructor-header"
import { AddCourseAction } from "../../Actions/courseActions"
import InsDrawer from "../../Drawer/instructordrawer"
import Form from "../../DynamicInput/form"
import UploadVideo from "../../Upload/uploadvideo"
// import UploadImage from "../../Upload/uploadimage"
import UploadImageVaishnav from "../../Upload/UploadImageVaishnav"
import UploadZip from "../../Upload/uploadzip"

class InstructorAddCourse extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    if (!this.props.Credentials.isAuthenticated) {
      this.props.history.push("/login")
    }
  }

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
            {/*<Field name="title" component={this.renderform} />*/}
            <div class="pt-32pt">
              <div class="container-fluid page__container d-flex flex-column flex-md-row align-items-center text-center text-sm-left">
                <div class="flex d-flex flex-column flex-sm-row align-items-center">
                  <div class="mb-24pt mb-sm-0 mr-sm-24pt">
                    <h2 class="mb-0">Add Course</h2>

                    <ol class="breadcrumb p-0 m-0">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>

                      <li class="breadcrumb-item active">Add Course</li>
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
                    <br />
                    <form onSubmit={this.props.handleSubmit(this.onsubmit)}>
                      <label class="form-label">Course title</label>
                      <Field name="title" component={this.renderform} />
                      <vr />
                      <label class="form-label">Discription</label>
                      <br />
                      <Field name="Discription" component={this.renderform} />
                      <label class="form-label">
                        <br />
                        Prerequisites and Requirements
                      </label>
                      <Field name="Prerequisites" component={this.renderform} />
                      <br />
                      <label class="form-label">
                        <br />
                        Target Students
                      </label>
                      <Field
                        name="TargetStudents"
                        component={this.renderform}
                      />
                      <br />
                      <Form />
                      <UploadZip title="Upload Your Zip files here" />
                      <br />
                      <br />
                      <button
                        type="submit"
                        class="btn btn-outline-dark mb-24pt mb-sm-0"
                      >
                        Add Course
                      </button>
                    </form>
                  </div>
                  <div class="col-md-4">
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
                    <UploadVideo title="Upload Your Sample/Cover Video here" />
                    <br />
                    <UploadImageVaishnav title="Upload Your Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InsDrawer />
        </div>
      </div>
    )
  }
  renderform(formProps) {
    console.log(formProps)
    return (
      <div>
        <input class="form-control form-control-lg" {...formProps.input} />
      </div>
    )
  }
  onsubmit = (formValues) => {
    console.log(formValues)
    this.props.AddCourseAction(formValues, this.props.history)
  }
}
const mapStateToProps = (state) => ({
  Credentials: state.Credentials
})

export default connect(mapStateToProps, { AddCourseAction })(
  reduxForm({
    form: "addcourse"
  })(InstructorAddCourse)
)
