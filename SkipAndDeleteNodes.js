class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    add(data) {
        const node = new Node(data);
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
    
    makeLoop() {
        let curr = this.head;
        let temp;
        while(curr.next !== null) {
            if(curr.data === 2) {
                temp = curr;    
            }
            curr = curr.next;
        }
        curr.next = temp;
    }
    
    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log("data --> ", curr.data);
            curr = curr.next;
        }
    }
    
    removedItems(m, n) {
        let curr = this.head;
        while(curr !== null) {
            for(let i = 1; i < m && curr !== null; i++) {
                curr = curr.next;
            }
            if(curr === null) break;
            // delete n nodes
            let moveNode = curr.next;
            for(let i = 1; i < n && moveNode !== null ; i++) {
                moveNode = moveNode.next;
            }
            curr.next = moveNode;
            curr = moveNode;
        }
    }
} 

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
// linkedList.add(2);
// linkedList.add(2);
// linkedList.add(2);
// linkedList.add(2);
// linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.add(8);
linkedList.add(9);
let m = 2;
let n = 2;
console.log("Before Remove Items :");
linkedList.print();
linkedList.removedItems(m, n);
console.log("After Remove Items :");
linkedList.print();
// linkedList.makeLoop();
// linkedList.detectLoop();
// console.log(linkedList.detectLoopUsingPointer())
// linkedList.print();
// linkedList.removedDuplicateElement();
// console.log("removed duplicates element :");
// linkedList.print();
