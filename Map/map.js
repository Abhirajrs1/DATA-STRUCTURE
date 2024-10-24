let arr=[['name',"Abhiraj"],['age',25]]
let map=new Map(arr)
map.set('State','Thirivananthapuram') //Set new key-values



// Iterating the Map

for(let [key,value] of map){
    console.log(`key : ${key} ,value : ${value} `); 
}

map.forEach((value,key )=> {
    console.log(` Key : ${key}, Value : ${value}`)
});