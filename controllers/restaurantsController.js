var Restaurant = require('../models/restaurant');

var addRestaurant = function(req, res, next) {
  Restaurant.create({
    "name": req.body.name,
    "owner": req.body.owner,
    "address": req.body.address,
    "open_status": req.body.open_status
  }, function(err, restaurant) {
    if(err){
      res.send(err)
    } else {
      res.send(restaurant)
    }
  });
}

var showRestaurants = function(req, res, next) {
  Restaurant.find(function(err, restaurants) {
    if(err) {
      res.send({error: err})
    } else {
      res.send(restaurants)
    }
  });
}

var deleteRestaurant = function(req, res) {
  Restaurant.findByIdAndRemove(req.params.restaurantId, function (err, restaurant) {
    if(err){
      res.send('Deleting Restaurant Failed')
    } else {
      res.send(`Restaurant has been succesfully deleted from Database.`)
    }
  });
}

var updateRestaurant = function(req, res) {
  Restaurant.findOneAndUpdate(
    {
      "_id" : req.params.restaurantId
    },
    {
      "name": req.body.name,
      "owner": req.body.owner,
      "address": req.body.address,
      "open_status": req.body.open_status
    }, function(err, restaurant) {
      if(err){
        res.send(err)
      } else {
        res.send(`Restaurant info with name ${restaurant.name}, has been succesfully updated.`)
      }
    })
}

var findRestaurant = function(req, res) {
  Restaurant.findOne({ _id: req.params.restaurantId}, function (err, restaurants){
    if(err) {
      res.send({error: err})
    } else {
      res.send(restaurants)
    }
  });
}

module.exports = {
  addRestaurant,
  showRestaurants,
  deleteRestaurant,
  updateRestaurant,
  findRestaurant
}
