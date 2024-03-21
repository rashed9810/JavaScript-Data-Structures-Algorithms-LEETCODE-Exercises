class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length =  0;
    }

    insert(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            this.head.next = newNode;
            this.tail = newNode;

        }
    }
    
    printList() {
        let temp = this.head;
        while(temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }

    }

    getHead() {
        if(this.head === null) {
            console.log(" Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if(this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length:" + this.length);
    }
}

function test() {
    let myLinkedList = new LinkedList();
    myLinkedList.insert(4);
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();
    console.log("\nLinked List:")
    myLinkedList.printList();
}

test();
