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
        //restricting user session
        req.session.user=req.user
        let user = req.session.user;
        res.locals.user = user;
    if(req.session.user.role === 'director' || req.session.user.role === 'manager'){

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
        })}
       else{
        res.redirect('/sales')
       } 

    }
    catch(err){
        console.log(err)
        res.send('failed to retrive sales details')
    }
});
// credit Report
router.get('/credit/report',async (req, res) => {
    try{
        req.session.user=req.user;
        let user = req.session.user;
        res.locals.user = user;
        
    if(req.session.user.role === 'director' || req.session.user.role === 'manager'){
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
    else{res.redirect('/credit')}
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
//salesReport rendering
router.post('/sales/delete', async (req, res) => {
    try {
        await Sales.deleteOne({ _id: req.body.id })
        res.redirect('back')
    } catch (err) {
        res.status(400).send("Unable to delete item in the database");
    }
});

//editsale Routes Rendering update form
router.get('/sales/edit/:id', async(req, res) => {
    try{
      const sell = await Sales.findOne({_id:req.params.id});
      res.render('editsale', {sale:sell});
    }
    catch(error){
      res.send("Sales not found in DB");
    }
    });
//update Routes
router.post('/sales/edit', async(req, res) => {
    try{
      await Sales.findOneAndUpdate({_id:req.query.id},req.body);
      
      res.redirect('/sales/report');
    }
    catch(error){
      res.send("Failed to update sales report");
      console.log(error);
    }
   });   
   
   //editCredit Routes rending credit update form
   router.get('/credit/edit/:id', async(req, res) => {
    try{
      const deffered = await Credit.findOne({_id:req.params.id});
      res.render('editcredit', {credit:deffered});
    }
    catch(error){
      res.send("creditreport not found in DB");
    }
    });

    //update Routes for credit form
    router.post('/credit/edit', async(req, res) => {
        try{
          await Credit.findOneAndUpdate({_id:req.query.id},req.body);
          
          res.redirect('/credit/report');
        }
        catch(error){
          res.send("Failed to update credit report");
          console.log(error);
        }
       }); 







module.exports = router