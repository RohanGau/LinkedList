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
    
    findLastPosition(position) {
        let curr = this.head;
        let stack = [];
        let size = 0;
        while(curr !== null) {
            stack.push(curr.data);
            curr = curr.next;
            size++;
        }
        if(position > size) {
            return -1;
        }
        return stack[size - position];
    }
    
    // using two pointer approach
    findLastPositionTwoPointer(position) {
        let mainNode = this.head;
        let refNode = this.head;
        let size = 0;
        while(size !== position) {
            refNode = refNode.next;
            size++;
        }
        while(refNode !== null) {
            mainNode = mainNode.next;
            refNode = refNode.next;
        }
        return mainNode.data;
    }
}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
linkedList.add(60);
linkedList.add(70);
// linkedList.add(23);
linkedList.print();
const position = 3;
// const element = linkedList.findLastPosition(position);
const element = linkedList.findLastPositionTwoPointer(position);
console.log("position of " + position + " is :" + element);
// const k = 6;
// const position = k % linkedList.size;
// linkedList.rotateList(2);
// console.log("after replace the linked list");
// linkedList.print();




