class Stack{
  constructor(){
    this.items=[]
  }
  isEmpty(){
   return this.items.length==0
  }
  insert(value){
    this.items.push(value)
  }
  delete(){
    this.items.pop()
  }
  size(){
    return console.log(this.items.length); 
  }
  peak(){
    if(!this.isEmpty()){
        return null
    }
    return this.items[0]
  }
  print(){
    return console.log(this.items.toString());
  }
}

let stack=new Stack()
console.log(stack.isEmpty());
stack.insert(10)
stack.insert(20)
stack.insert(30)
stack.insert(40)
stack.insert(50)
stack.insert(60)
stack.print()
stack.size()
stack.delete()
stack.print()

