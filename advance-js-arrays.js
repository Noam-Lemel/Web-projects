//first drill
let arr=[1,2,3];
const myForEach=(arr,callback)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==undefined)
        callback(arr[i],i);
    }
}
let arrString='';
myForEach(arr,(el,i)=>{
    arrString+=`${i}:${el}  `;
})
console.log('myForEach: ',arrString);

//second drill
let arr2=[...arr,4,5,6,7,8,9,10];
const mySlice=(arr,from=0,to=arr2.length)=>{
    let slice=[];
    from=from>0?from:0;
    to=to>arr.length?arr.length:to;
    for(let i=from;i<to;i++){
            slice.push(arr[i])
    }
    return slice;
}
console.log(mySlice(arr2,2,6));
console.log(mySlice(arr2,5,12));
console.log(mySlice(arr2,-2,4));
console.log(mySlice(arr2));
console.log(arr);
arr=arr.concat(arr2,[19,20,21]);
console.log(arr);

//drill 03
const getOpositArray=(arr)=>{
    let result=[];
    for(let i=(arr.length-1);i>=0;i--){
        result.push(arr[i]);
    }
    return result;
}
console.log(getOpositArray([1,2,3]));
const getOpositArrayRecutsive=(arr)=>{
    let result=[...arr];
    if(result.length===0||result.length===1) return result;
    let lastEl=result.pop();
    return [lastEl].concat(getOpositArrayRecutsive(result));

}
console.log(getOpositArrayRecutsive([1,2,3]));

//drill 04
const mySplice=(arr,index,deleteNum,...rest)=>{
    let result=[...arr];
    if(index>result.length) return result.concat(rest);
    if(deleteNum==null||rest.length===0){
       return result.slice(0,index);
    }
    if(deleteNum===0)
        return result.slice(0,index).concat(rest,result.slice(index));
    result=result.slice(0,index).concat(rest,result.slice(index+deleteNum))
    return result;
}
console.log(mySplice([1,2,3,4,5,6,7,8,9,10],3,4,40,50,60,70));
console.log(mySplice([1,2,3,4,5,6,7,8,9,10],11,15,40,50,60,70));
console.log(mySplice([1,2,3,4,5,6,7,8,9,10],3,undefined,40,50,60,70));
console.log(mySplice([1,2,3,4,5,6,7,8,9,10],3,0,40,50,60,70));
console.log(mySplice([1,2,3,4,5,6,7,8,9,10],3,4));

// drill 05
const myFilter=(arr,callback)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
    if(callback(arr[i]))
        result.push(arr[i]);
    }
    return result;
}
console.log(myFilter([1,2,3,4],(num)=>{
    if(num%2===0) return true;
    return false;
}))

//drill 06
const hundredArr=[];
for(let i=1;i<=100;i++)
    hundredArr.push(i);
const isPrimeNumber=(number)=>{
    if(number===1) return false;
    for(let devider=2;devider<number;devider++){
        if(number%devider===0) return false;
    }
    return true;
}
console.log('prime numbers : ',hundredArr.filter(isPrimeNumber));
//my Recutsive
const isPrimeNumberRecutsive=(number,devider=2)=>{
    if(number<2) return false;  
    if(devider===number) return true;
    return (number%devider===0)? false :isPrimeNumberRecutsive(number,(devider+1));
}
console.log('prime numbers : ',hundredArr.filter((number)=>isPrimeNumberRecutsive(number)));
//Arie's Recutsive
const isPrimeNumberRecutsive2=(number,i,arr,...rest)=>{
    if(number<2) return false;
    const devider = rest.length === 0 ? (number-1) : rest[0];
    if(devider<2) return true;
    return (number%devider===0)? false :isPrimeNumberRecutsive2(number,i,arr,(devider-1));
}
console.log('prime numbers : ',hundredArr.filter(isPrimeNumberRecutsive2));

//drill 07
const myMap=(arr,callback)=>{
    const result=[];
    for(let i=0;i<arr.length;i++)
        result.push(callback(arr[i]));
    return result;
}
console.log(myMap([2,4,6],num=>num**2));

//drill 08
const sortLetters=(el2,el1)=>{
    return el1.localeCompare(el2);
}
console.log(['a','b','A','i','c','z','d'].sort(sortLetters));

const sortLetters2=(el2,el1)=>{
    if(el2===el1) return 0;
    return el2.toLowerCase()>el1.toLowerCase()?-1:1;
}
console.log(['a','b','A','i','c','z','d'].sort(sortLetters2));

//drill 09 
const myReduce=(arr,callback,initialValue)=>{
    let index=initialValue==null?1:0;
    let result=initialValue==null?arr[0]:initialValue;
    for(;index<arr.length;index++){
        result=callback(result,arr[index]);
    }
    return result;
}
console.log(myReduce([1,2,3,4],(result,el)=> result**el,2));

//drill 10
const obgReducer=(result,arr)=>{
    result[arr[0]]=arr[1];
    return result;
}
const arrObj=[
    ['a',1],
    ['b',2],
    ['c',3]
]
console.log(arrObj.reduce(obgReducer,{}));
