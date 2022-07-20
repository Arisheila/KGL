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
        let items = await Sales.find();
        let totalSales = await Sales.aggregate([
            {'$group':{_id:'$all',
            totalRevenue:{$sum:'$amountpaid'},
            totalTonnage:{$sum:'$tonnage'}

            }}
        ])
        res.render('salesreport',{
            sales:items,
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
        let items = await Credit.find();
        let totalCredit = await Credit.aggregate([
            {'$group':{_id:'$all',
            totalAmountdue:{$sum:'$amountdue'},
            totalTonnage:{$sum:'$tonnage'}

            }}
        ])
        res.render('creditreport',{
            credits:items, total:totalCredit[0]})

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

// edit routes for sales report
// get the update form
// router.get('/sales/edit/:id', async(req, res) => {
//     try{
     
//       const sell = await Sales.findOne({id:req.params.id});
//       res.render('editsale', {sale:sell});
//     }
//     catch(error){
//       res.send("Sales not found in DB");
//     }
//     });



    //  update sales infotmation
    // router.post('/purchases/edit/', async(req, res) => {
    //   try{
        
    //     await Procurement.findOneAndUpdate({_id:req.query.id},req.body);
        
    //     res.redirect('/purchases/report');
    //   }
    //   catch(error){
    //     res.send("Failed to update procurement report");
    //     console.log(error);
    //   }
    //  });


    // edit routes for Credit report
// get the update form
router.get('/credit/edit/:id', async(req, res) => {
    try{
     
      const deffered = await Credit.findOne({id:req.params.id});
      res.render('editcredit', {sale:deffered});
    }
    catch(error){
      res.send("Credit not found in DB");
    }
    });
      






module.exports = router