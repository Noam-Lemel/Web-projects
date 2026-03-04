//drill 01
// my Fixed solution
const myIncludes=(str,strSearched,position=0)=>{
    for(let i=position;i<str.length;i++){
        let found=true;
        for(let j=0;j<strSearched.length-strSearched.length;j++){
            if(str[i+j]!== strSearched[j]){
                found=false;
                break;
            }
        }
        if(found) return true;
    }
    return false;
}
// Arie's Solution
const myIncludes2=(str,strSearched,position=0)=>{
    let i2=0;
    for(let i=position;i<str.length;i++){
        if(str[i]!==strSearched[i2]) {
            i-=i2;
            i2=0;
            continue;
        }
        if(i2===strSearched.length-1) return true;
        i2++
    }
return false;
}
let strOut="aaac";
let strIn="aac";
console.log(myIncludes2(strOut,strIn));

//drill 02
//my fixed solution
const myIndexOf=(str,strSearched,position=0)=>{
    for(let i=position;i<str.length;i++){
        for(let j=0;j<strSearched.length;j++){
            if(str[i+j]!==strSearched[j]){
                break;
            }
            if(j===strSearched.length-1)
                return i;
        }
    }
    return -1;
}
strOut="HHHHHGGFDaaac";
strIn="aac";
console.log(myIndexOf(strOut,strIn));

//Arie's Solution
const myIndexOf2=(str,strSearched,position=0)=>{
    let i2=0;
    for(let i=position;i<str.length;i++){
        if(str[i]!==strSearched[i2]) {
            i-=i2;
            i2=0;
            continue;
        }
        if(i2===strSearched.length-1) return i-i2;
        i2++
    }
return -1;
}
strOut="HHHHHGGFDaaacknvknavaac";
strIn="aac";
console.log(myIndexOf2(strOut,strIn));

//drill 03
//my Fixed solution
const myLastIndexOf=(str,strSearched,position=str.length-1)=>{
    for(let i=position;i>=0;i--){
        for(let j=0;j<strSearched.length;j++){
            if(str[i+j]!==strSearched[j]) break;
            if(j===strSearched.length-1) return i;
        }
    }
    return -1;
}
strOut="HHHHHGGFDaaacknvknavaac";
strIn="aac";
console.log(myLastIndexOf(strOut,strIn));

//Arie's Solution
    const myLastIndexOf2=(str,strSearched,position=0)=>{
        let i2=strSearched.length-1;
        let savedIndex;
        for(let i=str.length-1;i>=position;i--){
            if(i2===strSearched.length-1)
                savedIndex=i;
            if(str[i]!==strSearched[i2]) {
                i=savedIndex;
                i2=strSearched.length-1;
                continue;
            }
            if(i2===0) return i;
            i2--
        }
    return -1;
    }
strOut="ggg aac aax";
strIn="aac";
console.log(myLastIndexOf2(strOut,strIn));

