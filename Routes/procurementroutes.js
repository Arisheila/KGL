const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Procurement = require('../models/Procurement');


const router = express.Router();

router.get('/purchases', (req, res) => {
    res.render('procurement')
});

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

//making purchase report routes
router.get('/purchases/report',async (req, res) => {
    try{
        let items = await Procurement.find();
        let totalProcure = await Procurement.aggregate([
            {'$group':{_id:'$all',
            totalCost:{$sum:'$thecost'},
            totalTonnage:{$sum:'$tonnage'}
        }}

        ])
        res.render('purchasereport',{
            purchases:items,total:totalProcure[0]
           }  )
    }
    catch(err){
        console.log(err)
        res.send('failed to retrive purchases details')
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

// edit routes to get the form
// get the update form
router.get('/purchases/edit/:id', async(req, res) => {
try{
  const procure = await Procurement.findOne({_id:req.params.id});
  res.render('editpurchase', {purchase:procure});
}
catch(error){
  res.send("Purchases not found in DB");
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
  



module.exports = router