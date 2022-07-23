const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Procurement = require('../models/Procurement');
const Farm = require('../models/Farm');

const router = express.Router();

router.get('/purchases', (req, res) => {
    req.session.user=req.user
    if(req.session.user.role === 'director' || req.session.user.role === 'manager'){
    res.render('procurement')}
    else{
        res.redirect('/sales')
    }
    
});
// farm routes
router.get('/farm', (req, res) => {
    req.session.user=req.user
    if(req.session.user.role === 'director' || req.session.user.role === 'manager'){
    res.render('farm')}
    else{
        res.redirect('/sales')
    }
    
});
//posting purchases

router.post('/purchases', async(req,res)=>{
    try{
        const procurement = new Procurement(req.body);
        await procurement.save()
        res.redirect('/purchases/report')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('procurement')
        console.log(err)
    }
});

//farm posting
router.post('/farm', async(req,res)=>{
    try{
        const farm = new Farm(req.body);
        await farm.save()
        res.redirect('/farm/report')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('farm')
        console.log(err)
    }
});


//making purchase report routes
router.get('/purchases/report', async(req, res) => {
    try{
        req.session.user=req.user
    if(req.session.user.role === 'director' || req.session.user.role === 'manager'){
        let items = await Procurement.find();
        let totalProcure = await Procurement.aggregate([
            {'$group':{_id:'$all',
            totalCost:{$sum:'$thecost'},
            totalTonnage:{$sum:'$tonnage'}
        }}

        ])
        res.render('purchasereport',{
            purchases:items,total:totalProcure[0]
           }  )}
       else{res.redirect('/sales')}    
    }
    catch(err){
        console.log(err)
        res.send('failed to retrive purchases details')
    }
});

// Farm reports 
router.get('/farm/report', async(req, res) => {
    try{
        req.session.user=req.user
    if(req.session.user.role === 'director' || req.session.user.role === 'manager'){
        let items = await Farm.find();
        let totalProcure = await Farm.aggregate([
            {'$group':{_id:'$all',
            totalTonnage:{$sum:'$tonnage'}
        }}

        ])
        res.render('farmreport',{
            harvests:items,total:totalProcure[0]
           }  )}
       else{res.redirect('/sales')}    
    }
    catch(err){
        console.log(err)
        res.send('failed to retrive farm details')
    }
});




//router for deleting
router.post('/purchases/delete', async (req, res) => {
    try {
        await Procurement.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})

// farm deleting
router.post('/farm/delete', async (req, res) => {
    try {
        await Farm.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
})


// edit routes to get the form
// get the update form
router.get('/purchases/edit/:id', async(req, res) => {
try{
  const procure = await Procurement.findOne({_id:req.params.id});
  res.render('editpurchase', {purchase:procure});
  console.log(procure)
}
catch(error){
  res.send("Purchases not found in DB");
}
});

//Farm records
router.get('/farm/edit/:id', async(req, res) => {
    try{
      const item = await Farm.findOne({_id:req.params.id});
      res.render('editfarm', {harvest:item});
      
    }
    catch(error){
      res.send("Harvests not found in DB");
    }
    });
    

//  update purchase information
router.post('/purchases/edit', async(req, res) => {
  try{
    await Procurement.findOneAndUpdate({_id:req.query.id},req.body);
    
    res.redirect('/purchases/report');
  }
  catch(error){
    res.send("Failed to update procurement report");
    console.log(error);
  }
 });

 //update farm 
 router.post('/farm/edit', async(req, res) => {
    try{
      await Farm.findOneAndUpdate({_id:req.query.id},req.body);
      
      res.redirect('/farm/report');
    }
    catch(error){
      res.send("Failed to update farm report");
      console.log(error);
    }
   });
  



module.exports = router