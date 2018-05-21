import React from 'react'
import { Link } from 'react-router-dom'
import BlogList from './blogs/BlogList'
import Styles from './Dashboard.css'
import { DynamicTable } from './DynamicTable'
import { image_data } from '../data/image_data'

const Dashboard = () => {
  return (
    <div className="container">
      <BlogList />
      <div className="fixed-action-btn">
        <Link to="/blogs/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
        <div className="row">
          <div className="col s12 m6 l2">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <img src="https://murmuring-island-68516.herokuapp.com/assets/monaLJ-064504c35abef3faffb6ae85a39d9ece3cada1e9f05d7cb2a9b5781ea80a18ac.png" />

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
