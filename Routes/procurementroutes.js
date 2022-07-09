const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const Procurement = require('../models/Procurement');

// const procurement =require('../models/Procurement')
const router = express.Router();

router.get('/purchases', (req, res) => {
    res.render('procurement')
});

router.post('/purchases', async(req,res)=>{
    try{
        const procurement = new Procurement(req.body);
        await procurement.save()
        res.redirect('/procurementlist')
        console.log(req.body)
    }
    catch(err){
        // res.status(400).render('procurement')
    }
})

// router.get('/lists',async (req, res) => {
//     try{
//         let products = await Product.find();
//         res.render('productlist',{products:products, title:'Product details'})

//     }
//     catch(err){
//         console.log(err)
//         res.send('failed to retrive manager details')
//     }
// });

// //getting the edit file -rendering the edit file
// router.get('/edit/:id', async (req, res)=>{
//   try {
//     //line 40 the url will pick the specific id of the product list u want to editand will be displayed in the url
//     const item = await Product.findOne({_id:req.params.id});
//     res.render('edit_product',{product:item})
//   }
//   catch (error){
//     res.send('unable to find the message')
//   } 
//   });
// // update submit new product 
// router.post('/edit/:id', async(req, res)=>{
//     let product = {};
//     product.name = req.body.name;
//     product.price = req.body.price;
    
  
//     let query = {_id: req.params.id};
  
//     Product.update(query, product, (err)=>{
//       if(err) {
//         console.error(err);
//         return;
//       } else {
//         req.flash('success', 'Product Updated');
//         res.redirect('/');
//       }
//     })
//   });
// //   router.get('/editproduct', (req, res) => {
// //     res.render('edit_product', {title: 'Farm Manager Register'})
// // });


// // post updates
// router.post('/editproduct/:id', async(req,res)=>{
//   try{
//     //get what ever we find in DB and store in variable item
//     await Product.findOneAndUpdate({_id:req.query.id},req.body);
//     //myproduct is the name we use to refer to item in the .pug file
//     res.redirect('/products/lists');
//   }
//   catch(error){
//     res.send('Failed to update product')

//   }
// });




module.exports = router