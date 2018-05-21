import { combineReducers } from 'redux'
import { reducer as reduxForm } from 'redux-form'
import galleryItemsReducer from './galleryItemsReducer'

export default combineReducers({
  form: reduxForm,
  galleryItems: galleryItemsReducer
})
