import React from 'react'
// Components
import ImagesTabs from './ImagesTabs'
import { ConnectedImagesList as ImagesList } from './images_list'

const ImagesToolbar = () => (
  <div>
    <ImagesTabs />
    <ImagesToolbar />
    <ImagesList />
  </div>
)

export default ImagesToolbar
