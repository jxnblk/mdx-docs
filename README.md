
# mdx-docs (WIP)

Document and develop React components with MDX

```sh
npm init docs
```

- :memo: Create documentation with markdown
- :atom_symbol: Import and use React components
- :gear: Component-based API
- :nail_care: Customizable themes
- Live code examples
- ▲ Built for Next.js

## Getting Started

- `npm init docs`
- Add to an existing app

## Using MDX

MDX lets you mix markdown with inline JSX to render React components.
Write markdown as you normally would and use ES import syntax to use custom components in your document.

```mdx
import { Box } from 'grid-styled'

# Hello MDX!

<Box
  p={3}
  bg='tomato'>
  This will render as a component
</Box>
```

## Live Code

mdx-docs has built-in components to render JSX fenced code blocks as live previews with editable code, powered by [react-live][].
To make a code block render as an editable example, use the `.jsx` language attribute (note the `.` prefix).

````mdx
Live code example:

```.jsx
<button>Beep</button>
```
````

[react-live]: https://github.com/formidable/react-live

- Custom setup
- Components
  - Layout
  - SideNav
  - Pagination
  - Header
  - Root

---

### Prior Art

- [Compositor x0][]
- [live-doc][]
- [Doctor Mark][]
- [mdx-deck][]
- [docz][]

[Compositor x0]: https://compositor.io/x0
[live-doc]: https://github.com/jxnblk/live-doc
[Doctor Mark]: https://github.com/jxnblk/doctor-mark
[mdx-deck]: https://github.com/jxnblk/mdx-deck
[docz]: https://github.com/pedronauck/docz

---

- [ ] react-syntax-highlighter

