// BlogForm shows a form for a user to add input
import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, getFormValues, formValueSelector } from 'redux-form'
import { Link } from 'react-router-dom'
import GalleryItemField from './GalleryItemField'
import formFields from './formFields'

class GalleryItemForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={GalleryItemField}
          type="text"
          label={label}
          name={name}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onGalleryItemSubmit)}>
          {this.renderFields()}
          <img src={this.props.imageUrl} />
          <Link to="/gallery_items" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })

  return errors
}

const GalleryItemFormExport = reduxForm({
  validate,
  form: 'galleryItemForm',
  destroyOnUnmount: false
})(GalleryItemForm)

const formSelector = formValueSelector('galleryItemForm')

const mapStateToProps = state => ({
  imageUrl: formSelector(state, 'image_url')
})

export default connect(mapStateToProps, null)(GalleryItemFormExport)

