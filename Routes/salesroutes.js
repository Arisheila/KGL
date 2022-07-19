const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const Sales = require('../models/Sales')
const Credit = require('../models/Credit')
const router = express.Router();

router.get('/sales', (req, res) => {
    res.render('salesform')
});
//credit  routes
router.get('/credit', (req, res) => {
    res.render('creditform')
});

//requiring models
router.post('/sales', async(req,res)=>{
    try{
        const sales = new Sales(req.body);
        await sales.save()
        res.redirect('/sales/report')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('salesform')
    }
})

// requiring models for credit model
router.post('/credit', async(req,res)=>{
    try{
        const credit = new Credit(req.body);
        await credit.save()
        res.redirect('/credit/report')
        console.log(req.body)
    }
    catch(err){
        res.status(400).render('creditform')
    }
})

// reports rendering 
router.get('/sales/report',async (req, res) => {
    try{
        let sell = await Sales.find();
        let totalSales = await Sales.aggregate([
            {'$group':{_id:'$all',
            totalRevenue:{$sum:'$amountpaid'},
            totalTonnage:{$sum:'$tonnage'}

            }}
        ])
        res.render('salesreport',{
            sales:sell,
            total:totalSales[0] 
        })

    }
    catch(err){
        console.log(err)
        res.send('failed to retrive sales details')
    }
});

router.get('/credit/report',async (req, res) => {
    try{
        let deferred = await Credit.find();
        let totalCredit = await Credit.aggregate([
            {'$group':{_id:'$all',
            totalAmountdue:{$sum:'$amountdue'},
            totalTonnage:{$sum:'$tonnage'}

            }}
        ])
        res.render('creditreport',{
            credits:deferred, total:totalCredit[0]})

    }
    catch(err){
        console.log(err)
        res.send('failed to retrive credit details')
    }
});

// delete routes
//credit
router.post('/credit/delete', async (req, res) => {
    try {
        await Credit.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});
//sales
router.post('/sales/delete', async (req, res) => {
    try {
        await Sales.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});

//edit editing the salesReport
router.get('/editsale?id=', async(req, res) => {
    try{
      const sell = await Sales.findOne({id:req.params.id});
      res.render('editSale',{sale:sell});
    }
    catch(error){
      res.send("Sale not found in DB");
    }
   });








// router.get('/sales/report', async(req, res) => {
//     try{
//         let sale = await Sales.find()
//         if (req.query.sale) {
//             register = await Sales.find({ sale: req.query.producename});
//         }
//         res.render('salesreport', {sales:sale})

//     }catch(err){
//         res.status(400).send("Unable to find items in the database");
//     }
// });

// router.get('/lists',async (req, res) => {
//     try{
//         let products = await Product.find();
//         res.render('productlist',{products:products, title:'Product details'})

//     }
//     catch(err){
//         console.log(err)
// //         res.send('failed to retrive manager details')
// //     }
// // });

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