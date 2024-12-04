class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    add(data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
        } else {
            let curr = this.head;
            let prev = null;
            while(curr.next !== null) {
                curr = curr.next;
            }
            curr.next = node;
            node.prev = curr;
        }
        this.size = this.size + 1;
    }
    
    forwardTraversal(head) {
        let curr = head;
        while(curr !== null) {
            // output data of the current node
            console.log(curr.data + " ");
            // move to the next node
            curr = curr.next;
        }
        // console.log("")
    }
    
    backwardTraversal(tail) {
        let curr = tail;
        while(curr !== null) {
            // output data of the current node
            console.log(curr.data + " ");
            // move to the next node
            curr = curr.prev;
        }
    }
    
    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log("data :", curr.data);
            curr = curr.next;
        }
    }
    
    addDataAtBegning(data) {
        const node = new Node(data);
        if(this.head !== null) {
            node.next = this.head;
            this.head.prev = node;
        }
        this.head = node;
        this.size++;
    }
    
    addDataAtLast(data) {
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
        node.prev = curr;
        curr.next = node;
    }
    
    addDataAtSpecificPosition(position, data) {
        if(position === 1) {
            this.addDataAtBegning(data)
        } else if(position === this.size) {
            this.addDataAtLast(data); 
        }
        const node = new Node(data);
        let curr = this.head;
        let currPosition = 1;
        while(currPosition !== position-1) {
            curr = curr.next;
            currPosition++;
        }
        node.next = curr.next;
        node.prev = curr;
        curr.next.prev = node;
        curr.next = node;
        console.log("Added !");
    }
    
    deletionAtTheBegning() {
        this.head = this.head.next;
        this.head.prev = null;
        console.log("deleted from begning !");
    }
    
    deletionAtTheLast() {
        let curr = this.head;
        while(curr.next !== null) {
            curr = curr.next;
        }
        curr.prev.next = null;
        curr.prev = null;
    }
    
    deletion(data) {
        let curr = this.head;
        while(curr.data !== data) {
            curr = curr.next;
        }
        if (curr.prev) {
		    curr.prev.next = curr.next;
    	}
    
    	// Update the next node's prev pointer
    	if (curr.next) {
    		curr.next.prev = curr.prev;
    	}
    }
    
    getTail() {
        let tail = this.head;
        while(tail.next !== null) {
            tail = tail.next;
        }
        return tail
    }
    
    reverseList() {
        if(this.head === null || this.head.next === null) {
            return
        }
        let currentNode = this.head;
        let previousNode = null;
        let nextNode;
        while(currentNode !== null) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            currentNode.prev = nextNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.head = previousNode;
    }
    reverseListRecursion(currentNode, previousNode = null) {
        if(currentNode === null) {
            return previousNode;
        }
        
        let nextNode = currentNode.next;
        currentNode.next = previousNode;
        currentNode.prev = nextNode;
        previousNode = currentNode;
        return this.reverseListRecursion(nextNode, previousNode);
        // if(this.head === null || this.head.next === null) {
        //     return
        // }
        // let currentNode = this.head;
        // let previousNode = null;
        // let nextNode;
        // while(currentNode !== null) {
        //     nextNode = currentNode.next;
        //     currentNode.next = previousNode;
        //     currentNode.prev = nextNode;
        //     previousNode = currentNode;
        //     currentNode = nextNode;
        // }
        // this.head = previousNode;
    }
}


const linkedList = new LinkedList();

linkedList.add(19);
linkedList.add(20);
linkedList.add(22);
linkedList.add(12);
// linkedList.print();
// linkedList.backwardTraversal(linkedList.tail);
linkedList.addDataAtBegning(45);
linkedList.addDataAtBegning(25);
linkedList.addDataAtLast(88);
linkedList.addDataAtLast(77);
linkedList.addDataAtLast(43);
// linkedList.forwardTraversal(linkedList.head);
linkedList.deletionAtTheBegning();
linkedList.deletionAtTheBegning();
linkedList.addDataAtSpecificPosition(5, 44);
linkedList.addDataAtSpecificPosition(7, 72);
linkedList.addDataAtSpecificPosition(3, 92);
console.log("before reverse :")
linkedList.print();
// linkedList.forwardTraversal(linkedList.head);
// linkedList.deletion(72);
// console.log("deleted !!");
// console.log("backward !")
// const tail = linkedList.getTail();
// linkedList.reverseList();
linkedList.head = linkedList.reverseListRecursion(linkedList.head);
console.log("after reverse :");
// linkedList.print();
// const tail = linkedList.getTail();
// linkedList.forwardTraversal(linkedList.head);
// linkedList.forwardTraversal(linkedList.head);

// linkedList.backwardTraversal(tail);
// linkedList.forwardTraversal(linkedList.head);
// linkedList.forwardTraversal(linkedList.head);
// linkedList.deletionAtTheLast();
// linkedList.deletionAtTheLast();
// linkedList.deletionAtTheLast();
// console.log("size :", linkedList.size)
// console.log(linkedList.head);




