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
const getOpositArrayRecutsive=(arr,num=arr.length)=>{
    
    if(num===0) return arr[0];
    
}