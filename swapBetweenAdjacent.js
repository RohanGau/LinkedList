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
    
    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log("data --> ", curr.data);
            curr = curr.next;
        }
    }
    
    swap() {
        if(!this.head && !this.head.next) return;
        let curr = this.head;
        let next;
        while(curr !== null && curr.next !== null) {
            [curr.data, curr.next.data] = [curr.next.data, curr.data];
            curr = curr.next.next;
        }
    }
    
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
// linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.print();
linkedList.swap();
console.log("swapped");
linkedList.print();
// linkedList.recursion(n.head);
// linkedList.print();
