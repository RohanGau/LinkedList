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
    
    removedDuplicateElement() {
        // let curr = this.head;
        // let prev = null;
        
        // while(curr !== null) {
        //     if(prev && prev.data === curr.data) {
        //         prev.next = curr.next;
        //         curr = prev;
        //     } else {
        //         prev = curr;
        //     }
        //     curr = curr.next;
        // }
        let curr = this.head;
        while(curr !== null && curr.next !== null) {
            if(curr.data === curr.next.data) {
                curr.next = curr.next.next;
            } else {
                curr = curr.next;
            }
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
linkedList.makeLoop();
// linkedList.print();
// linkedList.removedDuplicateElement();
// console.log("removed duplicates element :");
// linkedList.print();
