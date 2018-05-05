import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Styles from './assets.css'
// selectors
import { sectionSelector } from './selectors/assets_selectors'
// Components
import AssetsTabs from './assets_tabs'
import AssetsToolbar from './assets_toolbar'
import { IMAGES_SECTION, VIDEOS_SECTION } from './asset_constants'
import { ConnectedImagesList as ImagesList } from './images_list'
import { ConnectedVideosList as VideosList } from './videos_list'

const Assets = ({ section }) => (
  <div className={Styles.container}>
    <AssetsTabs />
    <AssetsToolbar />
    { section === IMAGES_SECTION && <ImagesList /> }
    { section === VIDEOS_SECTION && <VideosList /> }
  </div>
)

const mapStateToProps = state => ({
  section: sectionSelector(state)
})

Assets.propTypes = {
  section: PropTypes.string
}

Assets.defaultProps = {
  section: IMAGES_SECTION
}

export default connect(mapStateToProps)(Assets)
