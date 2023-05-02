class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.top = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.top.next = newNode;
    this.top = newNode;
    this.length++;
  }

  prepend(value) {
    const newHead = {
      value: value,
      next: null,
    };
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
  }

  print() {
    console.log("start");
    console.log(this.head.value);
    while (this.head.next) {
      this.head = this.head.next;
      console.log(this.head.value);
    }
    console.log("end");
  }

  insert(value, index) {
    const newNode={
      value:value,
      next:null
    }
   for(let i=0;this.head.next;i++){
     if(i==index){
    newNode.next=this.head.next
    this.head=newNode
     }
     else{
      this.head = this.head.next
     }
        
   }
  }
}

const newLinkedList = new LinkedList(10);

newLinkedList.append(30);
newLinkedList.append(60);
newLinkedList.append(32);
newLinkedList.append(62);
newLinkedList.prepend(20);
newLinkedList.print();
newLinkedList.insert(100,1)
newLinkedList.print();
