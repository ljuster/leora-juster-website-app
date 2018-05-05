import { createSelector } from 'reselect'
import { get } from 'lodash'

const images = state => get(state, 'entities.images') || []
export const imagesSelector = createSelector(
  images,
  images => images
)

const imagesLoading = state => get(state, 'entities.images.loading')
export const imagesLoadingSelector = createSelector(
  imagesLoading,
  imagesLoading => imagesLoading
)
