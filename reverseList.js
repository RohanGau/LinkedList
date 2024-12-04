

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
    
    
    // using iterative method
    reverseList() {
        let current = this.head;
        let prev = null;
        let next;
        while(current !== null) {
            // store next
            next = current.next;
            // reverse pointer one position ahead
            current.next = prev;
            // move pointers one position ahead
            prev = current;
            current = next;
        }
        this.head = prev;
        console.log("reversed");
    }
    
    // using recursion
    reverseListUsingRecursion(current, previous = null) {
        if(current === null) {
            return previous;
        }
        let next = current.next;
        current.next = previous;
        return this.reverseListUsingRecursion(next, current);
    }
    
    // using stack
    reverseLinkedListStack() {
        let stack = [];
        let temp = this.head;
        while(temp.next !== null) {
            stack.push(temp);
            temp = temp.next;
        }
        this.head = temp;
        while(stack.length > 0) {
            const node = stack.pop();
            temp.next = node;
            temp = temp.next;
        }
        temp.next = null;
        console.log("reversed");
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
// linkedList.reverseList();
// linkedList.head = linkedList.reverseListUsingRecursion(linkedList.head)
linkedList.reverseLinkedListStack();
linkedList.print();
// linkedList.middleElement();
// linkedList.middleElementApproachTwo();













