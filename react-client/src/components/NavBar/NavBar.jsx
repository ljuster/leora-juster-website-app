import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Styles from './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <header>
        <div>
          <nav className={Styles.navBar}>
            <ul className={Styles.container}>
              <li className={Styles.left}>
                <Link to="">LINK
                </Link>
              </li>
              <li className={Styles.middle}>
                middle
              </li>
              <li className={Styles.right}>
                right
              </li>
              <li className={Styles.right}>
                <button className={Styles.feedback} onClick={() => console.log('clicked')}>BUTTON
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

    )
  }
}
export default NavBar