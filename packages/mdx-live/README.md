
# mdx-live

Add live code examples to MDX with [react-live][]

```sh
npm i mdx-live
```

```jsx
import React from 'react'
import { MDXLiveProvider } from 'mdx-live'
import Doc from './doc.mdx'

export default props =>
  <MDXLiveProvider>
    <Doc />
  </MDXLiveProvider>
```

## withMDXLive

Higher order component to render `LiveCode` component when the `language-.jsx` class name is present.

```js
import { withMDXLive } from 'mdx-go'

const components = {
  code: withMDXLive('pre'),
  // removes wrapping <pre> tag from MDX
  pre: props => props.children,
}
```

## LiveCode

Styled wrapper around [react-live][]

```js
import { LiveCode } from 'mdx-go'
```

```jsx
<LiveCode
  scope={{
    name: 'Jane'
  }}
  code='<h1>Hello {name}</h1>'
/>
```

**Props**

- `previewStyle`
- `editorStyle`
- `errorStyle`
- `previewProps`
- `editorProps`
- `errorProps`
- `components`
- `scope`

[react-live]: https://github.com/FormidableLabs/react-live
