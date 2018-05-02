import React, { Component } from 'react'
import axios from 'axios'
import ImageList from './ImageList'
import ImageForm from './ImageForm'
import style from './style'

class ImageBox extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
    this.loadImagesFromServer = this.loadImagesFromServer.bind(this)
    this.handleImageSubmit = this.handleImageSubmit.bind(this)
    this.handleImageUpdate = this.handleImageUpdate.bind(this)
    this.handleImageDelete = this.handleImageDelete.bind(this)
  }

  componentDidMount () {
    this.loadImagesFromServer()
    setInterval(this.loadImagesFromServer, this.props.pollInterval)
  }

  loadImagesFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({ data: res.data })
      })
  }

  handleImageSubmit(image) {
    let images = this.state.data
    image.id = Date.now()
    let newImages = images.concat([image])

    this.setState({ data: newImages })
    axios.post(this.props.url, image)
      .catch(err => {
        console.error(err);
        this.setState({ data: images });
      })
  }

  handleImageUpdate(id, image) {
    axios.put(`${this.props.url}/${id}`, image)
      .catch(err => {
        console.error(err);
      })
  }

  handleImageDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Comment deleted')
      })
      .catch(err => {
        console.error(err);
      })
  }

  render() {
    return (
      <div style={ style.imageBox }>
        <h2>Images:</h2>
        <ImageList
          data={ this.state.data }
          onImageUpdate={ this.handleImageUpdate }
          onImageDelete={ this.handleImageDelete }

        />
        <ImageForm onImageSubmit={ this.handleImageSubmit }/>
      </div>
    )
  }
}
export default ImageBox
