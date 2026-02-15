const paragraphes=document.getElementById('paragraphes');
const inputParagraph=document.getElementById('input-paragraph');
const buttonParagraph=document.getElementById('button-paragraph');

buttonParagraph.addEventListener('click',()=>{
    const paragraph=document.createElement('p');
    paragraph.innerHTML=inputParagraph.value;
    paragraphes.appendChild(paragraph);
    inputParagraph.value='';
});