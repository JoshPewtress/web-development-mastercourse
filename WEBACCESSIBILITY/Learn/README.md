# Notes

## Semantic HTML
- Use the right tags for meaning, not just looks.
   - When designing a webpage for accessibility, always use elements that describe the purpose of the content. Not just how it looks.
   - Ex: Making text clickable with a `<span>` (styled like a link) wont be recognized as a link by screen readers or keyboard navigation. Use the `<a>` tag instead.
   - HTML defines **structure and meaning**, while CSS defines **style and appearance.**

-  `<header>`, `<main>`, and `<footer>`
   - These landmark elements help screen readers and assistive technologies understand the structure of a page.
      - `<header>` usually contains site navigation or introductory content.
      - `<main>` contains the primary content of the page. (one per page)
      - `<footer>` typically contains metadata, copyright, or related links.
      - These help users skip directly to key areas of the page.

- `<small>` - Fine print or side comments
   - The `<small>` tag represents side remarks, disclaimers, legal text, or "fine print". Not just smaller text size.

- `<article>` - A self contained, complete unit.
   - Content that can stand on its own, even things that arent relevant to the page context itself.
   - Ex: Blog posts, and news articles.

- `<section>` - Thematic grouping of related content
   - Groups nerby content under a shared theme or purpose, unlike `<article>`, it isn't necessarily standalone.
   - Ex: A section of a news article that contains a background or a related story.

- `<aside>` - Supplementary information
   - Content related to the main flow, but not essential to it.
   - Ex: Quotes, related links or clarifying a point.

- `<figure>`- Self-contained content.
   - `<figcaption>` is used to add a caption to the figure.
   - Ex: Images, code snippets, illustrations.

- `<time>` - Specific period in time.
   - `datetime` attribute can translate dates into machine-readable format, allowing for better search engine results
   or custom features such as reminders.

- `<nav>` - Navigation
   - Groups and signals to assistive tools that it contains navigation links.