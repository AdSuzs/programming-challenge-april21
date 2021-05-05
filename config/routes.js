const express = require('express');
const router = express.Router();
const mainController = require('../app/controllers/main');

router.get('/',  mainController.index)

router.get('/movie',  mainController.search_year_genre)

router.get('/rating',  mainController.search_rating)



module.exports = router;