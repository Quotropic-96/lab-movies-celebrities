const express = require('express');
const router = express.Router();
const Celebrity = require('../models/Celebrity.model');

// GET all celebrities
// ROUTE: /celebrities
router.get('/', (req, res, next) => {
    res.render('celebrities/celebrities');
});

// GET form for new celebrity
// ROUTE: /celebrities/create
router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity');
});

// POST for new celebrity
// ROUTE: /celebrities/create
router.post('/create', async (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body;
    try {
        await Celebrity.create({ name, occupation, catchPhrase });
        res.redirect('/celebrities');
    } catch (error) {
        next(error);
    }
});

module.exports = router;