const arr=[1,2,3,4,5,1,2]
const a=new Set(arr)
a.add(6)
for(item of a){
    console.log(item);
}