
# Notes

Why?/defaults

- default layout
- theme
- components
- livecode

always configured:
- components
- navigation
- branding etc
- theme?

```mdx
import * as components from '../src'
import { theme } from '../src'

export { components, theme }

export const navigation = [
  'index',
  'getting-started',
]

# Hello
```

---

Simplify:
- No nested route support
- No layout overrides
- No isolation

- [ ] SideNav subdirectory route name
- [ ] SideNav depth/dirname grouping
