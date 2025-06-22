## Project Overview

This project implements a LinkedList data structure in JavaScript. The main components and features include:

- **LinkedList Class / Factory**: Represents the full list.
- **Node Class / Factory**: Contains a `value` property and a `nextNode` property, both set to `null` by default.

### Core Functions

- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size`: Returns the total number of nodes in the list.
- `head`: Returns the first node in the list.
- `tail`: Returns the last node in the list.
- `at(index)`: Returns the node at the given index.
- `pop`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the passed-in value is in the list, otherwise returns `false`.
- `find(value)`: Returns the index of the node containing `value`, or `null` if not found.
- `toString`: Represents your LinkedList objects as strings, e.g., `( value ) -> ( value ) -> null`.

### Extra Credit

- `insertAt(value, index)`: Inserts a new node with the provided value at the given index.
- `removeAt(index)`: Removes the node at the given index.

> **Tip:** When inserting or removing a node, update the `nextNode` links of the affected nodes accordingly.

---

## Testing

To test your LinkedList implementation:

1. Create a `main.js` file and import your LinkedList class or factory.
2. Create an instance and populate it with nodes:

   ```js
   const list = new LinkedList();

   list.append("dog");
   list.append("cat");
   list.append("parrot");
   list.append("hamster");
   list.append("snake");
   list.append("turtle");

   console.log(list.toString());
   ```

3. The expected output should be:

   ```
   ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
   ```
