class LinkedList{
    constructor(value){
       this.head={
        value:value,
        next:null
       }
       this.top=this.head;
       this.length=1;
    }

    append(value){
        const newNode={
            value:value,
            next:null
        }
        this.top.next=newNode;
        this.top=newNode;
        this.length++;
    }

    prepend(value){
        const newNode={
            value:value,
            next:null
        }
        newNode.next=this.head;
    this.head=newNode
    this.length++;
    }
}

const myLinkedList=new LinkedList(10)

myLinkedList.append(20)
myLinkedList.prepend(100)

console.log(myLinkedList)