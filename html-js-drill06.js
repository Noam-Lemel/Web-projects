const input=document.getElementById('input');
input.addEventListener('input',(event)=>{
    switch(event.target.value.length%3)
    {
    case 0:
        event.target.className='red';
        break;
    case 1:
        event.target.className='blue';
        break;
    case 2:
        event.target.className='white';
        break;
    }
})
const inputfocusblur=document.getElementById('input-focus-blur');
inputfocusblur.addEventListener('focus',()=>{
    inputfocusblur.classList.add('input-focus');
});
inputfocusblur.addEventListener('blur',()=>{
    inputfocusblur.classList.remove('input-focus');
});