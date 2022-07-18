const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Signup =require('../models/Signup')
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register')
});

//to fill in a form /edit
router.post('/register', async(req, res) => {
    const signup = new Signup(req.body);
    console.log(req.body)
    await Signup.register(signup, req.body.password, (err) => {
        if (err) {
            res.status(400).render('register')
            console.log(err)
        } else {
            res.redirect('/login')
        }
    })

});



//router of getting registerReport
router.get('/report/register',async (req, res) => {
    try{
        let register = await Signup.find();
        res.render('registerReport',{signups:register})

    }
    catch(err){
        console.log(err)
        res.send('failed to retrive staff details')
    }
});





module.exports = router