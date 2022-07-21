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
    if(req.session.user.role === 'director'){
        res.redirect('/sales/report')
    }
    if(req.session.user.role === 'manager'){
        res.redirect('/purchases')
    }
    if(req.session.user.role === 'salesagent'){
        res.redirect('/sales')
    }
    //take user to the page u want on successful login
    
});

router.get('/logout', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/login')
    })
})

module.exports = router