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

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
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

console.log(list.getSize());
list.print()

list.insert(40,0)
list.print()
list.insert(80,2)
list.print()
