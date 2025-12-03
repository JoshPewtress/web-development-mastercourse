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
        - [Hoisting Example](#hoisting-example)
    - [let](#let)
    - [const](#const)

---

## Script Tag

JavaScript is added to HTML pages using the `<script>` tag. This tag tells the browser where to find and execute JavaScript code.

### Internal Script
You can write JavaScript directly inside a `<script>` tag within an HTML file.

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
`console.log()` outputs text, variables, and data to the browser's developer console.

```js
console.log("This is a message.");
```

To access the **Console** open the browser's developer tools (F12) and select the console tab to see the output.

---

## Variables

Variables in JavaScript are used to store values.  
There are three ways to declare variables: `var`, `let`, and `const`.  
Each behaves differently and has specific use cases.

### var
`var` is the oldest way to declare a variable. It is **function-scoped** and allows **redeclaration**. It should generally be avoided in modern JavaScript due to confusing behavior such as **hoisting**.

```js
var total = 10;
var total = 20; // allowed, but not recommended
```

### Hoisting Example

```js
console.log(x); // undefined, but no error
var x = 5;
```

The variable is "hoisted" to the top of its scope, but its value is not.

---

### let
`let` is the recommended way to declare variables that may change over time.

- **Block-scoped** (contained within `{}`)
- **Cannot** be redeclared in the same scope
- **Can** be reassigned

```js
let count = 1;
count = 2; // allowed
```

Example showing block scope:

```js
let value = 10;

{
    let value = 20; // separate variable, only inside the braces
    console.log(value); //20
}

console.log(value);
```

---

### const
`const` is used for **variables that should never be reassigned**.

- Must be given a value at declaration
- Cannot be reassigned
- Still block-scoped like `let`

```js
contst pi = 3.14159;
```

Attempting to change it:

```js
pi = 4; // Error: Assignment to constant variables
```

Note:  
If the value is an **object or array**, the contents can change, but the variable name cannot be reassigned.

```js
const person = { name: "Josh" };
person.name = "Josh"; // allowed
person = {}; // not allowed
```

---