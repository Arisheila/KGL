const Validation =()=>{

    let buyer = document.registration.buyername;
    let nin = document.registration.nationalid;
    let loc =document.registration.location;
    let contt = document.registration.contact;
    let due =document.registration.amountdue;
    let sagent =document.registration.salesagent;
    let ddate = document.registration.date;
    let prod =document.registration.nameofproduce;
    let branchy = document.registration.branch;
    // let tonn = document.registration.tonnage;
    let top= document.registration.goods;
    let ton = document.registration.tonnage;
    let dispatchDate = document.registration.dispatch;




//buyername
    let bBuyer = /^[a-zA-Z0-9]+$/;
    if(
        buyer.value.length < 2|| !buyer.value.match(bBuyer)
    ){
        buyer.style.border='2px Solid red'
        return false;
    }
    else{
        buyer.style.border='2px Solid white'
        // return true;
         }
//national ID
const ninValid = /^[a-zA-Z0-9]+$/;
if(nin.value.match(ninValid) && nin.value.length == 14){
    nin.style.border ='2px solid white';
    // return true; 
}
else{
    nin.style.border='2px solid red';
    return false;
}
//Location      
const locion = /^[a-zA-Z0-9]+$/;
    if(loc.value.length < 2 || !loc.value.match(locion)){
        loc.style.border= '2px solid red';
        return false;
    }
    else{
        loc.style.border='2px solid white'
        // return true;
    }
    //contact
const contactFormat= /[0-9]/;
    if(contt.value.match(contactFormat) && contt.value.length == 10){
        contt.style.border ='2px solid white';
        // return true; 
    }
    else{
        contt.style.border='2px solid red';
        return false;
    }   
    //amount Due 
    const amount = /^[a-zA-Z0-9]+$/;
    if(due.value.length < 5 || !due.value.match(amount)){
        due.style.border= '2px solid red';
        return false;
    }
    else{
        due.style.border='2px solid white'
        // return true;
    }  

    //salesagent
    const amounttt = /^[a-zA-Z0-9]+$/;
    if(sagent.value.length < 2 || !sagent.value.match(amounttt)){
        sagent.style.border= '2px solid red';
        return false;
    }
    else{
        sagent.style.border='2px solid white'
        // return true;
    }

    // date
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
    //name of produce
    if(
        prod.value == ''
    ){
        prod.style.border ='2px Solid red'
        return false;
    }
    else {
        prod.style.border='2px solid white'
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

//Tonnage
// let ton = /[0-9]/; 
//         if(
//             tonn.value.length <=3 || !tonn.value.match(ton)
//         ){
//             tonn.style.border ='2px solid red'
//             return false;
//         }
//         else{
//             tonn.style.border='2px solid white'
//             // return true;
//         }
//type of goods
let toppe = /^[a-zA-Z]+$/;
        if(!top.value.match(toppe)|| top.value.length < 2){
            top.style.border ='2px solid red';
            return false;
        }
        else{
            top.style.border ='2px solid white';
            // return true;
        }
// Tonnage 
const aTon =  /[0-9]/;
    if( ton.value.length <3 || !ton.value.match(aTon)){
        ton.style.border = '2px solid red';
        return false;
    }
    else{
        ton.style.border ='2px solid white';
        // return true;
    }
//dispatch date 
if(
    dispatchDate.value == ''
){
    dispatchDate.style.border ='2px Solid red'
    return false;
}
else {
    dispatchDate.style.border ='2px solid white'
    // return true;
}



return true;
}









const firstFocus = () => {
    let nop = document.registration.nameofbuyer.focus();
    
};
// const valBuyer = () => {
//     let buyer = document.registration.buyername;
//     let bBuyer = /^[a-zA-Z0-9]+$/;
//     if(
//         buyer.value.length < 2|| !buyer.value.match(bBuyer)
//     ){
//         buyer.style.border='2px Solid red'
//         return false;
//     }
//     else{
//         buyer.style.border='2px Solid white'
//         return true;
//          }
//     };
    // const valNin =() =>{
    //     const nin = document.registration.nationalid;
    //     const ninValid = /^[a-zA-Z0-9]+$/;
    //     if(nin.value.match(ninValid) && nin.value.length == 14){
    //         nin.style.border ='2px solid white';
    //         return true; 
    //     }
    //     else{
    //         nin.style.border='2px solid red';
    //         return false;
    //     }
    // };

// const valLoc = () =>{
//     const loc =document.registration.location;
//     const locion = /^[a-zA-Z0-9]+$/;
//     if(loc.value.length < 2 || !loc.value.match(locion)){
//         loc.style.border= '2px solid red';
//         return false;
//     }
//     else{
//         loc.style.border='2px solid white'
//         return true;
//     }
// };

// const valCon=() =>{
//     const contt = document.registration.contact;
//     const contactFormat= /[0-9]/;
//     if(contt.value.match(contactFormat) && contt.value.length == 10){
//         contt.style.border ='2px solid white';
//         return true; 
//     }
//     else{
//         contt.style.border='2px solid red';
//         return false;
//     }
// };

// const valDue = () =>{
//     const due =document.registration.amountdue;
//     const amount = /^[a-zA-Z0-9]+$/;
//     if(due.value.length < 5 || !due.value.match(amount)){
//         due.style.border= '2px solid red';
//         return false;
//     }
//     else{
//         due.style.border='2px solid white'
//         return true;
//     }
// };

// const valAgent = () =>{
//     const sagent =document.registration.salesagent;
//     const amounttt = /^[a-zA-Z0-9]+$/;
//     if(sagent.value.length < 2 || !sagent.value.match(amounttt)){
//         sagent.style.border= '2px solid red';
//         return false;
//     }
//     else{
//         sagent.style.border='2px solid white'
//         return true;
//     }
// };


const valDate = () =>{
    let ddate = document.registration.date;
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

// const valProduce = () =>{
//     const prod =document.registration.nameofproduce;
//     const duce = /^[a-zA-Z0-9]+$/;
//     if(prod.value.length < 2 || !prod.value.match(duce)){
//         prod.style.border= '2px solid red';
//         return false;
//     }
//     else{
//         prod.style.border='2px solid brown'
//         return true;
//     }
// };

const valProduce =() => {
    let prod =document.registration.nameofproduce;
    if(
        prod.value == ''
    ){
        prod.style.border ='2px Solid red'
        return false;
    }
    else {
        prod.style.border='2px solid white'
        return true;
    }
    
};
// const valBran =() => {
//         let branchy = document.registration.branch;
//         if(
//             branchy.value == ''
//         ){
//             branchy.style.border ='2px Solid red'
//             return false;
//         }
//         else {
//             branchy.style.border='2px solid white'
//             return true;
//         }
        
//     };
    
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
            tonn.style.border='2px solid white'
            return true;
        }
      
    };
    
    // const valTop =() =>{
    //     let top= document.registration.goods;
    //     let toppe = /^[a-zA-Z]+$/;
    //     if(!top.value.match(toppe)|| top.value.length < 2){
    //         top.style.border ='2px solid red';
    //         return false;
    //     }
    //     else{
    //         top.style.border ='2px solid white';
    //         return true;
    //     }
       
    // };
    

const valTonnage = () =>{
    const ton = document.registration.tonnage;
    const aTon =  /[0-9]/;
    if( ton.value.length <3 || !ton.value.match(aTon)){
        ton.style.border = '2px solid red';
        return false;
    }
    else{
        ton.style.border ='2px solid white';
        return true;
    }
}

const valDispatch = () =>{
    let dispatchDate = document.registration.dispatch;
    if(
        dispatchDate.value == ''
    ){
        dispatchDate.style.border ='2px Solid red'
        return false;
    }
    else {
        dispatchDate.style.border ='2px solid white'
        return true;
    }
    
};
