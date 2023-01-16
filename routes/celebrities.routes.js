const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('celebrities/celebrities');
});

router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

router.post('/create', (req, res, next) => {
    
})

module.exports = router;