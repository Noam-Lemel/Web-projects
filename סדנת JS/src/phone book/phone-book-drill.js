const addName=document.getElementById("add-name");
const phoneNumber=document.getElementById("add-number");
const addButton=document.getElementById("add-button");
const phoneBook=document.getElementById("phone-book");
const searchInput=document.getElementById('search-input');
const searchButton=document.getElementById('search-button');
const searchResult=document.getElementById('search-result');
const sortButton=document.getElementById('sort-button');
const phoneBookList=new Map();
let isInOrder=true;

addButton.addEventListener('click',()=>{
    let name=addName.value.toLowerCase();
    let number=phoneNumber.value;
    if(number.includes(' ')) {
        alert("the Phone Number can't contain space");
        return;
    }
    if(number.includes('-')){
        number=number.replace("-","");
    }
    let newSpot=document.createElement('div');
    newSpot.innerText=name.concat(": ",number);
    let reaseButton=document.createElement('button');
    reaseButton.innerHTML="delete";
    reaseButton.addEventListener('click',()=>{
        newSpot.remove();
        phoneBookList.delete(name);
    })
    newSpot.appendChild(reaseButton);
    phoneBook.appendChild(newSpot);
    phoneBookList.set(name,number);
    addName.value="";
    phoneNumber.value="";
})
const updateSearchResult=()=>{
 searchResult.innerHTML="";
    let list=[...phoneBookList];
    let input=searchInput.value.toLowerCase();
    let searchList=list.filter((el)=>el[0].includes(input)).sort(([a],[b])=>{
        if(isInOrder){
            if(a>b) return 1;
            if(a<b) return -1;
            return 0;
        }else{
             if(a>b) return -1;
            if(a<b) return 1;
            return 0;
        }
    });
    for(let i=0;i<searchList.length;i++){
        let newSpot=document.createElement('div');
        let name=searchList[i][0];
        let number=searchList[i][1];
         newSpot.innerText=name.concat(": ",number);
        searchResult.appendChild(newSpot);
    }
    searchInput.value="";
}
searchButton.addEventListener('click',updateSearchResult);
sortButton.addEventListener('click',()=>{
    isInOrder=!isInOrder;
    updateSearchResult();
})