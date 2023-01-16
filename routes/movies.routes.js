const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model');

// GET all movies
// ROUTE: /movies
router.get('/', async (req, res, next) => {
    try {
        const movies = await Movie.find({}).sort({ title: 1 });
        console.log(movies)
        res.render('movies/movies', {movies});
    } catch (error) {
        next(error)
    }
});

// GET new movie page
// ROUTE: /movies/create
router.get('/create', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find({}).sort({ name: 1});
        res.render('movies/new-movie', { celebrities });
    } catch (error) {
        next(error);
    }
})
// POST new movie
// ROUTE: /movies/create
router.post('/create', async (req, res, next) => {
    const { title, genre, plot, cast } = req.body;
    try {
        await Movie.create({ title, genre, plot, cast });
        res.redirect('/movies');
    } catch (error) {
        next(error);
    }
})

module.exports = router;