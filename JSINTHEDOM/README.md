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