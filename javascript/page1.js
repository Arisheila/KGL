const firstFocus = () => {
    let nop = document.registration.nameofProduce.focus();
    
};
// validating name of produce field
const valProduce = () => {
let nopp = document.registration.nameofProduce;
let namestring = /^[a-zA-Z0-9]+$/;
if(
    nopp.value == '' || !nopp.value.match(namestring)
){
    nopp.style.border='2px Solid red'
    return false;
}
else{
    nopp.style.border='2px Solid green'
    return true;
}

};

const valueTop =() => {
    let topp =document.registration.goods;
    if(
        topp.value == 'default'
    ){
        topp.style.border ='2px Solid red'
        return false;
    }
    else {
        topp.style.border='2px solid green'
        return true;
    }
    
};

const valdate = () =>{
    let datte = document.registration.date;
    if(
        datte.value == ''
    ){
        datte.style.border ='2px Solid red'
        return false;
    }
    else {
        datte.style.border ='2px solid green'
        return true;
    }
    
};

const valTon = ()=>{
    let tonn = document.registration.tonnage;
    let ton = /[0-9]/; 
    if(
        tonn.value.length <=3 || !tonn.value.match(ton)
    ){
        tonn.style.border ='2px solid red'
        return false;
    }
    else{
        tonn.style.border='2px solid green'
        return true;
    }
  
};
const valCost =()=>{
    let cost =document.registration.thecost;
    let costt = /[0-9]/;
    if(
        cost.value.length < 5 || !cost.value.match(costt)
    ){
        cost.style.border ='2px solid red'
        return false;
    }
    else{
        cost.style.border='2px solid green'
        return true;
    }
    
};

const valDealer =() =>{
    const dealer = document.registration.nameofthedealer;
    const ddealer = /^[a-zA-Z0-9]+$/;
    if(dealer.value.length < 2 || !dealer.value.match(ddealer)){
        dealer.style.border ='2px solid red';
        return false;
    }
    else{
        dealer.style.border ='2px solid green';
        return true;
    }
   
};

const valContact =() =>{
    const contact = document.registration.contact;
    const contactFormat= /[0-9]/;
    if(contact.value.match(contactFormat) && contact.value.length == 10){
        contact.style.border ='2px solid green';
        return true; 
    }
    else{
        contact.style.border='2px solid red';
        return false;
    }
};

















