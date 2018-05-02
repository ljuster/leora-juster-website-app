'use strict';
// first we import our dependencies…
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Image = require('./model/images');

// and create our instances
var app = express();
var router = express.Router();

// set our port to either a predetermined port number if you have set
// it up, or 3001
var port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To prevent errors from Cross Origin Resource Sharing, we will set
// our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
// and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next()
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'})
});

// adding the /images route to our /api router
router.route('/images')
  .get(function(req, res) {
    //looks at our Image Schema
    Image.find(function(err, images) {
      if (err)
        res.send(err)
      //responds with a json object of our database images.
      res.json(images)
    });
  })
  //post new image to the database
  .post(function(req, res) {
    var image = new Image();
    //body parser lets us use the req.body
    image.author = req.body.author;
    image.text = req.body.text;
    image.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Image successfully added!' });
    });
  });

//Add this after our get and post routes
//Adding a route to a specific comment based on the database ID
router.route('/images/:image_id')
  .put(function(req, res) {
    Image.findById(req.params.image_id, function(err, image) {
      if (err)
        res.send(err);
      (req.body.author) ? image.author = req.body.author : null;
      (req.body.text) ? image.text = req.body.text : null;
      image.save(function(err) {
        if (err)
          res.send(err);
        res.json({ message: 'Image has been updated' })
      });
    });
  })
  .delete(function(req, res) {
    Image.remove({ _id: req.params.image_id }, function(err, image) {
      if (err)
        res.send(err);
      res.json({ message: 'Image has been deleted' })
    })
  });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`)
});

//db config
mongoose.connect('mongodb://ljuster:AQ12ju%%@ds263759.mlab.com:63759/images');