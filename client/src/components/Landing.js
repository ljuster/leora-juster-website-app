import React from 'react'
import { DynamicTable } from './DynamicTable'
import { image_data } from '../data/image_data'

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Blogster!
      </h1>
      <DynamicTable data={image_data} headers={['Name', 'Image', 'Score']} />

    </div>
  )
}

export default Landing;
