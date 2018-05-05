import React from 'react'
// Components
import ImagesTabs from './ImagesTabs'
import ImagesToolbar from './ImagesToolbar'
import { ConnectedImagesList as ImagesList } from './images_list'

const ImagesContainer = () => (
  <div>
    <ImagesTabs />
    <ImagesToolbar />
    <ImagesList />
  </div>
)

export default ImagesContainer
