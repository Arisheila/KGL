const Validation =()=>{

    let produce =document.registration.producename;
    let ton = document.registration.tonnage;
    let paid = document.registration.amountpaid;
    let buyer = document.registration.buyername;
    let salee = document.registration.agentsname;
    let ddate = document.registration.dateandtime;
    let branchy = document.registration.branch;

    //name of produce    
    if(
        produce.value == ''
    ){
        produce.style.border ='2px Solid red'
        return false;
    }
    else {
        produce.style.border='2px solid white'
        // return true;
    }

    //branch
    if(
        branchy.value == ''
    ){
        branchy.style.border ='2px Solid red'
        return false;
    }
    else {
        branchy.style.border='2px solid white'
        // return true;
    }

    //amount paid 
    const aPaid = /[0-9]/;
    if(paid.value.length < 5 || !paid.value.match(aPaid)){
        paid.style.border ='2px solid red';
        return false;
    }
    else{
        paid.style.border ='2px solid white';
        // return true;
    }
     //name of buyer 
     const aBuyer = /^[a-zA-Z0-9]+$/;
     if(buyer.value.length < 2 || !buyer.value.match(aBuyer)){
         buyer.style.border ='2px solid red';
         return false;
     }
     else{
         buyer.style.border ='2px solid white';
         // return true;
     }
 
     //saleagents 
    const aSale = /^[a-zA-Z0-9]+$/;
    if(salee.value.length<2 || !salee.value.match(aSale)){
        salee.style.border ='2px solid red';
        return false;
    }
    else{
        salee.style.border ='2px solid white';
        // return true;
    }
    
    //date
    if(
        ddate.value == ''
    ){
        ddate.style.border ='2px Solid red'
        return false;
    }
    else {
        ddate.style.border ='2px solid white'
        // return true;
    }
          
    //tonnage 
    const aTon =  /[0-9]/;
    if( ton.value.length <5 || !ton.value.match(aTon)){
        ton.style.border = '2px solid red';
        return false;
    }
    else{
        ton.style.border ='2px solid white';
        // return true;
    }

return true
}

//onblur 
const firstFocus  =()=>{

    let sale = document.registration.nameofProduce.focus();
};

const valProd =() => {
    let produce =document.registration.producename;
    if(
        produce.value == ''
    ){
        produce.style.border ='2px Solid red'
        return false;
    }
    else {
        produce.style.border='2px solid white'
        return true;
    }
    
};

const valTonnage = () =>{
    const ton = document.registration.tonnage;
    const aTon =  /[0-9]/;
    if( ton.value.length <5 || !ton.value.match(aTon)){
        ton.style.border = '2px solid red';
        return false;
    }
    else{
        ton.style.border ='2px solid white';
        return true;
    }
}

const valPaid = () =>{
    const paid = document.registration.amountpaid;
    const aPaid = /[0-9]/;
    if(paid.value.length < 5 || !paid.value.match(aPaid)){
        paid.style.border ='2px solid red';
        return false;
    }
    else{
        paid.style.border ='2px solid white';
        return true;
    }
};


const valBuyer =() =>{
    const buyer = document.registration.buyername;
    const aBuyer = /^[a-zA-Z0-9]+$/;
    if(buyer.value.length < 2 || !buyer.value.match(aBuyer)){
        buyer.style.border ='2px solid red';
        return false;
    }
    else{
        buyer.style.border ='2px solid white';
        return true;
    }
};


const valSale = () =>{
    const salee = document.registration.agentsname;
    const aSale = /^[a-zA-Z0-9]+$/;
    if(salee.value.length<2 || !salee.value.match(aSale)){
        salee.style.border ='2px solid red';
        return false;
    }
    else{
        salee.style.border ='2px solid white';
        return true;
    }
};

const valDate = () =>{
    let ddate = document.registration.dateandtime;
    if(
        ddate.value == ''
    ){
        ddate.style.border ='2px Solid red'
        return false;
    }
    else {
        ddate.style.border ='2px solid white'
        return true;
    }
    
};

const valBran =() => {
    let branchy = document.registration.branch;
    if(
        branchy.value == ''
    ){
        branchy.style.border ='2px Solid red'
        return false;
    }
    else {
        branchy.style.border='2px solid white'
        return true;
    }
    
};
