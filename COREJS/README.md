# JavaScript Notes

JavaScript concepts and best practices learned while following the "Web Development Mastercourse" on [IAmTimCorey.com](https://www.iamtimcorey.com/).

---

## Table of Contents

- [Script Tag](#script-tag)
  - [Internal Script](#internal-script)
  - [External Script](#external-script)
- [Console Output](#console-output)
  - [console.log](#consolelog)
- [Variables](#variables)
  - [var](#var)
  - [let](#let)
  - [const](#const)
- [Working With Variables](#working-with-variables)
  - [Dates](#dates)
  - [Arithmetic](#arithmetic)
  - [String Interpolation](#string-interpolation-template-literals)
  - [Boolean Inversion](#boolean-inversion--operator)
- [Arrays](#arrays)
  - [Adding and Removing items](#adding--removing-items)
  - [Filtering](#filtering-arrays)
  - [Substrings](#substrings)

---

## Script Tag

JavaScript is added to HTML pages using the `<script>` tag. This tag tells the browser where to find and execute JavaScript code.

### Internal Script

```html
<script>
    console.log("Hello from internal JavaScript!");
</script>
```

This is useful for simple tests or small pieces of logic.

---

### External Script

Best practice is to place JavaScript in a separate `.js` file and load it using the `src` attribute.  
This keeps your code organized, reusable, and easier to maintain.

HTML:

```html
<script src="js/app.js"></script>
```

External JS file (`app.js`):

```js
console.log("Hello from an external JavaScript file!");
```

---

## Console Output

JavaScript provides built-in tools for debugging and inspecting values.  
The most common one is `console.log()`.

### console.log

```js
console.log("This is a message.");
```

To access the **Console**, open developer tools (F12) and select the Console tab.

---

## Variables

Variables in JavaScript are used to store values.  
There are three ways to declare variables: `var`, `let`, and `const`.  
Each behaves differently and has specific use cases.

### var

`var` is the oldest way to declare a variable. It is **function-scoped** and allows **redeclaration**, but should generally be avoided due to unpredictable behavior such as **hoisting**.

```js
var total = 10;
var total = 20; // allowed, but not recommended
```

#### Hoisting Example

```js
console.log(x); // undefined (no error)
var x = 5;
```

The variable is hoisted, but the **assignment** is not.

---

### let

`let` is the recommended way to create variables that may change over time.

- Block-scoped (`{}`)
- Cannot be redeclared in the same scope
- Can be reassigned

```js
let count = 1;
count = 2;
```

Example showing block scope:

```js
let value = 10;

{
    let value = 20; // new variable inside block
    console.log(value); // 20
}

console.log(value); // 10
```

---

### const

`const` is used for variables that should never be reassigned.

- Must be assigned immediately
- Cannot be reassigned
- Still block-scoped

```js
const pi = 3.14159;
```

Attempting to reassign:

```js
pi = 4; // Error
```

Objects and arrays can be modified, but not reassigned:

```js
const person = { name: "Josh" };
person.name = "Jace"; // allowed
person = {};          // not allowed
```

---

## Working With Variables

Variables that allow modification can be altered or displayed differently through the use of **arithmetic**, **string interpolation**, and the **boolean inversion operator (`!`)**.  
These tools allow you to transform values and generate dynamic output.

---

### Dates

JavaScript includes the built-in `Date` object for working with times and dates.

#### Creating a Date

```js
const now = new Date();
console.log(now);
```

#### Common Date Methods

```js
now.getFullYear();    // e.g., 2025
now.getMonth();       // 0–11
now.getDate();        // 1–31
now.toLocaleString(); // formatted date + time
```

#### Specific Date

```js
const birthday = new Date(1991, 5, 12); // June 12, 1991
```

---

### Arithmetic

JavaScript supports standard math operations:

- `+` addition  
- `-` subtraction  
- `*` multiplication  
- `/` division  
- `%` remainder  
- `**` exponent  

#### Examples

```js
let total = 10 + 5;     // 15
let diff  = 20 - 7;     // 13
let prod  = 4 * 3;      // 12
let ratio = 16 / 4;     // 4
let mod   = 10 % 3;     // 1
let power = 2 ** 3;     // 8
```

Expression grouping:

```js
let result = (10 + 5) * 2; // 30
```

---

### String Interpolation (Template Literals)

Template literals allow you to embed variables and expressions inside strings using backticks `${ ... }`.

#### Example

```js
const firstName = 'Josh';
const age = 33;

const message = `Hello, my name is ${firstName} and I am ${age} years old.`;
console.log(message);
```

---

### Boolean Inversion (`!` Operator)

The **bang operator** (`!`) flips a boolean value without changing the original.

#### Example

```js
let isOnline = true;

console.log(!isOnline); // false
console.log(isOnline);  // true
```

---

## Arrays

Arrays allow you to store multiple values inside a single variable.  
They are ordered, zero-indexed collections where each item can be accessed, modified, added to, or removed.

### Creating an Array

```js
const items = ['First', 'Second', 'Third'];
```

### Accessing Items (Indexing)

Array indexes start at **0**, meaning:

- `array[0]` → first item  
- `array[1]` → second item  
- `array[2]` → third item  

Example:

```js
console.log(items[1]); // "Second"
```

---

### Adding & Removing Items

- `.push()` — Adds to the end of the array

```js
items.push('Fourth');
console.log(items); 
// ['First', 'Second', 'Third', 'Fourth']
```

- `.pop()` — Remove from the End
  - The poped value can be stored in a variable

```js
const removed = items.pop();
console.log(removed); // 'Fourth'
console.log(items);   // ['First', 'Second', 'Third']
```

---

### Filtering Arrays

`.filter()` allows you to create a **new array** that includes only the elements that pass a test you define.

The pattern looks like:

```js
array.filter(function(item) {
    return /* boolean returning method */;
});
```

Example filtering by string length:

```js
const longWords = items.filter(function(word) {
    return word.length > 5;
});

console.log(longWords); // returns 'Second'
```

This does **not** change the original array—filtering always returns a **new** one.

---

### Substrings

Strings inside arrays (or alone) can be cut using the `.substring(start, end)` method.

- `start` is inclusive  
- `end` is exclusive

```js
const word = "JavaScript";
const part = word.substring(4, 10);

console.log(part); // 'Script'
```

---