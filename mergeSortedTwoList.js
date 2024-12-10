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
    
    // circular print
    // print() {
    //     let curr = this.head;
    //     console.log("data --> ", curr.data)
    //     while(curr.next !== this.head) {
    //         curr = curr.next;
    //         console.log("data --> ", curr.data);
    //     }
    // }
    
    deleteNodeUsingOneNode(key) {
        let curr = this.head;
        while(curr !== null && curr.data !== key) {
            curr = curr.next;
        }
        if(curr.next === null) {
            curr = null;
            // console.log(curr);
            return;
        }
        curr.data = curr.next.data;
        curr.next = curr.next.next;
        // console.log("current :", curr.next);
        // let next = curr.next;
        // curr = curr.next;
    }
    
    print() {
        let curr = this.head;
        while(curr !== null) {
            console.log("data --> ", curr.data);
            curr = curr.next;
        }
    }
}

var add = function(head, data) {
    const node = new Node(data);
    console.log(node)
    if(head === null) {
        head = node;
        return head;
    }
    let curr = head;
    while(curr.next !== null) {
        curr = curr.next;
    }
    curr.next = node;
}

var mergeList = function(list1, list2) {
    let newList = new Node();
    let curr = newList;
    while(list1 !== null && list2 !== null) {
        if(list1.data <= list2.data) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    curr = list1 || list2;
    return newList.next;
}

const firstList = new LinkedList();
firstList.add(1);
firstList.add(3);
firstList.add(5);
firstList.add(7);

const secondList = new LinkedList();
secondList.add(2);
secondList.add(4);
secondList.add(6);
secondList.add(8);

const head = mergeList(firstList.head, secondList.head);
console.log("head :", head);


