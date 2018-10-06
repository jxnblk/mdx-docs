
# MDX Docs

:memo: Document and develop React components with [MDX][] and [Next.js][]

![](docs/static/mdx-docs.gif)

https://jxnblk.com/mdx-docs/

[![Build Status][badge]][travis]
[![Downloads][downloads-badge]][npm]
[![Version][version-badge]][npm]
[![MIT License][license]](LICENSE.md)

```sh
npm init docs
```

- :memo: Create documentation with markdown
- :atom_symbol: Import and use React components
- :gear: Component-based API
- :computer: Live code examples
- :nail_care: Customizable themes
- ▲ Built for Next.js

[badge]: https://flat.badgen.net/travis/jxnblk/mdx-docs
[travis]: https://travis-ci.org/jxnblk/mdx-docs
[version-badge]: https://flat.badgen.net/npm/v/mdx-docs
[downloads-badge]: https://flat.badgen.net/npm/dt/mdx-docs
[npm]: https://npmjs.com/package/mdx-docs
[license]: https://flat.badgen.net/badge/license/MIT/blue

## Getting Started

To create a new documentation site, run `npm init docs` and follow the prompts.
Once the application has been generated, see the [README.md](templates/next/README.md)
for more documentation.

To add MDX Docs to an existing Next.js app, see the [Custom Setup](docs/pages/custom-setup.md) docs.

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

MDX Docs has built-in components to render JSX fenced code blocks as live previews with editable code, powered by [react-live](https://github.com/FormidableLabs/react-live).
To make a code block render as an editable example, use the `.jsx` language attribute (note the `.` prefix).

````mdx
Live code example:

```.jsx
<button>Beep</button>
```
````

[react-live]: https://github.com/FormidableLabs/react-live

## Components Scope

To add components to scope for use in the live code examples,
pass a `components` object to the [`Layout`](docs/pages/components.md#Layout) component.

```jsx
// example components
import React from 'react'

export default {
  Box: props => (
    <div
      {...props}
      style={{
        padding: '32px',
        backgroundColor: 'tomato'
      }}
    />
  )
}
```

```jsx
// example _app.js
<Layout
  {...this.props}
  components={components}
>
  <Component {...page} />
</Layout>
```

The `components` object can also include components to render the HTML elements in MDX.


## Documentation

For further documentation see:

- [Components](https://jxnblk.com/mdx-docs/components)
- [Theming](https://jxnblk.com/mdx-docs/theming)
- [Custom Setup](https://jxnblk.com/mdx-docs/custom-setup)

---

#### Prior Art

- [Compositor x0][]
- [mdx-deck][]
- [live-doc][]
- [Doctor Mark][]
- [docz][]

#### Related

- [Next.js][]
- [MDX][]
- [react-live](https://github.com/FormidableLabs/react-live)

[Compositor x0]: https://compositor.io/x0
[live-doc]: https://github.com/jxnblk/live-doc
[Doctor Mark]: https://github.com/jxnblk/doctor-mark
[mdx-deck]: https://github.com/jxnblk/mdx-deck
[docz]: https://github.com/pedronauck/docz

[MDX]: https://github.com/mdx-js/mdx
[Next.js]: https://github.com/zeit/next.js/


[MIT License](LICENSE.md)
