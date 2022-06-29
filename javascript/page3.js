const firstFocus = () => {
    let nop = document.registration.nameofbuyer.focus();
    
};
const valBuyer = () => {
    let buyer = document.registration.buyername;
    let bBuyer = /^[a-zA-Z0-9]+$/;
    if(
        buyer.value.length < 2|| !buyer.value.match(bBuyer)
    ){
        buyer.style.border='2px Solid red'
        return false;
    }
    else{
        buyer.style.border='2px Solid green'
        return true;
         }
    };
    const valNin =() =>{
        const nin = document.registration.nationalid;
        const ninValid = /^[a-zA-Z0-9]+$/;
        if(nin.value.match(ninValid) && nin.value.length == 14){
            nin.style.border ='2px solid green';
            return true; 
        }
        else{
            nin.style.border='2px solid red';
            return false;
        }
    };

const valLoc = () =>{
    const loc =document.registration.location;
    const locion = /^[a-zA-Z0-9]+$/;
    if(loc.value.length < 2 || !loc.value.match(locion)){
        loc.style.border= '2px solid red';
        return false;
    }
    else{
        loc.style.border='2px solid green'
        return true;
    }
};

const valCon=() =>{
    const contt = document.registration.contact;
    const contactFormat= /[0-9]/;
    if(contt.value.match(contactFormat) && contt.value.length == 10){
        contt.style.border ='2px solid green';
        return true; 
    }
    else{
        contt.style.border='2px solid red';
        return false;
    }
};

const valDue = () =>{
    const due =document.registration.amountdue;
    const amount = /^[a-zA-Z0-9]+$/;
    if(due.value.length < 5 || !due.value.match(amount)){
        due.style.border= '2px solid red';
        return false;
    }
    else{
        due.style.border='2px solid green'
        return true;
    }
};

const valAgent = () =>{
    const sagent =document.registration.salesagent;
    const amounttt = /^[a-zA-Z0-9]+$/;
    if(sagent.value.length < 2 || !sagent.value.match(amounttt)){
        sagent.style.border= '2px solid red';
        return false;
    }
    else{
        sagent.style.border='2px solid green'
        return true;
    }
};


const valDate = () =>{
    let ddate = document.registration.date;
    if(
        ddate.value == ''
    ){
        ddate.style.border ='2px Solid red'
        return false;
    }
    else {
        ddate.style.border ='2px solid green'
        return true;
    }
    
};

const valProduce = () =>{
    const prod =document.registration.nameofproduce;
    const duce = /^[a-zA-Z0-9]+$/;
    if(prod.value.length < 2 || !prod.value.match(duce)){
        prod.style.border= '2px solid red';
        return false;
    }
    else{
        prod.style.border='2px solid green'
        return true;
    }
};


const valTonnage = () =>{
    const ton = document.registration.tonnage;
    const aTon =  /[0-9]/;
    if( ton.value.length <3 || !ton.value.match(aTon)){
        ton.style.border = '2px solid red';
        return false;
    }
    else{
        ton.style.border ='2px solid green';
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
        dispatchDate.style.border ='2px solid green'
        return true;
    }
    
};
