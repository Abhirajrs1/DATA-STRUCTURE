class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
      this.head=null
      this.size=0
    }
    
    // check for the list is empty
    isEmpty(){
        return this.size==0
    }
    // getting the current size
    getSize(){
        return this.size
    }

    // Insert from the head
    prepend(value){
       const node=new Node(value)
       if(this.isEmpty()){
        this.head=node
       }else{
        node.next=this.head
        this.head=node

       }
       this.size++
    }

    // Insert from the tail
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }

    // Imsertion on specific index
    insert(value,index){
        if(index<0||index>this.size){
            return console.log("Invalid");
        }
        if(index==0){
            this.prepend(value)
        }else{
            const node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next

            }
            node.next=prev.next
            prev.next=node
            this.size++ 
        }
    }

    // Remove according to index
    removeFrom(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removeNode
        if(index==0){
            removeNode=this.head
            this.head=this.head.next
        }else{
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
        }
        this.size--
        return removeNode.value
    }

    // Remove according to value
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            return value;
        }else{
            let prev=this.head
            while(prev.next && prev.next.value!=value){
                prev=prev.next
            }
            if(prev.next){
                let removeNode=prev.next
                prev.next=removeNode.next
                this.size--
                return value;
            }
                return null
        }
    }

    // Search values in the list
    search(value){
        if(this.isEmpty()){
            return -1      
        }
        let current=this.head
        let i=0
        while(current){
            if(current.value==value){
                return i
            }
            current=current.next
            i++
        }
        return -1
    }

    // Reverse a list
    reverse(){
        let prev=null
        let current=this.head
        while(current){
            let next=current.next
            current.next=prev
            prev=current
            current=next
        }
        this.head=prev
    }

    // Print the list
    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let current=this.head
            let listvalues=''
            while(current){
                listvalues+=`${current.value} `
                current=current.next
            }
            console.log(listvalues);
        }
    }
}

const list=new LinkedList()
console.log(list.isEmpty());
console.log(list.getSize());

list.prepend(10)
list.prepend(20)
list.prepend(30)
list.append(100)
list.append(200)
list.append(400)
list.append(500)
list.print()

list.insert(40,0)
list.print()

console.log( list.removeFrom(4));
list.print()

console.log( list.removeValue(1000)); 
list.print()

list.reverse()
list.print()
