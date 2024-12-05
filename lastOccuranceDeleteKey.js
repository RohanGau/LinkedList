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
    // delete last occurance of key value from the list
    // using store previous reference of current node
    deleteLastOccuranceKey(key) {
        let curr = this.head;
        let prev = null;
        let previousNode;
        let result;
        while(curr !== null) {
            if(curr.data === key) {
                previousNode = prev;
                result = curr;
            }
            prev = curr;
            curr = curr.next;
        }
        if(previousNode === null) {
            this.head = result.next;
        } else {
            previousNode.next = result.next;
        }
        // console.log("previousNode :", previousNode);
        // console.log("result :", result);
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
linkedList.deleteLastOccuranceKey(key);
console.log("deleted !!");
linkedList.print();
// const element = linkedList.findLastPosition(position);
// const element = linkedList.findLastPositionTwoPointer(position);
// console.log("position of " + position + " is :" + element);
// const k = 6;
// const position = k % linkedList.size;
// linkedList.rotateList(2);
// console.log("after replace the linked list");
// linkedList.print();




