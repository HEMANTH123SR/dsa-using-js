class LinkedList{
    constructor(value){
        this.head={
            value:value,
            next:null
        }
        this.tail=this.head
        
        ;
        this.length=1;
    }

    append(value){
       const newNode={
        value:value,
        next:null
       }
       this.tail.next=newNode;
       this.tail=newNode
     this.length++;
    }
    
    
}


const myLinkedList=new LinkedList(10)

myLinkedList.append(20)
myLinkedList.append(40)
myLinkedList.append(40)
myLinkedList.append(100)
console.log(myLinkedList)