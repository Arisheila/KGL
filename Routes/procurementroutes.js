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
        let procure = await Procurement.find();
        res.render('purchasereport',{purchases:procure})

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

  
// router.get('/editproduct/:id', async(req, res) => {
//     try{
//       // 
//       // get what ever we find in DB and store in variable item
//       const item = await Product.findOne({id:req.params.id});
//       // product:item means call this item by var nme product in .pug file
//       res.render('edit_product',{product:item});
//     }
//     catch(error){
//       res.send("Product not found in DB");
//     }
//    });
//   // post updates
  
//    router.post('/editproduct', async(req, res) => {
//     try{
     
//       await Product.findOneAndUpdate({_id:req.query.id},req.body);
     
//       res.redirect('/purchases/report');
//     }
//     catch(error){
//       res.send("Failed to update purchase report");
//     }
//    });
  

//edit for updating

// router.post('/editproduct', async(req, res) => {
//     try{
     
//       await Product.findOneAndUpdate({_id:req.query.id},req.body);
     
//       res.redirect('/products/lists');
//     }
//     catch(error){
//       res.send("Failed to update product");
//     }
//    });
  



module.exports = router