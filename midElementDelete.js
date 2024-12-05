class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    add(data) {
        const node = new Node(data);
        this.size++;
        if(this.head === null) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
    }
    
    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log("data --> ", curr.data);
            curr = curr.next;
        }
    }
    
    deleteMiddleElement() {
        let curr = this.head;
        let size = 0;
        while(curr !== null) {
            curr = curr.next;
            size++;
        }
        let middlePosition = Math.floor(size / 2) + 1;
        curr = this.head;
        let prev = null;
        while(middlePosition !== 1) {
            prev = curr;
            curr = curr.next;
            middlePosition--;
        }
        prev.next = curr.next;
    }
    
    deleteMiddleElementByTwoPointer() {
        let slowPointer = this.head;
        let fastPointer = this.head;
        while(fastPointer !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        
        console.log("slowPointer :", slowPointer);
        console.log("fastPointer :", fastPointer);
    }
    
}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
linkedList.add(20);
linkedList.add(70);
// linkedList.add(23);
linkedList.print();
const key = 20;
linkedList.deleteMiddleElementByTwoPointer();
// console.log("deleted !!");
// linkedList.print();
// const element = linkedList.findLastPosition(position);
// const element = linkedList.findLastPositionTwoPointer(position);
// console.log("position of " + position + " is :" + element);
// const k = 6;
// const position = k % linkedList.size;
// linkedList.rotateList(2);
// console.log("after replace the linked list");
// linkedList.print();




