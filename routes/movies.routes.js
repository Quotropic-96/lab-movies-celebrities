const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model');

//GET all movies
// ROUTE: /movies
router.get('/', (req, res, next) => {
    res.render('movies/movies');
});

module.exports = router;