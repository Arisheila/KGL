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
            res.status(400).render('/report/register')
            console.log(err)
        } else {
            res.redirect('/report/register')
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

//delete routes
router.post('/register/delete', async (req, res) => {
    try {
        await Signup.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});





module.exports = router