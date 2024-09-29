function validateForm(event){
    event.preventDefault();
    regisform=document.getElementById("regisForm");
    username=document.getElementById("username");
    
    password=document.getElementById("password");
    confirmPassword=document.getElementById("confirm");
   
    male=document.getElementById("male");
    female=document.getElementById("female");
    agree=document.getElementById("agree");
    error=document.getElementById("error");
    date=document.getElementById("birthdate");
    signupBtn=document.getElementById("signupBtn");
    loginBtn=document.getElementById("loginBtn");
    confirmInput=document.getElementById("confirmInput");
    dateInput=document.getElementById("dateInput");
    genderInput=document.getElementById("genderInput");
    agreeInput=document.getElementById("agreeInput");
    title=document.getElementById("title");

   

    if(username.value.length < 5){
       
        alert("Username must be atleast 5 characters");
    }
    
    else if(!isAlphanumeric(password.value)){
      
        alert("Password must be alphanumeric");
    }
    else if(password.value != confirmPassword.value){
        alert("Password doesnt match");
        
    }
    else if(!date.value){
        alert("Date is not Filled");
    }
    else if(!(male.checked || female.checked)){
        alert("Gender must be picked");
    }
    else if(!agree.checked){
        
        alert("You must agree to term and condition");
    }
    else{
        window.location.assign("menu2.html");
    }
}


function isAlphanumeric(pw){
    var num = false ;
    var alpha = false;
    for(let i = 0; i < pw.length; i++){
        if(!isNaN(pw[i])){

            num=true;
    }
    else{
        alpha=true;
    }
    if(num && alpha){
        return true;
    }
}
    return false;
}

