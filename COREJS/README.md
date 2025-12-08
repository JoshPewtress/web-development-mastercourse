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
- [Conditionals](#conditionals)
  - [If, Else If, and Else](#if-else-if-and-else)
  - [Logical Operators](#logical-operators-and--or)
  - [Equality Operators](#equality-operators--vs)
  - [Switch Statements](#switch-statements)
- [Loops](#loops)
  - [For Loop](#for-loop)
  - [For...of Loop](#forof-loop)
  - [For...in Loop](#forin-loop)
  - [Array.forEach()](#arrayforeach)
  - [While Loop](#while-loop)
- [Functions](#functions)
  - [Function Declarations](#function-declarations)
  - [Arrow Functions](#arrow-functions)
  - [Callback Functions](#callback-functions)
- [Objects](#objects)
  - [Creating an Object](#creating-an-object)
  - [Nested Objects](#nested-objects)
  - [Nested Functions](#nested-functions)
  - [Modifying Object Properties](#modifying-object-properties)
  - [Destructuring](#destructuring)
  - [JSON](#json)
- [Classes](#classes)
  - [Constructors](#constructor)
  - [Fields](#fields-public-and-private)
  - [Getters and Setters](#getters-and-setters)
  - [Methods](#methods-inside-classes)
  - [Instantiating a class](#creating-instantiating-a-class)
  - [Full Example](#full-example)
- [IIFE](#iife-immediately-invoked-function-expression)
  - [Basic Structure of an IIFE](#basic-structure-of-an-iife)
  - [Creating a Namespace](#creating-a-namespace-with-iife)
  - [Declaring Public & Private Members](#public-vs-private-members-inside-an-iife)
  - [Passing in Variables](#passing-variables-into-an-iife)
  - [Adding Functions](#adding-functions-to-an-iife)
  - [Adding Classes](#adding-classes-to-an-iife)
  - [Multiple IIFEs with Same Namespaces](#multiple-iifes-same-namespace)
  - [Multiple IIFEs with Different Namespaces](#multiple-iifes-different-namespaces)
- [Scope](#scope)
  - [Global Scope](#global-scope)
  - [Function Scope](#function-scope-var)
  - [Block Scope](#block-scope-let-and-const)

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

## Conditionals

Conditionals allow JavaScript to make decisions based on whether something is true or false.  
They enable branching logic in your code so different actions happen under different conditions.

---

### If, Else If, and Else

The most common conditional structure is the `if / else if / else` chain.

```js
let temperature = 70;

if (temperature > 80) {
    console.log("It's hot!");
} else if (temperature > 60) {
    console.log("It's warm.");
} else {
    console.log("It's cold.");
}
```

- `if` runs only when its condition is true  
- `else if` provides additional checks  
- `else` runs if no previous condition was true  

---

### Logical Operators (AND &&, OR ||)

Logical operators allow combining multiple conditions.

#### AND (&&)
Both conditions must be true.

```js
let age = 25;
let hasID = true;

if (age >= 18 && hasID) {
    console.log("You may enter.");
}
```

#### OR (||)
At least one condition must be true.

```js
let hasKey = false;
let knowsCode = true;

if (hasKey || knowsCode) {
    console.log("You may enter.");
}
```

---

### Equality Operators: `==` vs `===`

#### `==` — *Loose Equality*
- Converts the values to the same type before comparing  
- `"1" == 1` → true  
- `"true" == 1` → false  

#### `===` — *Strict Equality*
- No type conversion  
- Values must be exactly the same type *and* value  
- `"1" === 1` → false  
- `1 === 1` → true  

**Always prefer `===`** in real-world code because it's predictable and avoids hidden type conversions.

```js
console.log("1" == 1);  // true  (string converted to number)
console.log("1" === 1); // false (different types)
```

---

### Switch Statements

A `switch` statement checks one value against several possible cases.

```js
let color = "red";

switch (color) {
    case "red":
        console.log("Stop!");
        break;

    case "yellow":
        console.log("Slow down.");
        break;

    case "green":
        console.log("Go!");
        break;

    default:
        console.log("Invalid color.");
}
```

- `break` prevents fall-through  
- `default` handles unmatched cases  

---

## Loops

Loops allow you to repeat actions until a condition is met. They are commonly used to iterate over numbers, arrays, and other collections of data.

JavaScript provides several types of loops, each with different use cases and levels of control.

### For Loop
A **for loop** runs a block of code a specific number of times and has three main parts:

1. **Initializer** - usually declares a counter variable
2. **Condition** - loop continues while this is true
3. **Increment/Decrement** - updates the counter each iteration

```js
for (let i = 0; i < 5; i++) {
  console.log(`Loop iteration: ${i}`);
}
```

This loop starts at `0`, runs while `i < 5`, and stops once `i` becomes `5`.

---

### For...of Loop
The **for...of loop** is a cleaner way to loop through **arrays** and other iterable collections.

Instead of managing a counter, you directly access each element:

```js
const items = ['apple', 'banana', 'cherry'];

for (const item of items) {
  console.log(item);
}
```

This loop continues automatically until all items are processed.

---

### For...in Loop
The **for...in loop** iterates over the **keys (property names)** of an object.  
This makes it useful for inspecting everything inside an object.

```js
const person = {
  name: 'Josh',
  age: 33,
  job: 'Developer'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

Output:

```js
name: Josh
age: 33
job: Developer
```

`for...in` is primarily used with **objects**, not arrays.

---

### Array.forEach()
`.forEach()` is a method available on arrays that runs a function once per element.

It behaves similarly to `for...of` but is written using a callback function.

```js
const items = ['apple', 'banana', 'cherry'];

items.forEach(function(item) {
  console.log(item);
});
```

---

### While Loop
A **while loop** runs as long as its condition remains true.

Unlike `for`, it does **not** automatically increment a counter, you must manage that yourself.

```js
let count = 0;

while (count < 3) {
  console.log(`Count: ${count}`);
  count++;
}
```

Be careful. If you forget to update the counter, you create an **infinite loop**.

---

## Functions

Functions allow you to **encapsulate reusable logic** so you can run the same code multiple times without rewriting it.

They can accept **parameters**, perform work, and optionally **return** values.

JavaScript supports multiple ways to define functions, but the two you've learned so far are:

- **Function Declarations** (traditional syntax)
- **Arrow Functions** (the modern best practice in most cases)

### Function Declarations
A function declaration uses the `function` keyword and creates a named, reusable block of code.

```js
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet('Josh'));
```

Function declarations:

- Can be called **before or after** they appear in the code (they are hoisted)
- Are useful when naming the function and improves readability

---

### Arrow Functions (`=>`)
An **arrow functions** is a shorter, modern way to write a function.

It is commonly used because it reduces boilerplate and improves clarity.

Equivalent arrow function for the example above:

```js
const greet = (name) => {
  return `Hello, ${name}!`;
}
```

If a function returns something immediately, you can shorten it even more:

```js
const greet = name => `Hello ${name}!`;
```

---

### Callback Functions
A callback is a function passed into another function.  
Arrow functions make this especially clean.

```js
const numbers = [1, 2, 3];

numbers.forEach(num => console.log(num * 2));
```

---

## Objects

Objects in JavaScript allow you to store related date and functionality together using **key/value pairs**. They are ideal for representing real world things such as users, products, settings, or game entities.

You can also nest objects inside other objects and include functions within them.

### Creating an Object
Objects are declared using `{ }` and contain keys paired with values.

```js
const person = {
  firstName: 'Josh',
  lastName: 'Pewtress',
  age: 31
};

console.log(person.firstName); // 'Josh'
```

Keys are string by default, and you access values with dot notation (`.`) or bracket notation (`['key']`).

---

### Nested Objects
Objects can contain other objects to represent structured data.

```js
const user = {
  name: 'Lavitz',
  contact: {
    email: 'Slambert@example.com',
    phone: '123-4567'
  },
  job: 'Spearman'
};

console.log(user.contact.email);
```

---

### Nested Functions
Functions can be nested inside of objects.

```js
const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply: (a, b) => a * b
};

console.log(calculator.add(1, 2));
console.log(calculator.multiply(2, 3));
```

Both traditional function syntax and arrow functions can be used inside objects.

---

### Modifying Object Properties
Even if an object is declared with `const`, its **contents** can change.

```js
const person = {
  name: 'Josh',
  age: 31
};

person.age = 32;
person.name = 'Joosh';

console.log(person);
```

You **cannot** reassign the entire object.

```js
person = {}; // Not allowed
```

---

### Destructuring
Destructuring allows you to extract properties from an object into standalone variables.    
This can also be used with nested objects.

```js
const pizza = {
  toppings: {
    rightHalf: {
      cheese: 'Parmesan',
      meat: 'Bacon',
      veggies: 'Black Olives'
    },
    leftHalf: {
      meat: 'Pepperoni'
    }
  }
};

const { toppings: { rightHalf: { cheese: rightCheese }}} = pizza;

console.log(rightCheese);
```

Syntax to rename a deconstructed property is `(property): (new name)`.

---

### JSON
**JSON (JavaScript Object Notation)** is a lightweight data format used for storing and transferring data.  
It looks very similar to JavaScript objects but follows strict rules:

- Keys **must** be wrapped in double quotes
- Strings must be **double quotes**
- No trailing commas
- Functions are **not** allowed

JSON is commonly used when sending data to or receiving data from APIs.

---

#### Converting an Object to JSON
Use `JSON.stringify()` to turn a JavaScript object into a JSON string.

```js
const person = {
  name: 'Josh',
  age: 31,
  job: 'Developer'
};

const json = JSON.stringify(person);
console.log(json);
// '{"name":"Josh","age":31,"job":"Developer"}'
```

This is often necessary when:

- Saving data to local storage
- Sending data over the network
- Logging structured information

---

#### Convering JSON Back into an Object
Use `JSON.parse()` to convert JSON text back into a normal JavaScript object.

```js
const parsed = JSON.parse(json);

console.log(parsed.name); // 'Josh'
console.log(parsed.age); // 31
```

---

## Classes

Classes provide a blueprint for creating **multiple objects** with the same structure but different data. They are more extensible than plain objects because you can instantiate new versions using the `new` keyword.

A class is defined using the `class` keyword:

```js
class Person {
  // class body
}
```

### Constructor
The **constructor** is a special method that runs automatically when a new instance is created. It initializes the properties of the class.

```js
class Person {
  constructor(firstName, ln) {
    this.firstName = firstName;
    this.lastName = ln;
  }
}
```

Class fields are **not required** to use the same name as the information provided into the constructor.

---

### Fields (Public and Private)
You can create fields **without** using `let`, `var`, or `const` inside a class.

#### Public field

```js
class Person {
  age;
}
```

#### Private field
Private fields begin with `#` and are only accessible inside the class:

```js
class Person {
  #social;
}
```

Private fields **must** be accessed using getters and setters.

---

### Getters and Setters
Getters retrieve values.  
Setters update values.  
They are frequently used to protect or format private data.

```js
class Person {
  #social;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get ssn() {
    return `***-**-${this.#social.substring(this.#social.length - 4)}`;
  }
  set ssn(social) {
    this.#social = social;
  }
}
```

---

### Methods Inside Classes
Methods are functions inside a class.

Classes support both traditional functions *and* arrow functions.  
Arrow functions inside classes preserve `this` in ways that objects methods cannot.

```js
class Person {
  constructor(name = 'Josh') {
    this.name = name;
  }

  greet() {
    return `Hello, I'm ${this.name}.`;
  }

  shoutName = () => this.name.toUpperCase();
}
```

---

### Creating (Instantiating) a Class
Use the `new` keyword to create a new instance:

```js
const person1 = new Person('Dart', 'Feld');
```

This calls the constructor and assigns the passed-in values.

---

### Full Example

```js
class Person {
  #social;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = "Adventurer"; // public field
  }

  get ssn() {
    return `***-**-${this.#social.substring(this.#social.length - 4)}`;
  }
  set ssn(social) {
    this.#social = social;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  shoutName = () => this.fullName().toUpperCase();
}

const hero = new Person('Dart', 'Feld');
hero.ssn = '123-45-6789';

console.log(hero.fullName());   // 'Dart Feld'
console.log(hero.ssn);          // '***-**-6789'
console.log(hero.shoutName());  // 'DART FELD'
```

---

## IIFE (Immediately Invoked Function Expression)

An **IIFE** is a function that runs immediately after it is created.  
Its main purpose is to create a **private scope** for your code so it does not interfere with other scripts, especially important when third-party JavaScript libraries became common.

Before modern module systems existed, everything in JavaScript shared the **global namespace**.  
If two scripts used the same function or variable name, one could overwrite the other and break your application.

IIFEs solve this by allowing you to create your own **namespace** and encapsulate code inside it.

### Basic Structure of an IIFE

```js
(function() {
  // All code inside here is private.
})();
```

This function executes immediately because of the trailing `()`.

---

### Creating a Namespace with IIFE
A common pattern is to attach your code to the `window` object using a customer property, essentially your **own namespace**.

```js
(function(app) {
  // You can add public members using app.
})(window.app = window.app || {});
```

Breakdown:

- `window.app` - your namespace
- `= window.app || {}`
  - If `app` already exists, reuse it
  - Otherwise initialize it as an empty object
- The `app` parameter inside the IIFE refers to whatever was passed in

This allows you to safely run multiple IIFEs using the **same namespace**, even in different files.

---

### Public vs Private Members Inside an IIFE
Inside an IIFE, you can choose what should be **public** (exposed on your namespace) or **private** (hidden inside the closure).

#### Private variable:

```js
(function(app) {
  counter = 0; // private, not accessible outside
})(window.app = window.app || {});
```

#### Public variable

```js
(function(app) {
  app.counter = 0; // public, due to app.
})(window.app = window.app || {});
```

---

### Passing Variables into an IIFE
You can pass variables into an IIFE by adding an `,` followed by the variable name after the `{}`.

```js
const name = 'Josh';
let isFood = true;

(function(app, firstName, isFood) {
  app.firstName = firstName; // public
  isFood = isFood; // private
})(window.app = window.app || {}, name, isFood);
```

---

### Adding Functions to an IIFE
Functions can be public or private through the use of `app.`, the same as variables.

```js
(function(app) {
  app.sayHello = function() {
    console.log('Hello User!');
  }; // public function

  sayGoodbye = function() {
    console.log('You can\'t call this outside!');
  }; // private function
})(window.app = window.app || {});
```

---

### Adding Classes to an IIFE
Classes can be public or private through the use of `app.`, the same as variables, and functions.

```js
(function(app) {
  app.Person = class {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  };
})(window.app = window.app || {});
```

---

### Multiple IIFEs, Same Namespace
You can split code across files but attach them to the same namespace:

**First file:**

```js
(function(app) {
  app.data = [];
})(window.app = window.app || {});
```

**Second File:**

```js
(function(app) {
  app.addItem = function(item) {
    app.data.push(item);
  };
})(window.app = window.app || {});
```

Both modify the same `app` namespace without overwriting each other.

---

### Multiple IIFEs, Different Namespaces
You may create completely separate namespaces:

```js
(function(game) {
  game.start = function() {
    console.log('I am from the game IIFE');
  };
})(window.app = window.app || {});

(function(ui) {
  ui.start = function() {
    console.log('I am from the ui IIFE');
  };
})(window.app = window.app || {});
```

This prevents naming conflicts even if both namespaces contain a function with the same name.

```js
game.start();
ui.start(); // would be a different function
```

---

## Scope

Scope determines **where variables can be accessed** in JavaScript.  
Different declaration keywords (`var`, `let`, `const`) behave differently depending on the type of scope they create or respect.

JavaScript has three major types of scope:

- **Global Scope**
- **Function Scope**
- **Block Scope**

### Global Scope
A variable is in the **global scope** if it is declared outside of any function or block.

```js
var a = 5;    // global
let b = 10;   // also global
const c = 15; // also global
```

All global variables are accessible anywhere in the script.

---

### Function Scope (`var`)
`var` is **function-scoped**, meaning:

- It is visible everywhere **inside the function** in which it is declared
- It does **not** obey block scope (if statements, loops, etc.)

```js
var a = 5;

function testing() {
  var a = 6; // this creates a NEW variable, but only inside the function
  console.log(a); // 6
}

function testing2() {
  a = 10; // this edits the global `a` if the function is executed
}

console.log(a); // 5
testing2();     // edits the global `a`
console.log(a); // 10
```

---

### Block Scope (`let` and `const`)
`let` and `const` obey **block scope**, meaning they only exist inside the nearest `{ }`.

```js
let a = 5;

function testing() {
  let a = 6; // new variable inside the function
  console.log(a); // 6
}

testing();
console.log(a); // 5
```

This behavior applies to blocks too:

```js
let x = 1;

if (true) {
  let x = 2;      // new variable inside this block
  console.log(x); // 2
}

console.log(x); // 1
```

`const` behaves the same way but cannot be reassigned.

---