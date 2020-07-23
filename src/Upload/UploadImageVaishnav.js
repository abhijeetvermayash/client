import React, { Component } from "react"
// import { UploadImageAction } from '../Actions/actions'
import ImageUploader from "react-images-upload"
import axios from "axios"

class UploadImageVaishnav extends Component {
  constructor(props) {
    super(props)
    this.state = { pictures: [] }
    this.onDrop = this.onDrop.bind(this)
    this.uploadImages = this.uploadImages.bind(this)
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })
  }

  uploadImages() {
    console.log(this.state.pictures)
    let uploadPromises = this.state.pictures.map((image) => {
      let data = new FormData()
      data.append("image", image, image.name)
      console.log(data)
      return axios.post("/image/upload", data)
    })
    axios
      .all(uploadPromises)
      .then((results) => {
        console.log(results)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ImageUploader
          withIcon={true}
          withPreview={true}
          buttonText="Choose image"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <button onClick={this.uploadImages}>Upload image</button>
      </div>
    )
  }
}

export default UploadImageVaishnav
