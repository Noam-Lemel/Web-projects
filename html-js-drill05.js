const divh4=document.querySelector('#keyup-event h4');
const divinput=document.querySelector('#keyup-event input');
divinput.addEventListener('keyup',(event)=>{
    if(event.key==='Enter')
    {
        divh4.innerHTML=event.target.value;
        event.target.value="";
    }
})