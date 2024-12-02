

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    
    add(element) {
        const node = new Node(element);
        if(this.head !== null) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        } else {
            this.head = node;
        }
        this.size++;
    }
    
    print() {
        let current = this.head;
        while(current !== null) {
            console.log("element --> ", current.element);
            current = current.next;
        }
    }
    
    // native approach: by counting nodes O(n) time and O(1) space
    middleElement() {
        let current = this.head;
        let middle = Math.floor(this.size / 2);
        while(middle-- > 0) {
            current = current.next;
        }
        console.log("middle element is :", current.element);
    }
    
    // expected approach: by tortoise and hare algorithm O(n) time and O(1) space
    middleElementApproachTwo() {
        let slowPointer = this.head;
        let fastPointer = this.head;
        while(fastPointer !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        console.log("middle element is :", slowPointer.element);
    }
}

const linkedList = new LinkedList();
linkedList.add(15);
linkedList.add(34);
linkedList.add(11);
linkedList.add(10);
linkedList.add(87);
linkedList.add(12);
linkedList.print();
linkedList.middleElement();
linkedList.middleElementApproachTwo();

