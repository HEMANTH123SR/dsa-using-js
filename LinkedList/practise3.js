class LinkedList{
    constructor(value){
    this.head={
        value:value,
        next:null
    }
    this.tail=this.head
    this.length=1;
    }



     

    append(value){
    const newNode={
        value:value,
        next:null
    }
    this.tail.next=newNode;
    this.tail=newNode;
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

    print(){
        let con=this.head;
        console.log(con.value)
        while(con.next){
           
            con=con.next
            console.log(con.value)
           
        }
    }

    insert(value,index){
        const newNode={
            value:value,
            next:null
        }
        let nodeReq=this.trav(index-1)
        let nextPointer=nodeReq.next;
        nodeReq.next=newNode;
        newNode.next=nextPointer;
    }

    delete(index){
        let present=this.trav(index-1)
        let del=this.trav(index)
        present.next=del.next
    }

    trav(index){
        let i=0;
        let current=this.head
        while(i!=index){
            current=current.next
            i++;
        }
        return current
    }
}

const myLinkedList= new LinkedList(30);

myLinkedList.prepend(10)
myLinkedList.append(40)
myLinkedList.insert(20,1)
myLinkedList.delete(2)
myLinkedList.print()
