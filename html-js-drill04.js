// 01
// const circlesContainer=document.getElementById("circles-container");
// for(let circle of circlesContainer.children){
//     circle.classList.add("circle");
//      circle.addEventListener('click',()=>{
//         circle.remove();
//     })
// }
// 02
// const divCircles=document.querySelectorAll(".circles-container div");
// for(let circle of divCircles){
//      circle.classList.add("circle");
//       circle.addEventListener('click',()=>{
//         circle.remove();
//       })
// }

const circles=document.querySelectorAll('#circles-container div');
for(let circle of circles){
    circle.classList.add("circle");
    circle.addEventListener('click',()=>{
        circle.className='none';
    })
}
