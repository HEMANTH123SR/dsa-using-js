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

  // print() {
  //   console.log("start");
  //   console.log(this.head.value);
  //   while (this.head.next) {
  //     this.head = this.head.next;
  //     console.log(this.head.value);
  //   }
  //   console.log("end");
  // }
  print() {
    console.log("start");
    let current = this.head; // use a separate variable to hold the current node
    console.log(current.value);
    while (current.next) {
      current = current.next;
      console.log(current.value);
    }
    console.log("end");
  }
  

  insert(value, index) {
    const newNode={
      value:value,
      next:null
    }
  const postiondeValue=this.trav(index-1)
  const nextPointer=postiondeValue.next;
  postiondeValue.next=newNode
  newNode.next=nextPointer;
  this.length++;
  }

  trav(index){
  let counter=0;
  let counderedValue=this.head;
    while(counter!=index){
   counderedValue=counderedValue.next
counter++;
    }
return counderedValue
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
newLinkedList.insert(100,2)
newLinkedList.insert(100,3)
newLinkedList.print();

