const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/form', (req, res) => {
    res.render('form');
});

router.get('/absence', (req, res) => {

    const id = req.query.id

    res.render('Gestion', {
        id
    });
});


module.exports = router;