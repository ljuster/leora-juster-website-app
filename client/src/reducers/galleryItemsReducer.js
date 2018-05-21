import mapKeys from 'lodash/mapKeys'
import { FETCH_GALLERY_ITEMS, FETCH_GALLERY_ITEM } from '../actions/types'

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_GALLERY_ITEM:
      const blog = action.payload
      return { ...state, [blog._id]: blog }
    case FETCH_GALLERY_ITEMS:
      return { ...state, ...mapKeys(action.payload, '_id') }
    default:
      return state
  }
}
