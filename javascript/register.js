const firstFocus =()=>{
    let sale = document.registration.firstname.focus();
};

const frname =()=>{
    let firste = document.registration.firstname;
    let rname = /^[a-zA-Z0-9]+$/;
    if(firste.value.length < 2 || !firste.value.match(rname)){
        firste.style.border ='2px solid red';
        return false;
    }
    else{
        firste.style.border ='2px solid brown';
        return true;
    }
};

const valSec =()=>{
    let secn = document.registration.surname;
    let sname = /^[a-zA-Z0-9]+$/;
    if(secn.value.length < 2 || !secn.value.match(sname)){
        secn.style.border ='2px solid red';
        return false;
    }
    else{
        secn.style.border ='2px solid brown';
        return true;
    }
};

const valBran = () =>{
    let branchee = document.registration.branch;
    if(
        branchee.value == 'default'
    ){
        branchee.style.border ='2px Solid red'
        return false;
    }
    else {
        branchee.style.border ='2px solid brown'
        return true;
    }
    
};

const valRole = () =>{
    let role = document.registration.role;
    if(
        role.value == 'default'
    ){
        role.style.border ='2px Solid red'
        return false;
    }
    else {
        role.style.border ='2px solid brown'
        return true;
    }
    
};

const valPass = () =>{
    let pass = document.registration.password;
    let passwordee = /^[a-zA-Z0-9]+$/;
    if(pass.value.length <4|| !pass.value.match(passwordee)
        
    ){
        pass.style.border ='2px Solid red'
        return false;
    }
    else {
        pass.style.border ='2px solid brown'
        return true;
    }
    
};

// const valEmail = () =>{
//     let email = document.registration.email;
//     let emil = /^[a-zA-Z0-9]+$/;
//     if(email.value.length || !email.value.match(emil)
        
//     ){
//         pass.style.border ='2px Solid red'
//         return false;
//     }
//     else {
//         pass.style.border ='2px solid brown'
//         return true;
//     }
    
// };

const valPasso = () =>{
    let pass = document.registration.password;
    let passwordee = /^[a-zA-Z0-9]+$/;
    if(pass.value.length <4|| !pass.value.match(passwordee)
        
    ){
        pass.style.border ='2px Solid red'
        return false;
    }
    else {
        pass.style.border ='2px solid brown'
        return true;
    }
    
};















