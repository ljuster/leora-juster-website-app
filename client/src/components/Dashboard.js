import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from './GalleryItems/GalleryItemList'
import Styles from './Dashboard.css'
import { fetchGalleryItems } from '../../../client/src/actions/index'

const Dashboard = () => {
  return (
    <div className="container">
      <BlogList />
      <div className="fixed-action-btn">
        <Link to="/gallery_items/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
        <div className="row">
          <div className="col s12 m6 l2">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                {fetchGalleryItems()}
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
