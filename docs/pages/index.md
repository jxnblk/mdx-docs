
# MDX Docs

> Blockquote test

Document and develop React components with [MDX][] and [Next.js][]

<video
  src='https://s3.amazonaws.com/jxnblk/mdx-docs.mp4'
  autoPlay
  playsInline
  muted
  loop
  style={{
    maxWidth: '100%',
    borderRadius: '8px'
  }}
/>

```sh
npm init docs
```

- :memo: Create documentation with markdown
- :atom_symbol: Import and use React components
- :gear: Component-based API
- :computer: Live code examples
- :nail_care: Customizable themes
- ▲ Built for Next.js

## Getting Started

To create a new documentation site, run `npm init docs` and follow the prompts.
Once the application has been generated, see the [README.md](https://github.com/jxnblk/mdx-docs/create-docs/templates/next/README.md)
for more documentation.

To add MDX Docs to an existing Next.js app, see the [Custom Setup](custom-setup) docs.

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

Below is a rendered example of using a live code fence:

```.jsx
<button>Beep</button>
```

[react-live]: https://github.com/FormidableLabs/react-live
[MDX]: https://github.com/mdx-js/mdx
[Next.js]: https://github.com/zeit/next.js/
