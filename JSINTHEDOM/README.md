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