// BlogNew shows BlogForm and BlogFormReview
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import GalleryItemForm from './GalleryItemForm'
import GalleryItemFormReview from './GalleryItemFormReview'

class GalleryItemNew extends Component {
  state = { showFormReview: false }

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <GalleryItemFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      )
    }

    return (
      <GalleryItemForm
        onGalleryItemSubmit={() => this.setState({ showFormReview: true })}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

export default reduxForm({
  form: 'galleryItemForm'
})(GalleryItemNew)
