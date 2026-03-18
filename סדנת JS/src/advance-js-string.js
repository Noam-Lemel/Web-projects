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

//Arie's regular selution
const arieReplaceAll=(str,strToReplace,strReplacment)=>{
    while(str.includes(strToReplace))
        str=str.replace(strToReplace,strReplacment);
    return str;
}
//Recorsive Solution
const myReplaceAllRec=(str,strToReplace,strReplacment)=>{
    let i=str.indexOf(strToReplace);
    if(i===-1) return str;
    let str1=str.slice(0,i);
    return str1.concat(strReplacment,myReplaceAllRec(str.slice(i+strToReplace.length),strToReplace,strReplacment));
}
console.log(myReplaceAllRec("my name is noam and noam and noam",'noam','chen'));

//Arie's Recorsive Solution
const arieReplaceAllRec=(str,strToReplace,strReplacment)=>{
    if(!str.includes(strToReplace)) return str;
    return arieReplaceAllRec(str.replace(strToReplace,strReplacment),strToReplace,strReplacment);
}
console.log("my name is noam and noam and noam".replaceAll('noam','chen'));

//gemini's drill
const myMax=(arr)=>{
    if(arr.length<2) return arr[0];
    let current=arr[0];
    let maxOfRest=myMax(arr.slice(1));
    return current>maxOfRest?current:maxOfRest;
} 
console.log(myMax([2,8,3]));

//gemini's drill 02
const myPower=(base,exponent)=>{
    if(exponent===0) return 1;
    return base*myPower(base,exponent-1);
}
console.log(myPower(2,3));

//gemini's drill 03
const mySumDigits=(num)=>{
    if(num<10) return num;
    let lastNumber=num%10;
    num=parseInt(num/10);
    return lastNumber+mySumDigits(num);
}
console.log(mySumDigits(126));

//drill 07
//regular selution
const mySplit=(str,separator)=>{
    if(separator==null){
        return [str];
    }
    let result=[];
    if(separator===''){
        for(let i=0;i<str.length;i++)
            result.push(str[i]);
        return result;
    }
    let currentIndex=0;
    let lastIndex=0;
    while(currentIndex!==-1){
        currentIndex=str.indexOf(separator,lastIndex);
        if(currentIndex===-1){
            result.push(str.slice(lastIndex));
            break;
        }
        result.push(str.slice(lastIndex,currentIndex));
        lastIndex=currentIndex+separator.length;
        }
    return result;
}
console.log(mySplit("my name is noam"," "));

//Recorsive Solution
const mySplitRec=(str,separator)=>{
     if(separator==null) return [str];
    if(separator===''){
        if(str==='') return[];
            return [str[0]].concat(mySplitRec(str.slice(1),separator));
    }
    let separatorIndex=str.indexOf(separator);
    if(separatorIndex===-1) 
        return [str];
    return [str.slice(0,separatorIndex)].concat(mySplitRec(str.slice(separatorIndex+separator.length),separator)).filter(str=>str!=='');
}
console.log(mySplitRec("my name is noam"," "));

//drill 08
//first try
const myPermutation=(str)=>{
    let result=new Set();
    const getCombination=(remain,current)=>{
        if(remain.length===0) result.add(current);
        for(let i=0;i<remain.length;i++){
            let char=remain[i];
            let nextRemain=remain.slice(0,i)+remain.slice(i+1);
            getCombination(nextRemain,current+char);
        }
    }
    getCombination(str,"");
    return [...result];
}
console.log(myPermutation('abc'));
//arie's solution
const ariePermutation=(str)=>{
    let strChar=str.split('');
    let  result=new Set();
    const getEnumerations=(chars,enumaration)=>{
        if(chars.length===0) result.add(enumaration);
        else{
            for(let i=0;i<chars.length;i++){
                let newChars=[...chars];
                let char=newChars.splice(i,1);
                let newenumaration=enumaration+char;
                getEnumerations(newChars,newenumaration);
            }
        }
    }
    getEnumerations(strChar,"");
    return [...result];
}
console.log(ariePermutation('abc'));