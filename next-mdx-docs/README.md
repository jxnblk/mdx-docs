# Next.js + MDX Docs

Use [MDX][mdx] [Docs][docs] with [Next.js][next].

## Installation

```
npm install --save next-mdx-docs @mdx-js/mdx
```

or 

```
yarn add next-mdx-docs @mdx-js/mdx
```

## Usage

Create a `next.config.js`

```
const withMdxDocs = require('next-mdx-docs')()
module.exports = withMdxDocs()
```

## Related

This is based off of ZEIT's [next-mdx] plugin.

[mdx]: https://github.com/mdx-js/mdx
[docs]: https://github.com/jxnblk/mdx-docs
[next]: https://github.com/zeit/next.js
[next-mdx]: https://github.com/zeit/next-plugins
