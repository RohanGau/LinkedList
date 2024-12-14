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
    
    reverse(k) {
        if (!this.head || k <= 1) return;

        let dummy = new Node(0); // Create a dummy node to simplify connections
        dummy.next = this.head;
        let prevGroupEnd = dummy;

        while (true) {
            // Find the start and end of the current group
            // console.log("prevGroupEnd :", prevGroupEnd);
            if(!prevGroupEnd.next) {
                break;
            }
            let groupStart = prevGroupEnd.next;
            let groupEnd = prevGroupEnd;

            // Traverse k nodes
            for (let i = 0; i < k && groupEnd.next !== null; i++) {
                groupEnd = groupEnd.next;
            }
            // if (!groupEnd) break; // If fewer than k nodes are left, we're done

            // Save the next group's start
            let nextGroupStart = groupEnd.next;
            groupEnd.next = null; // Break the list to isolate the current group

            // Reverse the current group
            let reversedGroupHead = this.reverseGroup(groupStart);

            // Connect the previous group to the reversed group
            prevGroupEnd.next = reversedGroupHead;
            groupStart.next = nextGroupStart;

            // Update prevGroupEnd to the end of the current group
            prevGroupEnd = groupStart;
        }
        this.head = dummy.next;
    }
    
    reverseGroup(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
    
    recursion(curr, prev = null) {
        if(curr === null) {
            return prev;
        }
        let next = curr.next;
        curr.next = prev;
        return this.recursion(next, curr);
    }
    
}

const linkedList = new LinkedList();
// 3 9 5 7 8 3
linkedList.add(3);
linkedList.add(9);
linkedList.add(5);
linkedList.add(7);
linkedList.add(8);
linkedList.add(3);
// linkedList.add(7);
// linkedList.add(8);
// linkedList.add(9);
// linkedList.add(10);
console.log("Original Linked List:");
linkedList.print();

linkedList.reverse(5);

console.log("After Reversing in groups of k = 4:");
linkedList.print();

// linkedList.recursion(n.head);
// linkedList.print();
