const mongoose = require('mongoose')
const { Schema } = mongoose

const galleryItemSchema = new Schema({
  name: String,
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
})

mongoose.model('GalleryItem', galleryItemSchema)
