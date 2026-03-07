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

//drill 04
const mySlice=(str,startIndex=0,endIndex=str.length)=>{
    let result='';
    if(startIndex>str.length-1)return result;
    endIndex=endIndex>str.length?str.length:endIndex;
    for(let i=startIndex;i<endIndex;i++)
        result+=str[i];
    return result;
}
console.log(mySlice("my name is noam",3,7));
console.log("my name is noam".slice(3,7));

//drill 05
//regular selution
const myCounter=(str,strSearched)=>{
    let result=0;
    for(let i=0;i<str.length;i++){
        let found=true;
        for(let j=0;j<strSearched.length;j++){
            if(str[i+j]!==strSearched[j]){
                found=false;
                break;
            }
        }
        if(found) result++;
    }
    return result;
}
console.log(myCounter('my name is noam','m'));

//Arie's regular selution
const arieCounter=(str,strSearched)=>{
    let result=0;
    for(let i=0;i<str.length;i++){
        i=str.indexOf(strSearched,i);
        if(i===-1) return 0;
        result++;
    }
    return result;
}
console.log(arieCounter('my name is noam','m'));

//Recorsive Solution
const myCounterRecorsive=(str,strSearched)=>{
    if(str.length<strSearched.length) return 0;
    if(str.slice(0,strSearched.length)===strSearched) return 1+myCounterRecorsive(str.slice(1),strSearched);
    else return  0+myCounterRecorsive(str.slice(1),strSearched);
}
console.log(myCounterRecorsive('my name is noam','m'));

//arie's Recorsive Solution
const arieCounterRecorsive=(str,strSearched)=>{
    let i=str.indexOf(strSearched);
    if(i===-1) return 0;
    return 1+arieCounterRecorsive(str.slice(i+1),strSearched);
}
console.log(arieCounterRecorsive('my name is noam','m'));

//drill 06
const myReplace=(str,strToReplace,strReplacment)=>{
    let i=str.indexOf(strToReplace);
    if(i===-1) return str;
    return str.slice(0,i).concat(strReplacment,str.slice(i+strToReplace.length))
}

//drill 6.5
//regular selution
const myReplaceAll=(str,strToReplace,strReplacment)=>{
    let result=str;
    let i=result.indexOf(strToReplace); 
    while(i!==-1){
        let st1=result.slice(0,i);
        let st2=result.slice(i+strToReplace.length);
        result=st1.concat(strReplacment,st2);
        i=result.indexOf(strToReplace,i+strReplacment.length);
    }
    return result;
}
console.log(myReplaceAll("my name is noam and noam and noam",'noam','chen'));

//Recorsive Solution
const myReplaceAllRec=(str,strToReplace,strReplacment)=>{
    let i=str.indexOf(strToReplace);
    if(i===-1) return str;
    let str1=str.slice(0,i);
    return str1.concat(strReplacment,myReplaceRec(str.slice(i+strToReplace.length),strToReplace,strReplacment));
}
console.log(myReplaceAllRec("my name is noam and noam and noam",'noam','chen'));

