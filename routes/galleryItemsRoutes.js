const mongoose = require('mongoose');

const GalleryItem = mongoose.model('GalleryItem');

module.exports = app => {
  app.get('/api/gallery_items/:id', async (req, res) => {
    const blog = await GalleryItem.findOne({
      _id: req.params.id
    });

    res.send(blog);
  });

  app.get('/api/gallery_items', async (req, res) => {
    const galleryItems = await GalleryItem.find({ _user: req.user.id }).cache({
      key: req.user.id
    });

    res.send(galleryItems);
  });

  app.post('/api/gallery_items', async (req, res) => {
    const { name, imageUrl } = req.body;

    const galleryItem = new GalleryItem({
      imageUrl,
      name,
      _user: req.user.id
    });

    try {
      await galleryItem.save();
      res.send(galleryItem);
    } catch (err) {
      res.send(400, err);
    }
  });
};
