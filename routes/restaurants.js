var express = require('express');
var router = express.Router();
var restaurantsController = require('../controllers/restaurantsController');

/* ADD RESTAURANT */
router.post('/', restaurantsController.addRestaurant);

/* SHOW RESTAURANTS */
router.get('/', restaurantsController.showRestaurants);

/* DELETE RESTAURANT */
router.delete('/:restaurantId', restaurantsController.deleteRestaurant);

/* UPDATE RESTAURANT */
router.put('/:restaurantId', restaurantsController.updateRestaurant);

router.get('/:restaurantId', restaurantsController.findRestaurant)

module.exports = router;
