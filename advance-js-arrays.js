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