# JavaScript in the DOM - Study Notes

This folder contains my notes and examples as I learn how JavaScript interacts with the **DOM (Document Object Model)** using concepts taught in the *Web Development Mastercourse* on [IAmTimCorey.com](https://www.iamtimcorey.com/).

These notes cover how JavaScript locates, selects, and manipulates HTML elements on the page.

---

## Table of Contents

- [What is the DOM?](#what-is-the-dom)
- [Selecting Elements](#selecting-elements)
    - [document.getElementById](#documentgetelementbyid)
    - [document.querySelector](#documentqueryselector)
    - [document.querySelectorAll](#documentqueryselectorall)
- [Modifying Elements](#modifying-elements)
    - [Text](#innertext)
    - [HTML](#innerhtml)
    - [Removing Elements](#removing-elements)
    - [Inline Styles](#inline-styles)
    - [Working with classes](#classes-classlist)
- [Traversing the DOM](#traversing-the-dom)
    - [Selecting Descendants](#selecting-descendants-children)
    - [Moving Up the DOM](#moving-up-the-dom)
    - [Moving Between Siblings](#moving-between-siblings)
    - [Summary of Traversal Tools](#summary-of-traversal-tools)
- [Creating HTML with JavaScript](#creating-html-with-javascript)
    - [innerHTML](#using-innerhtml-least-efficient)
    - [document.createElement](#creating-elements-with-documentcreateelement)
    - [DocumentFragment](#using-documentfragment-most-efficient)
- [Events](#events)
    - [Adding Event Listeners](#adding-event-listeners)
    - [Event Handler Functions](#event-handler-functions)
    - [Preventing Default Behavior](#preventing-default-behavior)
    - [Removing Event Listeners](#removing-event-listeners)
    - [Event Bubbling](#event-bubbling)
    - [Stopping Event Propagation](#stopping-event-propagation)
    - [Event Capturing](#event-capturing)
    - [Using Events to Modify the DOM](#using-events-to-modify-the-dom)
- [Timing and Delayed Actions](#timing-and-delayed-actions)
    - [setTimeout](#settimeout)
    - [Storing Timeout IDs](#storing-timeout-ids)
    - [clearTimeout](#cleartimeout)
    - [Creating a Countdown Timer](#creating-a-countdown-timer)
    - [Cancelable Delayed Actions](#cancelable-delayed-actions)
    - [Delaying UI Changes](#delaying-ui-changes)

---

## What Is the DOM?

The **Document Object Model (DOM)** is the browser's internal representation of an HTML page.  
JavaScript interacts with the DOM to:

- Read elements
- Modify text or attributes
- Changes styles
- Add or remove items from the page
- React to user events

The DOM treats the webpage like a **tree of nodes**, which JavaScript can explore and manipulate.

---

## Selecting Elements

Before modifying anything in the DOM, JavaScript must **select** the element you want to work with.  
There are multiple selector methods, each useful for different situations.

### document.getElementById
Selects a single element by its **id** attribute.

- Fastest selector
- Returns **one** element
- If no element exists, returns `null`

```js
const title = document.getElementById('main-title');
console.log(title);
```

This method only works for elements that have **id="something"** in the HTML.

---

### document.querySelector
Selects **the first matching element** based on a CSS-style selector.

You can target:

- IDs (#id)
- Classes (.class)
- Tags (div, p, img)
- Attribute selectors
- Complex selectors (:hover, :first-child, etc.)

```js
const firstButton = document.querySelector('.btn');
const header = document.querySelector('#main-header');
const firstParagraph = document.querySelector('p');
```

This method returns:

- The **first** matching element
- or `null` if nothing matches

---

### document.querySelectorAll
Selects **all** elements matching a CSS selector.  
Returns a **NodeList**, which acts like an array (but not exactly an array).

```js
const paragraph = document.querySelectorAll('p');
console.log(paragraph);

// looping through them
paragraph.forEach(p => {
    console.log(p.innerText);
});
```

A **NodeList** can be looped through with:

- forEach
- for...of
- Index access (`buttons[0]`, `buttons[1]`)

This method is extremely flexible and commonly used when working with groups of elements.

---

## Modifying Elements

Once selected, elements can be changed, styled, or removed using JavaScript.

### innerText
Changes only the **text content** of an element.

```js
const p = document.getElementById('id-name');
p.innerText = 'New text';
```

- Treats content as plain text
- Does not parse HTML

---

### innerHTML
Replaces or rewrites the **HTML inside an element**.

```js
const list = document.querySelector('ul');
list.innerHTML = '<li>Item one</li><li>Item two</li>';
```

This can remove old elements and insert new ones.

---

### Removing Elements
Any selected element can be removed using **.remove()**.

```js
const p2 = document.querySelector('class-name');
p2.remove();
```

Removes the element entirely from the DOM.

---

### Inline Styles
You can modify CSS properties directly through `.style.property`.

```js
const headingItem = document.querySelector('h1');
headingItem.style.color = 'red';
headingItem.style.fontSize = '1.25rem';
```

Style changes apply immediately and override external CSS.

---

### Classes (classList)
The `classList` object allows you to **add**, **remove**, or **check** for CSS classes.

#### Adding a class

```js
const p1 = document.querySelector('p');
p1.classList.add('class-name');
```

#### Removing a class

```js
p1.classList.remove('class-name');
```

#### Checking for a class

```js
if (p1.classList.contains('class-name')) {
    p1.classList.add('class-name');
};
```

#### Looping through elements and modifying classes

```js
const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(el => {
    if (el.classList.contains('class-name')) {
        el.classList.add('class-name');
    };
});
```

This is commonly used for:

- Applying themes
- Highlighting specific sections
- Cleaning up unwanted auto-generated classes

---

## Traversing the DOM

Dom traversal allows you to navigate between related elements **without running new global queries** every time.  
Instead of repeatedly calling `document.querySelector`, you can move **down**, **up**, or **sideways** through the existing DOM structure starting from an already-selected element.

Traversing improves performance, keeps code cleaner, and helps you work with dynamic or nested content.

### Selecting Descendants (Children)
You can move **downward** into an element's children using either:

1. **Querying inside the element**  
Useful for finding a **specific** descendant.

```js
const container = document.getElementById('content-area');
const title = container.querySelector('section-title');
```

This avoids searching the entire document again.

---

2. **Browsing all children with** `.children.`  
Returns an **HTMLCollection** of direct child elements.

```js
const list = document.getElementById('menu');
const kids = list.children;

for (let i = 0; i < kids.length; i++) {
    console.log(kids[i]);
}
```

To make children easier to loop over, convert them to an array:

```js
const childrenArray = Array.from(list.children);

childrenArray.forEach(el => {
    console.log(el);
});
```

---

### Moving Up the DOM
To move to **parent** elements, you can use:

#### `.parentElement`  
Moves one level upward.

```js
const item = document.querySelector('.menu-item');
console.log(item.parentElement);
```

---

#### `.closest()`  
Searches upward until it finds a matching selector.

```js
const button = document.querySelector('.submit-btn');

const form = button.closest('form'); // nearest <form>
const main = button.closest('main'); // keeps going until <main>
```

`closest()` is excellent for working with nested components or even delegation.

---

### Moving Between Siblings
Siblings are elements that share the same parent.  
You can move **forward** or **backward** through them.

#### `.nextElementSibling`

```js
let item = document.querySelector('li');

while (item !== null) {
    console.log(item);
    item = item.nextElementSibling;
}
```

#### `.previousElementSibling`

```js
let item = document.querySelector('li');

while (item !== null) {
    console.log(item);
    item = item.previousElementSibling;
}
```

These allow you to walk sideways through menus, lists, table rows, etc.

---

### Summary of Traversal Tools

| Direction | Property / Method | Description |
| :--- | :--- | :--- |
| Down | `.children`| Direct children only |
| Down | `.querySelector()` | Search inside a specific element |
| Up | `.parentElement` | One level upward |
| Up | `.closest()` | Finds nearest ancestor matching selector |
| Sideways | `.nextElementSibling` | Move to next sibling |
| Sideways | `.previousElementSibling` | Move to previous sibling |

---

## Creating HTML with JavaScript

JavaScript can dynamically create and insert HTML elements into the DOM.  
There are multiple ways to do this, each with different performance and safety tradeoffs.

Choosing the right approach matters when working with **lists**, **tables**, or **large datasets**.

### Using innerHTML (Least Efficient)
The simplest way to add HTML is by modifying `.innerHTML`.

```js
const list = document.getElementById('key-items');
list.innerHTML += '<li>Our Fourth Li</li>';
```

While this approach is quick and easy, it has drawbacks:

- Re-parses the entire element's HTML every time
- Can overwrite existing event listeners
- Can introduce security risks if user input is involved

Best used only for **small**, **static updates**.

---

### Creating Elements with document.createElement
A safer and more controlled approach is to create elements manually and append them.

```js
const foods = ['Hamburgers', 'Hot Dogs', 'Pasta', 'Bread'];
const foodList = document.getElementById('good-foods');

foods.forEach(food => {
    const el = document.createElement('li');
    el.innerText = food;
    foodList.appendChild(el);
});
```

Benefits of this approach:

- Does not reparse existing HTML
- Preserves event listeners
- Safer for dynamic or user-generated content

This is a **good general-purpose solution**.

---

### Using DocumentFragment (Most Efficient)
When adding **many elements**, the most efficient method is to use a `Document Fragment`.

A `DocumentFragment` exists in memory and does **not** cause browser reflows until it is attached to the DOM.

```js
const fragment = new DocumentFragment();

foods.forEach(food => {
    const el = document.createElement('li');
    el.innerText = food;
    fragment.appendChild(el);
});

foodList.appendChild(fragment);
```

Advantages:

- Only one DOM update
- Best performance for large lists
- Cleaner and more scalable

This is the **preferred approach** when generating many elements.

---

## Events

Events allow JavaScript to **respond to user interactions** such as clicks, key presses, form submissions, and more.  
By listening for events, JavaScript can dynamically update the DOM based on user actions.

### Adding Event Listeners
Event listeners are attached using `.addEventListener()`.

The basic structure is:

```js
element.addEventListener('eventType', handlerFunction);
```

Example:

```js
const addAction = document.getElementById('add-to-list');

addAction.addEventListener('click', addFromLink);
```

This listens for a **click** event and calls a function when it occurs.

---

### Event Handler Functions
Event handlers can be written as:

- Arrow functions (inline)
- Named functions (recommended for reuse and removal)

Named function example:

```js
function addFromLink(e) {
    const li = document.createElement('li');
    li.innerText = 'New List Item';
    document.getElementById('listName').appendChild(li);
}
```

Using named functions allows you to remove listeners later.

---

### Preventing Default Behavior
Some elements (like anchor tags and forms) have built-in behaviors.

Calling `e.preventDefault()` stops the browser's default action.

```js
function addFromLink(e) {
    e.preventDefault(); // prevents page navigation
}
```

This is commonly used when:

- Clicking links used as buttons
- Submitting forms handled by JavaScript

---

### Removing Event Listeners
You can remove an event listener using `.removeEventListener()`.  
This requires the **same function reference** used when adding it.

```js
addAction.addEventListener('click', addFromLink);

function addFromLink(e) {
    e.preventDefault();
    addAction.removeEventListener('click', addFromLink);
}
```

This is useful for:

- One-time actions
- Preventing repeated behavior
- Cleanup after interactions

---

### Event Bubbling
By default events **bubble up** the DOM.

This means:

1. The event fires on the clicked element
2. Then its parent
3. Then higher ancestors

```js
mainEl.addEventListener('click', addLi);
mainHeading.addEventListener(click', addLiFromH1);
```

Clicking the `h1` would normally trigger **both** handlers.

---

### Stopping Event Propagation
Calling `e.stopPropagation()` prevents the event from bubbling further.

```js
function addLiFromH1(e) {
    e.stopPropagation();
    const li = coduement.createElement('li');
    li.innerText = 'Li from H1';
    list.appendChild(li);
}
```

This ensures only the intended handler runs.

---

### Event Capturing
Events normally bubble **up**, but you can listen during the **capture phase** instead.

Passing `true` as the third argument switches the listener to capture mode.

```js
mainEl.addEventListener('click', addLi, true);
```

Capture phase order:

1. Root - target
2. Target
3. Bubble back up (unless stopped)

Capturing is less common but useful in advanced cases.

---

### Using Events to Modify the DOM
Events are often used to dynamically create and insert elements.

```js
function addLi(e) {
    const li = document.createElement('li');
    li.innerText = `LI #${i}`;
    i++;
    list.appendChild(li);
}
```

This pattern combines:

- Event handling
- DOM creation
- State tracking

---

## Timing and Delayed Actions

JavaScript can delay execution of code using **timers**.  
This is commonly used for:

- Delayed actions (sending messages, animations)
- Countdown timers
- Temporary UI feedback
- Cancelable operations

The two primary timer functions are:

- `setTimeout()`
- `clearTimeout()`

### setTimeout
`setTimeout()` runs a function **after a specified delay (in milliseconds)**.

Basic structure:

```js
setTimeout(callbackFunction, delayInMilliseconds);
```

Example:

```js
setTimeout(() => {
    console.log('This runs after 1 second');
}, 1000);
```

---

### Storing TImeout ID's
`setTimeout()` returns a **timeout ID**.  
This ID can be stored in a variable and used later to cancel the timer.

```js
let timeoutId = setTimeout(doSomething, 2000);
```

This is required if you want to stop the delayed action before it happens.

---

### clearTimeout
`clearTimeout()` cancels a scheduled timeout **before it executes**.

```js
clearTimeout(timeoutId);
```

This is useful for:

- Cancel buttons
- Undo actions
- Preventing duplicate executions

---

### Creating a Countdown Timer
A countdown can be created by repeatedly calling `setTimeout()` inside a function.

```js
let countdown = 10;

function countDown() {
    if (countdown > 0) {
        console.log(countdown);
        countdown--;
        setTimeout(countDown, 1000);
    } else {
        console.log('Done!');
        countdown = 10;
    }
}
```

This pattern allows you to:

- Update the UI every second
- Perform an action when the countdown finishes
- Reset state afterward

---

### Cancelable Delayed Actions
By combining `setTimeout()` and `clearTimeout()`, you can create actions that can be **canceled by the user**.

```js
let timeoutId = 0;

function startAction() {
    timeoutId = setTimeout(doAction, 5000);
}

function cancelAction() {
    clearTimeout(timeoutId);
}
```

This is commonly used for:

- Email send delays
- Undo notifications
- Confirmation grace periods

---

### Delaying UI Changes
Timers can also delay **visual feedback**, such as removing a temporary class.

```js
function addItem(item) {
    item.classList.add('new-item');
    setTimeout(removeHighlight, 2000, item);
}

function removeHighlight(el) {
    el.classList.remove('new-item');
}
```

Passing parameters into `setTimeout()` allows you to target specific elements rather than all matching elements.

---