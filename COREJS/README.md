# JavaScript Notes

JavaScript concepts and best practices learned while following the "Web Development Mastercourse" on [IAmTimCorey.com](https://www.iamtimcorey.com/).

---

## Table of Contents

- [Script Tag](#script-tag)
    - [Internal Script](#internal-script)
    - [External Script](#external-script)
- [Console Output](#console-output)
    - [console.log](#consolelog)

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