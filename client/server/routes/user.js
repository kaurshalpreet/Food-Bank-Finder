const express = require('express')
const router = express.Router()
const User = require('../database/models/user')
const passport = require('../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    const { firstName ,lastName ,email , password } = req.body
    // ADD VALIDATION
    console.log(req.body);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${email}`
            })
        }
        else {
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    console.log(req.user + "hi")
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out my page for real' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

router.post('/save', (req,res) => {
 if (req.user) {
     const input = req.body.input;



const newUser = new User({
    input: input
 })
 

     newUser.findOneAndUpdate(
        {email: req.user.email}, // find a document with that filter
        {input: newUser.input}, // document to insert when nothing was found
        {upsert: true, new: true, runValidators: true}, // options
        function (err, doc) { // callback
            if (err) {
                console.log(err);
            } else {
                console.log("message");
            }
        }
    );

 }
})




module.exports = router