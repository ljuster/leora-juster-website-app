import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchImages } from '../../actions/imageActions'
// Selectors
import { imagesSelector, imagesLoadingSelector } from './ImageSection.selectors'
// Components
import Image from './Image'

export class ImagesList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    this.props.fetchImages()
  }

  renderImages = ({images}) => {
    return images.map(image => (
      <div>
        <Image image={image}/>
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderImages({images: this.props.images})}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  images: imagesSelector(state),
  loading: imagesLoadingSelector(state)
})

const mapDispatchToProps = {
  fetchImages: fetchImages
}

const { arrayOf, bool, func, object, shape, string } = PropTypes

ImagesList.propTypes = {
  images: arrayOf(object),
  fetchImages: func
}

ImagesList.defaultProps = {
  images: []
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesList)
