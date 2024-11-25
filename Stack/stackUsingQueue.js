
class Stack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    isEmpty(){
       return this.q1.length==0
    }
    push(x){
        this.q2.push(x)
        while(this.q1.length>0){
            this.q2.push(this.q1.shift())
        }
        [this.q1,this.q2]=[this.q2,this.q1]
    }
    pop(){
        if(this.isEmpty()){
            return console.log("This is empty")
        }
        return this.q2.shift()
    }
    peak(){
        if(this.isEmpty()){
            return console.log("No values")
        }
        return console.log(this.q1[0])
    }
}
let stack=new Stack()
stack.push(12)
stack.push(15)
stack.peak()
console.log(stack.isEmpty())






