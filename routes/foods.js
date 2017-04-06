var express = require('express');
var router = express.Router();
var foodsController = require('../controllers/foodsController');

/* ADD FOOD */
router.post('/', foodsController.addFood);

/* SHOW FOODS */
router.get('/', foodsController.showFoods);

/* DELETE FOOD */
router.delete('/:foodId', foodsController.deleteFood);

/* UPDATE FOOD */
router.put('/:foodId', foodsController.updateFood);

/* FIND 1 FOOD */
router.get('/:foodId', foodsController.findFood);

module.exports = router;
