import axios from "axios"
import { ProgressBar } from "react-bootstrap"
import { UploadImageAction } from "../Actions/actions"
import { connect } from "react-redux"

import React, { Component } from "react"

class UploadImage extends Component {
  constructor() {
    super()
    this.state = {
      // Initially, no file is selected
      selectedFile: null,
      Uploadpercentage: 0
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] })
  }

  // On file upload (click the upload button)
  onSubmit(e) {
    e.preventDefault()
    // Create an object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    // Details of the uploaded file
    // console.log(this.state.selectedFile)

    const options = {
      onUploadProgress: (ProgressEvent) => {
        const { loaded, total } = ProgressEvent
        let percent = Math.floor((loaded * 100) / total)
        console.log(`${loaded}kb of ${total}kb | ${percent}%`)
        if (percent < 100) {
          this.setState({ Uploadpercentage: percent })
        }
      }
    }
    // const per = this.state.Uploadpercentage
    const filename = this.state.selectedFile.name
    this.props.UploadImageAction(formData, options, filename)

    // Request made to the backend api
    // Send formData object
  }

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <br />
          <h5>Choose before Pressing the Upload button</h5>
        </div>
      )
    }
  }

  render() {
    const { Uploadpercentage } = this.state
    return (
      <div>
        <h3>{this.props.title}</h3>
        <form onSubmit={this.onSubmit} encType="multipart/form-data">
          <div>
            <input type="file" name="image" onChange={this.onFileChange} />
            {Uploadpercentage > 0 && (
              <ProgressBar
                now={Uploadpercentage}
                active
                label={`${Uploadpercentage}%`}
              />
            )}
            <button>Upload!</button>
          </div>
        </form>
        {this.fileData()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  Credentials: state.Credentials
})
export default connect(mapStateToProps, { UploadImageAction })(UploadImage)
