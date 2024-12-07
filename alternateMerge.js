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
    
    mergeList(node) {
        let first = this.head;
        let second = node;
        while(first !==null && second !== null) {
            let firstNext = first.next;
            let secondNext = second.next;
            
            second.next = firstNext;
            first.next = second;
            
            first = firstNext;
            second = secondNext;
        }
    }
} 

const firstList = new LinkedList();
firstList.add(1);
firstList.add(3);
firstList.add(5);
firstList.add(7);
// firstList.add(9);
// firstList.add(20);
const secondList = new LinkedList();
secondList.add(2);
secondList.add(4);
secondList.add(6);
secondList.add(8);
// secondList.print();
firstList.mergeList(secondList.head);
firstList.print();
