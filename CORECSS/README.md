# CSS Notes

CSS information and best practices while following the "Web Development Mastercourse" on [IAmTimCorey.com](https://www.iamtimcorey.com/).

## Selectors

CSS selectors determine **which HTML elements** a style applies to. Two of the most common selectors are **IDs** and **classes**.

### ID Selectors
An `id` is a **unique identifier** that should be used **only once per page**.

- **Usage:** For styling or selecting a *single*, specific element.
- **Selector syntax:** Use the `#` symbol.

```css
#id-name {
    color: steelblue;
}
```

### Class Selectors
A `class` is a **reusable style** that can be applied to **multiple** elements.

- **Usage:** Ideal for styling groups of elements that share appearance or behavior.
- **Selector syntax:** Use the `.` symbol.

```css
.class-name {
    background-color: white;
    color: black;
}
```

---

## Sizing

Element sizing can be done using **fixed units** (such as pixels) or **responsive units** (`em`, `rem`).  
By default, most browsers set the base font size to **16px** unless otherwise specified.

### Fixed Sizing
A pixel (`px`) value is assigned directly within the selector.

- **Pros:** Predictable and consistent.
- **Cons:** Not responsive. Does not scale with user settings.

```css
.class-name {
    font-size: 18px;
}
```

### Responsive Sizing
The units `em` and `rem`, size elements relative to other values, allowing them to scale automatically.

- `em` is relative to the **parent element's** font size.
    - Example: If the parent is 16px, then `2em` = 32px.
- `rem` is relative to the **root (`html`)** font size.
    - Example: If the root size is 16px, then `1.5rem` = 24px.

```css
.text-large {
    font-size: 2em; /* grows relative to parent */
}

.text-root-large {
    font-size: 1.5rem; /* grows relative to root */
}
```

---

## Font

Using fonts effectively on the web requires choosing appropriate fallback fonts, importing external fonts when necessary, and ensuring readable spacing through proper `line-height` values.

### Font Families & Fallbacks
When setting a font, always provide a fallback list. This ensures your text remains readable if the primary font fails to load.

```css
body {
    font-family: "Roboto", "Segoe UI", sans-serif;
}
```

### Importing Web Fonts
If you want to use a font the user may not have installed locally, include an `@import` statement **at the top of your CSS file**, or load it using a `<link>` tag in the HTML `<head>`.

```css
@import url('TheUrlOfTheFont');

body {
    font-family: 'imported-font', Arial, sans-serif;
}
```

### Line Height
For readability, line-height should be approximately **150% of the font size of the parent element**.

```css
html {
    font-size: 18px;
}

p {
    font-size: 1.5rem;
    /* Or */
    font-size: 1.5em;
}