const express = require('express');
const router = express.Router();
const mainController = require('../app/controllers/main');

router.get('/',  mainController.index)

router.get('/:year&:genre',  mainController.search_year_genre)

router.get('/:num',  mainController.search_rating)



module.exports = router;