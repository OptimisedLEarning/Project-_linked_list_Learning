import LinkedList from "./linkedList.js";
import Node from "./node.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("turtle");
list.append("snake");

list.printAll(); // Prints all values in the linked list
console.log(list.toString()); // Returns a string representation of the linked list

list.prepend("fish");
list.append("bird");
list.prepend("hamster");
list.printAll(); // Prints all values in the linked list

console.log(list.toString()); // Returns a string representation of the linked list

console.log("Size:", list.size()); // 6
console.log("Head:", list.head.value); // dog
console.log("Tail:", list.tail.value); // turtle
console.log("At index 2:", list.at(2).value); // parrot
list.printAll(); // Prints all values in the linked list
console.log(list.toString()); // Returns a string representation of the linked list

console.log("Contains 'snake':", list.contains("snake")); // true
console.log("Find 'cat':", list.find("cat")); // 1
list.printAll(); // Prints all values in the linked list
console.log(list.toString()); // Returns a string representation of the linked list

list.pop();
console.log("After pop:", list.toString());
console.log(list.toString()); // Returns a string representation of the linked list

list.insertAt("fish", 2);
console.log("After insertAt at index 2:", list.toString());

list.removeAt(3);
console.log("After removeAt at index 3:", list.toString());

list.printAll(); // Prints all values in the linked list
console.log(list.toString()); // Returns a string representation of the linked list
