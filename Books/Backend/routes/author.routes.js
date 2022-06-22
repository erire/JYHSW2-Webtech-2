const express = require('express');
const app = express();
 
const authorRoute = express.Router();
let Author = require('../model/Author');

authorRoute.route('/add-author').post((req, res, next) => {
    Author.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
authorRoute.route('/').get((req, res) => {
    Author.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
authorRoute.route('/read-author/:id').get((req, res) => {
    Author.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
authorRoute.route('/update-author/:id').put((req, res, next) => {
    Author.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Author updated successfully!')
    }
  })
})
 
authorRoute.route('/delete-author/:id').delete((req, res, next) => {
    Author.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = authorRoute;