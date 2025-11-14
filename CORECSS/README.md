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