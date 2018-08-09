
# mdx-docs

Document and develop React components with MDX

```sh
npm i -D mdx-docs
```

- :memo: Create documentation with markdown
- :atom_symbol: Import and use React components
- :zero: Zero-config
- :x: No plugins
- :gear: Component-based API
- :nail_care: Customizable themes
- Live code examples
- Isolation mode
- File system based routing
- Static export

## Getting Started

Install mdx-docs as a dev dependency and add run scripts to your `package.json`.

```sh
npm install --save-dev mdx-docs
```

```json
"scripts": {
  "start": "mdx-docs docs",
  "build": "mdx-docs build docs"
}
```

Add a `docs/` folder and run `npm start` to start the dev server,
which should open in your default browser.

Create a `docs/index.mdx` file and start writing markdown.

```mdx
# Hello MDX!
```

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

## Routing

## Live Code

mdx-docs has built-in components to render JSX fenced code blocks as live previews with editable code, powered by [react-live][].
To make a code block render as an editable example, use the `.jsx` language attribute (note the `.` prefix).

````mdx
Live code example:

```.jsx
<button>Beep</button>
```
````

To include custom components in scope for the live code examples, export a `components` object from your `index.mdx` file.

```js
// example _components.js
import { Button } from '../src'

export default {
  Button
}
```

````mdx
export { default as components } from './_components'

```.jsx
<Button>
  Custom component
</Button>
```
````

Alternatively, custom components scope can be specified using the
MDXProvider component or in a custom App

[react-live]: https://github.com/formidable/react-live


## Customizing
## Exporting
## Docs

### Prior Art

- [Compositor x0][]
- [create-docs][]
- [live-doc][]
- [Doctor Mark][]
- [mdx-deck][]
- [docz][]

[Compositor x0]: https://compositor.io/x0
[create-docs]: https://github.com/jxnblk/create-docs
[live-doc]: https://github.com/jxnblk/live-doc
[Doctor Mark]: https://github.com/jxnblk/doctor-mark
[mdx-deck]: https://github.com/jxnblk/mdx-deck
[docz]: https://github.com/pedronauck/docz

---

- [ ] react-syntax-highlighter
- [-] error overlay

Docs

- [ ] Getting Started
- [ ] Writing MDX
- [ ] Routing
- [ ] Using React components
- [ ] Custom App
  - [ ] Theming
  - [ ] Custom Navigation
  - [ ] Custom layout
  - [ ] Custom MDX components
- [ ] Components
  - [ ] Provider
  - [ ] Layout
  - [ ] SideNav
  - [ ] LiveCode
  - [ ] withDocs
- [ ] Custom HTML template
- [ ] Exporting
- [ ] CLI Options
- [ ] React API
