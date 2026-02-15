const headline=document.getElementById('headline');
setTimeout(()=>{
    headline.innerHTML='hello world';
},500);

const paragraphes=document.getElementById('paragraphes');
const paragraph=document.createElement('p');
paragraph.innerHTML='new paragraph';
paragraphes.appendChild(paragraph);

setTimeout(()=>{
    paragraphes.removeChild(paragraph);
},1500);

const stamButton=document.getElementById('stamButton');
stamButton.addEventListener('click',()=>{
    alert("I was clicked");
});

const inputHeadline=document.getElementById('input-headline');
const buttonHeadline=document.getElementById('button-headline');
buttonHeadline.addEventListener('click',()=>{
    headline.innerHTML=inputHeadline.value;
});

