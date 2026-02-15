const formcontainer=document.getElementById('form-container');
const username=document.getElementById('username');
const age=document.getElementById('age');
const password=document.getElementById('password');
const repassword=document.getElementById('re-password');
const submit=document.getElementById('submit');
const usernameeror=document.getElementById('username-erorr');
const ageeror=document.getElementById('age-message');
const passworderor=document.getElementById('password-error');
const repassworderor=document.getElementById('re-password-eror');
const infocontainer=document.getElementById("info-container");
const formregister=document.getElementById('form-register');

let isInvalidUsername=true;
let isInvalidAge=true;
let isInvalidPassword=true;
let isInvalidRePassword=true;
 submit.disabled=true;

const setButtonSubmitDisabledMode=()=>{
    submit.disabled= isInvalidUsername || isInvalidAge || isInvalidPassword || isInvalidRePassword;
}
username.addEventListener('blur',()=>{
    if(username.value !== ""){
        if(username.value==='moshe'){
              isInvalidUsername=true;
              usernameeror.className='exist';
               usernameeror.innerHTML=   "invalid input! UserName can't be 'moshe'";

        }
        else{
            isInvalidUsername=false;
            usernameeror.className='hidding';
        }
    }
    else{
        isInvalidUsername=true;
         usernameeror.className='exist';
        usernameeror.innerHTML="You must enter username";
    }
    setButtonSubmitDisabledMode();
})

age.addEventListener('blur',()=>{
    if(age.value !== ""){
        if(age.value<12){
              isInvalidAge=true;
              ageeror.className='exist';
               ageeror.innerHTML="invalid input! You must be at least 12 years old";
        }
        else{
            isInvalidAge=false;
            ageeror.className='hidding';   
        }
    }
    else{
        isInvalidAge=true;
              ageeror.className='exist';
        ageeror.innerHTML="You must enter age";
    }
    setButtonSubmitDisabledMode();
})

password.addEventListener('blur',()=>{
    if(password.value !== ""){
        if(password.value.length<6){
              isInvalidPassword=true;
              passworderor.className='exist';
               passworderor.innerHTML="invalid input! password must contain 6 letters";
        }
        else{
            isInvalidPassword=false;
            passworderor.className='hidding';
        }
    }
    else{
        isInvalidPassword=true;
              passworderor.className='exist';
        passworderor.innerHTML="invalid input! you must enter password";
    }
    setButtonSubmitDisabledMode();
})

repassword.addEventListener('blur',()=>{
    if(repassword.value !== ""){
        if(repassword.value!==password.value){
              isInvalidRePassword=true;
              repassworderor.className='exist';
               repassworderor.innerHTML="invalid input! re-password must match to the password";
        }
        else{
            isInvalidRePassword=false;
            repassworderor.className='hidding';
        }
    }
    else{
        isInvalidRePassword=true;
              repassworderor.className='exist';
        repassworderor.innerHTML="invalid input! you must enter re-password";
    }
    setButtonSubmitDisabledMode();
})

formregister.addEventListener('submit',(event)=>{
 event.preventDefault();
 infocontainer.className='exist';
 infocontainer.innerHTML=`Username: ${username.value}<br> age: ${age.value}<br>password: ${password.value}`;
})
