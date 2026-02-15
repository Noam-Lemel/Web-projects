const mouseeventcontainer=document.getElementById('mouse-event-container');
mouseeventcontainer.addEventListener('mousemove',(event)=>{
    const x=event.offsetX;
     const y=event.offsetY;
     let targetColor='';
    if(x<250){
           targetColor=y<250?'red':'blue';
    }
    else {
         targetColor=y<250?'yellow':'green';
    }
    if(mouseeventcontainer.className!==targetColor){
        mouseeventcontainer.classList.remove('red','blue','green','yellow');
        mouseeventcontainer.classList.add(targetColor);
    }
});