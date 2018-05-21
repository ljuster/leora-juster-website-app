import axios from 'axios'
import { FETCH_USER, FETCH_GALLERY_ITEMS, FETCH_GALLERY_ITEM } from './types'

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token)

  dispatch({ type: FETCH_USER, payload: res.data })
}

export const submitGalleryItem = (values, file, history) => async dispatch => {
  const uploadConfig = await axios.get('/api/upload')

  const upload = await axios.put(uploadConfig.data.url, file, {
    headers: {
      'Content-Type': file.type
    }
  })

  const res = await axios.post('/api/gallery_items', {
    ...values,
    imageUrl: uploadConfig.data.key
  })

  history.push('/gallery_items')
  dispatch({ type: FETCH_GALLERY_ITEM, payload: res.data })
}

export const fetchGalleryItems = () => async dispatch => {
  const res = await axios.get('/api/gallery_items')

  dispatch({ type: FETCH_GALLERY_ITEMS, payload: res.data })
}

export const fetchGalleryItem = id => async dispatch => {
  const res = await axios.get(`/api/gallery_items/${id}`)

  dispatch({ type: FETCH_GALLERY_ITEM, payload: res.data })
}
