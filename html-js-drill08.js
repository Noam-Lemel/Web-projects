const openbutton=document.getElementById('open');
const modal=document.getElementById('modal');
const modalContainer=document.getElementById('modal-container');
const closebutton=document.getElementById('close');
openbutton.addEventListener('click',(event)=>{
    // event.stopPropagation();
    modalContainer.className='modal-container';
})
modalContainer.addEventListener('click',(event)=>{
    modalContainer.className='none';
})
closebutton.addEventListener('click',(event)=>{
    modalContainer.className='none';
})
modal.addEventListener('click',(event)=>{
    event.stopPropagation();
})