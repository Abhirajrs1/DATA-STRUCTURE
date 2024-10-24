let obj={
    name:"Abhiraj",
    age:25,
    place:"TVM",
    greet:function(){    //We can write the function inside the object
        console.log(this.age); //this refers to the parent
    }
}



console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));


//obj.greet()



// Aceess through . (dot notation)
//console.log(obj.name) // Abhiraj
// delete obj.age //Used to delete the obj



// Access using [] (bracket notation)

//console.log(obj['name']) //Abhiraj
// delete obj['place'] //Delete the obj
