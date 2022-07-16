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

})
// router for register reports
// router.get('/report/register', async(req, res) => {
//     try{
//         let register = await Signup.find()
//         if (req.query.signup) {
//             register = await Signup.find({ signup: req.query.firstname});
//         }
//         res.render('registerReport', { signups:register})

//     }catch(err){
//         res.status(400).send("Unable to find items in the database");
//     }
// });


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