class Queue{
    constructor(){
        this.items=[]
    }

    isEmpty(){
        return this.items.length===0
    }
    enque(element){
       this.items.push(element)
    }
    deque(){
        return this.items.shift()
    }
    peak(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        return console.log(this.items.toString());
    }
}

let queue=new Queue()
queue.enque(10) 
queue.enque(20) 
queue.enque(30) 
queue.enque(40) 
queue.print()
console.log(queue.size());
console.log(queue.peak());
console.log(queue.isEmpty());  
