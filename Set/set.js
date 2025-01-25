const arr=[1,2,3,4,5,1,2]
const a=new Set(arr)
a.add(6)               //Add new value to the set
console.log(a.has(6)); //Check for that the value exist in the set
console.log(a.size);   //Check the size of the set

a.delete(2)            //Delete a value from the set
a.clear()              //Delete or clear all the elements

 
for(let item of a){
    console.log(item);
}
console.log(a);


// Convert the set into an array

console.log(Array.from(a))  
console.log([...a]); 


