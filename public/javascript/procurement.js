const firstFocus = () => {
    let nop = document.registration.nameofProduce.focus();
    
};
// validating name of produce field
const valProduce = () => {
let nopp = document.registration.nameofProduce;
if(
    nopp.value == ''
){
    nopp.style.border='2px Solid red'
    return false;
}
else{
    nopp.style.border='2px Solid white'
    return true;
}

};

// const valueTop =() => {
//     let topp =document.registration.goods;
//     if(
//         topp.value == 'default'
//     ){
//         topp.style.border ='2px Solid red'
//         return false;
//     }
//     else {
//         topp.style.border='2px solid brown'
//         return true;
//     }
    
// };

const valdate = () =>{
    let datte = document.registration.date;
    if(
        datte.value == ''
    ){
        datte.style.border ='2px Solid red'
        return false;
    }
    else {
        datte.style.border ='2px solid white'
        return true;
    }
    
};

const valTon = ()=>{
    let tonn = document.registration.tonnage;
    let ton = /[0-9]/; 
    if(
        tonn.value.length <3 || !tonn.value.match(ton)
    ){
        tonn.style.border ='2px solid red'
        return false;
    }
    else{
        tonn.style.border='2px solid white'
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
        cost.style.border='2px solid white'
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
        dealer.style.border ='2px solid white';
        return true;
    }
   
};

const valContact =() =>{
    const contact = document.registration.contact;
    const contactFormat= /[0-9]/;
    if(contact.value.match(contactFormat) && contact.value.length == 10){
        contact.style.border ='2px solid white';
        return true; 
    }
    else{
        contact.style.border='2px solid red';
        return false;
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

let valPrice  = ()=>{
    let Pricey = document.registration.pricetosold;
    let price = /[0-9]/;
    if( Pricey.value.length >= 5 && Pricey.value.match(price)){
        Pricey.style.border ='2px solid white'
    
        return true;
    }else{
        Pricey.style.border ='2px solid Red'
        Pricey.focus();
        return false;
        
    }
}


// let valPrice = (pricey,paiderror)=>{
//     let price = /[0-9]/;
//     if(pricey.value.match(price) && pricey.value.length >= 5){
    
//         return true;
//     }else{
//         paiderror.innerHTML = 'Enter valid amount';
//         paiderror.style.color = 'red';
//         paiderror.style.fontSize = '11px';
//         pricey.focus();
//         return false;
        
//     }
// }

const valTop =() =>{
    let top= document.registration.goods;
    let toppe = /^[a-zA-Z]+$/;
    if(!top.value.match(toppe)|| top.value.length < 2){
        top.style.border ='2px solid red';
        return false;
    }
    else{
        top.style.border ='2px solid white';
        top.focus();
        return true;
    }
   
};

const valCom =() => {
    let comment = document.registration.comments;
    if(
        comment.value == ''
    ){
        comment.style.border ='2px Solid red'
        return false;
    }
    else {
        comment.style.border='2px solid white'
        comment.focus();
        return true;
    }
    
};














