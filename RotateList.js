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
    
    rotateList(position) {
        if(!this.head || position <= 0) {
            return;
        }
        let length = 1;
        let currentNode = this.head;
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
            length++;
        }
        
        currentNode.next = this.head;
        position = position % length;
        // let stepToNewTail = length - position;
        // console.log("stepToNewTail :", stepToNewTail)
        let newTail = this.head;
        
        for(let i = 1; i < position; i++) {
            newTail = newTail.next;
        }
        
        this.head = newTail.next;
        newTail.next = null;
        
        // while(currentPosition !== position) {
        //     currentNode = currentNode.next;
        //     currentPosition++;
        // }
        // let nextNode = currentNode.next;
        // currentNode.next = null;
        // currentNode = nextNode;
        // while(currentNode.next !== null) {
        //     currentNode = currentNode.next;
        // }
        // currentNode.next = this.head;
        // this.head = nextNode;
    }
}


const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.add(50);
// linkedList.add(23);
linkedList.print();
// const k = 6;
// const position = k % linkedList.size;
linkedList.rotateList(2);
console.log("after replace the linked list");
linkedList.print();




