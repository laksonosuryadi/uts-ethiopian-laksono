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

/* FIND 1 RESTAURANT */
router.get('/:restaurantId', restaurantsController.findRestaurant)


/* RELEASE 3 */
router.post('/addmenu', restaurantsController.addMenu);
router.get('/showmenu', restaurantsController.showMenu);

module.exports = router;
