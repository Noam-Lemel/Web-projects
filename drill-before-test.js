const listcontainer=document.getElementById('list-container');
const inputadd=document.getElementById('input-add');    
const buttonadd=document.getElementById('button-add');
const missions=document.getElementById('missions');

missions.addEventListener('submit',(event)=>{
    event.preventDefault();
    if (inputadd.value.trim() === "") return;
    const newmission=document.createElement('div');
    newmission.classList.add('mission-box');
    const missiontext=document.createElement('span');
    missiontext.innerText =inputadd.value;
    inputadd.value='';
    const deletebutton=document.createElement('button');
    deletebutton.innerText='delete';
    deletebutton.addEventListener('click',()=>{
        newmission.remove();
    })
    const endmission=document.createElement('button');
    endmission.innerText='end';
    endmission.addEventListener('click',()=>{
         missiontext.classList.add('end');
         newmission.removeChild(endmission);
         
    })
    const buttoncontainer=document.createElement('div');
    newmission.appendChild(missiontext);
    buttoncontainer.appendChild(deletebutton);
    buttoncontainer.appendChild(endmission);
    newmission.appendChild(buttoncontainer);
    listcontainer.appendChild(newmission);
})