import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGalleryItem } from '../../actions'

class GalleryItemShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id)
  }

  renderImage() {
    if (this.props.galleryItem.imageUrl) {
      return (
        <img
          src={
            'https://s3-us-west-2.amazonaws.com/my-blog-bucket-123/' +
            this.props.galleryItem.imageUrl
          }
        />
      )
    }
  }

  render() {
    if (!this.props.galleryItem) {
      return ''
    }

    const { name, imageUrl } = this.props.galleryItem

    return (
      <div>
        <h3>{name}</h3>
        <p>{imageUrl}</p>
        {this.renderImage()}
      </div>
    )
  }
}

function mapStateToProps({ galleryItems }, ownProps) {
  return { galleryItems: galleryItems[ownProps.match.params._id] }
}

export default connect(mapStateToProps, { fetchGalleryItem })(GalleryItemShow)
