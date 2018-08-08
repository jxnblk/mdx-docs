
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

## MDX

- importing


## Routing
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

- [ ] make `withRouter` optional (React API)
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
