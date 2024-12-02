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
        let node = new Node(element);
        let current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    
    remove(element) {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        }
        let current = this.head;
        let prev = null;

        while (current !== null) {
            if (current.element === element) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                console.log(`Element ${element} removed`);
                return;
            }
            prev = current;
            current = current.next;
        }
        console.log(`Element ${element} not found`);
    }

    search(element) {
        let current = this.head;
        while (current) {
            if (current.element === element) return true;
            current = current.next;
        }
        return false;
    }

    print() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }
        let current = this.head;
        while (current) {
            console.log("element ->", current.element);
            current = current.next;
        }
    }

    toArray() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.element);
            current = current.next;
        }
        return array;
    }

    clear() {
        this.head = null;
        this.size = 0;
        console.log("List cleared.");
    }
}
