const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Signup =require('../models/Signup')
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('registers')
});

router.post('/register', async(req, res) => {
    const signup = new Signup(req.body);
    console.log(req.body)
    await Signup.register(signup, req.body.password, (err) => {
        if (err) {
            res.status(400).render('registers')
            console.log(err)
        } else {
            res.redirect('/login')
        }
    })

})

module.exports = router