import React from 'react'
import Styles from './ImagesSection.css'

const ImagesTabs = ({ active, children, onClick }) => (
  <div className={Styles.tabs}>
    Images
    <div className={Styles.tabContainer}>
      <div className={Styles.border} />
      <div onClick={onClick} className={Styles.children}>
        {children}
      </div>
    </div>
  </div>
)

export default ImagesTabs
