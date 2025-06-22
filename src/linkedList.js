import Node from "./node.js";

//node
const sNodes = new Node(10, new Node(20, new Node(30)));
console.log("Node value:", sNodes.value); // 10
console.log("Next node value:", sNodes.nextNode.value); // 20
console.log("Next next node value:", sNodes.nextNode.nextNode.value); // 30
console.log("Next next next node:", sNodes.nextNode.nextNode.nextNode); // null
// linkedList
export default class LinkedList {
  constructor() {
    this.head = null; // The first node in the linked list
    this.tail = null; // The last node in the linked list
    this.length = 0; // The number of nodes in the linked list
  }

  // Append a new node to the linked list
  append(value) {
    const newNode = new Node(value);
    // Create a new node with the given value
    // If the list is empty, set both head and tail to the new node
    // Otherwise, link the new node to the end of the list and update the tail
    // Increment the length of the linked list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Prepend a new node to the linked list
  prepend(value) {
    const newNode = new Node(value, this.head);
    // Create a new node with the given value and link it to the current head
    // If the list is empty, set both head and tail to the new node
    // Otherwise, update the head to the new node and increment the length
    if (!this.tail) {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  // Get the size of the linked list
  size() {
    let count = 0; // Initialize a counter to zero
    // Traverse the linked list starting from the head
    // Increment the counter for each node encountered
    // Return the total count of nodes in the linked list
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  // Get the head node of the linked list
  head() {
    return this.head; // Return the head node of the linked list
  }

  // Get the head node of the linked list
  headValue() {
    return this.head ? this.head.value : null;
    // Return the value of the head node, or null if the list is empty
  }

  // Get the tail node of the linked list
  tail() {
    let currentNode = this.head; // Start from the head node
    // Traverse the linked list until reaching the last node
    // Return the last node of the linked list
    if (!currentNode) return null;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  // Get the value of the tail node
  tailValue() {
    return this.tail ? this.tail.value : null;
    // Return the value of the tail node, or null if the list is empty
  }

  //   Get the node at a specific index

  at(index) {
    let currentNode = this.head; // Start from the head node

    let count = 0; // Initialize a counter to zero
    while (currentNode) {
      // Traverse the linked list
      if (count === index) {
        // If the current index matches the desired index
        // Return the current node
        // This is the node at the specified index

        return currentNode;
      }
      count++; // Increment the counter
      currentNode = currentNode.nextNode; // Move to the next node
    }
    return null; // If index is out of bounds
  }

  // Remove the first node from the linked list
  shift() {
    if (!this.head) return null; // List is empty
    const value = this.head.value;
    this.head = this.head.nextNode;
    if (!this.head) {
      this.tail = null; // If the list becomes empty
    }
    this.length--;
    return value;
  }
  // Remove the last node from the linked list
  pop() {
    if (!this.head) return null; // List is empty
    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return value;
    }
    let currentNode = this.head;
    while (currentNode.nextNode && currentNode.nextNode !== this.tail) {
      currentNode = currentNode.nextNode;
    }
    const value = this.tail.value;
    this.tail = currentNode;
    this.tail.nextNode = null;
    this.length--;
    return value;
  }

  // Check if the linked list contains a specific value
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // Find the index of a node with a specific value
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return -1; // If value is not found
  }

  // Insert a new node at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.length) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
    this.length++;
  }
  // Remove a node at a specific index
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      //check if index is out of bounds

      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      // If removing the head node
      const value = this.head.value; // Get the value of the head node
      this.head = this.head.nextNode; // Move the head to the next node
      if (!this.head) {
        // If the list becomes empty
        this.tail = null; // Set tail to null
      }
      this.length--; // Decrement the length of the linked list
      return value; // Return the value of the removed node
    }
    let currentNode = this.head; // Start from the head node
    for (let i = 0; i < index - 1; i++) {
      // Traverse to the node before the one to be removed
      currentNode = currentNode.nextNode; // Move to the next node
    }
    const value = currentNode.nextNode.value; // Get the value of the node to be removed
    // Link the current node to the node after the one to be removed
    // If the removed node is the tail, update the tail reference
    currentNode.nextNode = currentNode.nextNode.nextNode;
    if (!currentNode.nextNode) {
      // If the removed node was the tail
      this.tail = currentNode; // Update the tail to the current node
    }
    this.length--; // Decrement the length of the linked list
    return value; // Return the value of the removed node
  }
  // Clear the linked list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Reverse the linked list in place
  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    this.tail = this.head; // Update tail to the current head
    while (currentNode) {
      const nextNode = currentNode.nextNode;
      currentNode.nextNode = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode; // Update head to the last processed node
  }
  // Convert the linked list to a string representation
  toString() {
    let result = "";
    let currentNode = this.head;
    while (currentNode) {
      result += currentNode.value + " -> ";
      currentNode = currentNode.nextNode;
    }
    return result + "null";
  }

  // print the linked list
  print() {
    console.log(this.toString());
  }
  printAll() {
    let current = this.head;
    let index = 0;
    while (current) {
      console.log(`Index ${index}: ${current.value}`);
      current = current.nextNode; // ✅ correct property
      index++;
    }
  }
}
