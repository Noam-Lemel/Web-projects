const boxes=document.getElementsByClassName("box green");
for(let box of boxes){
    box.addEventListener('click',()=>{
    box.classList.remove('green');
    box.classList.add('yellow');
})
};