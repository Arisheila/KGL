const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// const Manager =require('../models/Manager')
const router = express.Router();

router.get('/landing', (req, res) => {
    res.render('kgl')
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login', passport.authenticate('local',{failureRedirect:'/login'}),
(req,res)=>{
    req.session.user=req.user
    //take user to dasboard on successful login
    res.redirect('/sales')
}

)
router.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})

module.exports = router