
function linear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return null 
}
let arr=[3,4,2,5,6,1,0]

console.log(linear(arr,3));