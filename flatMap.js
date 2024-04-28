

function flatArray(arr){
    return arr.flatMap((item)=>Array.isArray(item)?flatArray(item):item)
}
let arr = [1, 2, 3, 4, [5, 6], [7, 8, [9,10,[11]]]]; 
console.log(flatArray(arr));

// or

let result=arr.flat(Infinity)
console.log(result);