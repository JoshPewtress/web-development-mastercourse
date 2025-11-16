# CSS Notes

CSS information and best practices while following the "Web Development Mastercourse" on [IAmTimCorey.com](https://www.iamtimcorey.com/).

---

## Table Of Contents

- [Selectors](#selectors)
    - [ID Selectors](#id-selectors)
    - [Class Selectors](#class-selectors)
- [Sizing](#sizing)
    - [Fixed Sizing](#fixed-sizing)
    - [Responsive Sizing](#responsive-sizing)
- [Font](#font)
    - [Font Families & Fallbacks](#font-families--fallbacks)
    - [Importing Web Fonts](#importing-web-fonts)
    - [Line Height](#line-height)
- [Color](#color)
    - [Accessibility Tools](#accessibility-tools)
    - [Color Formats](#color-formats)
        - [Named Colors](#named-colors)
        - [Hexadecimal Colors](#hexadecimal-colors)
        - [RGB / RGBA](#rgb--rgba)
        - [HSL / HSLA](#hsl--hsla)
- [Text Formatting](#text-formatting)
    - [Text Alignment](#text-alignment)
    - [Text Transformation](#text-transformation)
    - [Text Indentation](#text-indentation)
    - [Text Decoration](#text-decoration)

---

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
    /* or */
    font-size: 1.5em;
}
```

---

## Color

Color in CSS should be used to enhance **clarity**, **readability**, and **accessibility**. When choosing colors, always consider how they will appear to users with visual impairments such as color blindness.

### Accessibility Tools
A few tools commonly used to verify color contrast and accessibility:

- [**WebAIM Contrast Checker**](https://webaim.org/resources/contrastchecker/)
- [**Toptal Colorblind Web Page Filter**](https://www.toptal.com/designers/colorfilter)
- [**Contrast Ratio Tool (Lea Verou)**](https://contrast-ratio.com/)

These tools help confirm that foreground and background colors meet **WCAG** accessibility standards.

---

## Color Formats

CSS supports several ways to define color, ranging from simple named colors to highly customizable numeric formats.

### Named Colors
Basic predefined color names like `red`, `blue`, `black`, etc.

```css
p {
    color: red;
}
```

### Hexadecimal Colors
A 6-digit or 3-digit hexadecimal value representing **red**, **green**, and **blue**.

```css
h2 {
    color: #0080ff; /* light blue */
    color: #013; /* deep blue */
}
```

### RGB / RGBA
Uses numeric values for **red**, **green**, **blue** and optional **alpha** for transparency.

```css
div {
    background-color: rgba(255, 0, 0, 0.5); /* semi-transparent red */
}
```

### HSL / HSLA
HSL stands for **Hue**, **Saturation**, and **Lightness**. HSLA adds an Alpha channel for transparency.

- **Hue**: 0-360 (color wheel)
- **Saturation**: 0% - 100%
- **Lightness**: 0% - 100%

```css
button {
    color: hsl(210, 90%, 55%); /* no alpha */
    color: hsla(210, 90%, 55%, 0.7) /* with alpha */
}
```

---

## Text Formatting

Text formatting is CSS allows your to **enhance readability and emphasize content** by *controlling*, *alignment*, *transformation*, *indentation*, and *decoration*.

### Text Alignment
You can align text horizontally within its container using `text-align`.

```css
p {
    text-align: left; /* default, aligns to the left */
    text-align: center; /* centers text */
    text-align: right; /* aligns to the right */
    text-align: justify; /* spreads text evenly across the line */
}
```

### Text Transformation
Modify the capitalization of text using `text-transform`.

```css
h1 {
    text-transform: uppercase; /* ALL LETTERS UPPERCASE */
    text-transform: lowercase; /* all letters lowercase */
    text-transform: capitalize; /* First Letter Of Each Word Capitalized */
}
```

### Text Indentation
Control horizontal spacing at the beginning of a paragraph using `text-indent`.

```css
p {
    text-indent: 2em; /* equivalent to 2 times the font size */
}
```

### Text Decoration
Decorate text for emphasis or stylistic purposes with `text-decoration` and relation properties.

```css
h1 {
    text-decoration-line: underline; /* adds underline */
    text-decoration-color: rgba(75, 183, 95, 0.8);
    text-decoration-style: dashed; /* changes underline from solid which is the default to dashes */

    /* there is also a shorthand attribute */
    text-decoration: <line> <color> <style>;
}
```

---