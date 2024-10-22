// Node class to represent each element in the LinkedList
class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null; // Initially, the next node is null
    }
}

// LinkedList class that manages the nodes
class LinkedList<T> {
    head: ListNode<T> | null;

    constructor() {
        this.head = null; // The head of the linked list starts as null
    }

    // Add a new node with the given value to the end of the linked list
    append(value: T): void {
        const newNode = new ListNode(value);
        
        if (this.head === null) {
            // If the list is empty, the new node becomes the head
            this.head = newNode;
        } else {
            // Traverse to the end of the list and attach the new node
            let current: ListNode<T> | null = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Add a new node with the given value to the start of the linked list
    prepend(value: T): void {
        const newNode = new ListNode(value);
        if (this.head === null) {
            // If the list is empty, the new node becomes the head
            this.head = newNode;
        } else {
            // New node points to the current head, and then it becomes the new head
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // Delete a node with a specific value from the linked list
    delete(value: T): void {
        if (this.head === null) {
            // If the list is empty, nothing to delete
            return;
        }

        // If the head is the node to be deleted, move the head to the next node
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        // Traverse the list to find the node before the one to be deleted
        let current: ListNode<T> | null = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        // If the next node is the one to be deleted, skip it by changing the pointer
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    // Search for a node with a specific value in the linked list
    find(value: T): ListNode<T> | null {
        if (this.head === null) {
            return null; // If the list is empty, return null
        }

        // Traverse the list to find the node with the given value
        let current: ListNode<T> | null = this.head;
        while (current !== null) {
            if (current.value === value) {
                return current; // Return the node if found
            }
            current = current.next;
        }

        return null; // If the node is not found, return null
    }

    // Print the linked list values
    print(): void {
        if (this.head === null) {
            console.log("LinkedList is empty");
            return;
        }

        // Traverse the list and print each node's value
        let current: ListNode<T> | null = this.head;
        let result = "";
        while (current !== null) {
            result += current.value + " -> ";
            current = current.next;
        }
        console.log(result + "null"); // End with null to signify the end of the list
    }
}

// Example usage:

// Create a new LinkedList
const list = new LinkedList<number>();

// Append values to the linked list
list.append(10);
list.append(20);
list.append(30);

// Print the linked list
list.print(); // Output: 10 -> 20 -> 30 -> null

// Prepend a value to the linked list
list.prepend(5);
list.print(); // Output: 5 -> 10 -> 20 -> 30 -> null

// Find a value in the linked list
const foundNode = list.find(20);
console.log("Found node:", foundNode?.value); // Output: Found node: 20

// Delete a value from the linked list
list.delete(10);
list.print(); // Output: 5 -> 20 -> 30 -> null

// Delete the head node
list.delete(5);
list.print(); // Output: 20 -> 30 -> null

// Delete a value that doesn't exist
list.delete(100); // Nothing happens, as 100 isn't in the list
list.print(); // Output: 20 -> 30 -> null
