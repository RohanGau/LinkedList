class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    add(data) {
        let node = new Node(data);
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
    
    makeLoop(data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
            node.next = this.head;
            return;
        }
        let curr = this.head;
        while(curr.next !== this.head)  {
            curr = curr.next;
        }
        curr.next = node;
        node.next = this.head;
    }
    
    makeLoopWithTail(data) {
        // optimize solution
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
            node.next = this.head;
            this.tail = node; // maintian a tail reference
            return;
        }
        this.tail.next = node;
        node.next = this.head;
        this.tail = node;
    }
    
    insertionAtBeginingWithTail(data) {
        let node = new Node(data);
        this.tail.next = node;
        node.next = this.head;
        this.head = node;
    }
    
    deleteSpecificNode(key) {
        if(!this.head) {
            console.log("list is empty")
            return;
        }
        
        if(this.head.data === key && this.head.next === this.head) {
            this.head = null;
            this.tail = null;
            return;
        }
        
        if(this.head.data === key) {
            this.head = this.head.next;
            this.tail.next = this.head;
            return;
        }
        
        let curr = this.head;
        let prev = null;
        
        do {
            prev = curr;
            curr = curr.next;
            if(curr.data === this.head) break;
        } while(curr !== this.head);
        
        if(curr === this.head) {
            console.log("key not found!");
        }
        
        if(this.tail.data === curr.data) {
            prev.next = this.tail.next
            this.tail = prev;
        } else {
            prev.next = curr.next;   
        }
    }
    
    insertionAtBegining(data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
            node.next = this.head;
            return;
        }
        let curr = this.head;
        while(curr.next !== this.head) {
            curr = curr.next;
        }
        curr.next = node;
        node.next = this.head;
        this.head = node;
    }
    
    insertionAtEnd(data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
            node.next = this.head;
            return;
        }
        let curr = this.head;
        while(curr.next !== this.head) {
            curr = curr.next;
        }
        curr.next = node;
        node.next = this.head;
    }
    
    
    checkLoop() {
        let curr = this.head;
        while(curr !== null) {
            if(curr.next === this.head) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }
    
    print() {
        let curr = this.head;
        console.log("data --> ", curr.data)
        while(curr.next !== this.head) {
            curr = curr.next;
            console.log("data --> ", curr.data);
        }
    }
} 

const firstList = new LinkedList();
firstList.makeLoopWithTail(1);
firstList.makeLoopWithTail(3);
firstList.makeLoopWithTail(5);
firstList.makeLoopWithTail(6);
firstList.makeLoopWithTail(7);
firstList.insertionAtEnd(10);
firstList.insertionAtEnd(11);
firstList.print();

firstList.deleteSpecificNode(11);
console.log("delete element 6");
firstList.print();

console.log("is loop :", firstList.checkLoop());
