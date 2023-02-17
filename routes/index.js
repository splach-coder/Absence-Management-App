const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/all', UserController.allUsers, (req, res) => {
    res.render('Liste', {
        users: req.users
    });
});

router.post('/add', UserController.addUser, UserController.allUsers, (req, res) => {
    res.render('Liste', {
        users: req.users,
        message: req.messages
    });
});


router.post('/absence/show', UserController.showUser, (req, res) => {
    res.send({
        user: req.user,
        absences: req.absences
    });
});


router.post('/absence/add', UserController.addAbsence, (req, res) => {
    // res.render('Gestion', {
    //     id: req.absence.user_id
    // });

    res.redirect('http://localhost:3000/absence?id=' +  req.absence.user_id);
});

module.exports = router;