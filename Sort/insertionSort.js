function insertion(arr){
 for(let i=1;i<arr.length;i++){
    let numberToInsert=arr[i]
    let j=i-1
    while(j>=0 && arr[j]>numberToInsert){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=numberToInsert
 }
 return arr
}
let arr=[4,2,1,5,8,7,4,1]
console.log(insertion(arr));
