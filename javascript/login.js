const firstFocus =()=>{
    let sale = document.registration.email.focus();
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