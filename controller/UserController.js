const User = require('../models/User');
const Absence = require('../models/absence');

const allUsers = (req, res, next) => {
    User.find()
        .then(users => {
            req.users = users;
            next();
        })
        .catch(err => next(err));
}

const addUser = (req, res, next) => {

    const {
        fName,
        lName,
        email,
        tel
    } = req.body;

    const user = new User({
        full_name: fName + ' ' + lName,
        email,
        tel
    });

    user.save()
        .then(user => {
            req.messages = "record insertd succesfully";
            next();
        })
        .catch(err => next(err));
}


const addAbsence = (req, res, next) => {

    const {
        user_id,
        date,
        hours,
        motif
    } = req.body;

    const absence = new Absence({
        user_id,
        date,
        hours,
        motif
    });

    absence.save()
        .then(absence => {
            req.messages = "record insertd succesfully";
            req.absence = absence;
            next();
        })
        .catch(err => next(err));
}


const showUser = async (req, res, next) => {
    try {
        const absences = await Absence.find({
            user_id: req.body.id
        });

        const user = await User.findById(req.body.id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        req.user = user;
        req.absences = absences;
        next();

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
}

module.exports = {
    allUsers,
    addUser,
    showUser,
    addAbsence
};