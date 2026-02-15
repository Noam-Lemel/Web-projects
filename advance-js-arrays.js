//first drill
const arr=[1,2,3];
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
const mySlice=(from=0,to=arr2.length)=>{
    let slice=[];
    for(let i=from;i<to;i++){
        if(i<0||i>(arr2.length-1)) continue;
            slice.push(arr2[i])
    }
    return slice;
}
console.log(mySlice(2,6));
console.log(mySlice(5,12));
console.log(mySlice(-2,4));
console.log(mySlice());