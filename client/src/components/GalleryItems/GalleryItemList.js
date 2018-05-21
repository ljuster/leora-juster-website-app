import React, { Component } from 'react'
import map from 'lodash/map'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchGalleryItems } from '../../actions'

class GalleryItemList extends Component {
  componentDidMount() {
    this.props.fetchGalleryItems()
  }

  renderGalleryItems() {
    return map(this.props.galleryItems, galleryItem => {
      return (
        <div className="card darken-1 horizontal" key={galleryItem._id}>
          <div className="card-stacked">
            <div className="card-content">
              <span className="card-title">{galleryItem.name}</span>
              <p>{galleryItem.content}</p>
            </div>
            <div className="card-action">
              <Link to={`/gallery_items/${galleryItem._id}`}>Read</Link>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div>{this.renderGalleryItems()}</div>
  }
}

function mapStateToProps({ galleryItems }) {
  return { galleryItems }
}

export default connect(mapStateToProps, { fetchGalleryItems })(GalleryItemList)
