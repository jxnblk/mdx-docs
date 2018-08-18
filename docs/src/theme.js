import { themes } from 'mdx-docs'

const blue = '#07c'
const gray = `rgba(0, 0, 0, ${1/16})`
const dark = `rgba(0, 0, 0, ${1/4})`

const breakpoints = [
  40,
  56,
  64
]
  .map(n => n + 'em')
  .map(n => `@media screen and (min-width: ${n})`)

const colors = {
  text: '#000',
  background: '#fff',
  link: blue
}

export default {
  ...themes.default,
  font: 'system-ui, sans-serif',
  lineHeight: 1.5,
  colors,
  LayoutSidebar: {
    paddingTop: '32px',
    paddingBottom: '32px',
    borderRight: `1px solid ${gray}`,
  },
  MenuButton: {
    margin: '32px'
  },
  Pagination: {
    marginBottom: '64px'
  },
  h1: {
    marginTop: '1em',
    marginBottom: '0.25em',
    fontSize: '32px',
    [breakpoints[1]]: {
      fontSize: '48px',
    }
  },
  h2: {
    marginTop: '1em',
    marginBottom: '0.25em',
    fontSize: '24px',
    [breakpoints[1]]: {
      fontSize: '32px',
    }
  },
  h3: {
    marginTop: '1em',
    marginBottom: '0.25em',
    fontSize: '20px',
  },
  code: {
    color: blue
  },
  pre: {
    overflowX: 'auto',
    maxWidth: '100%',
    padding: '16px',
    borderRadius: '8px',
    color: blue,
    backgroundColor: gray
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    borderColor: dark,
    '& th': {
      textAlign: 'left',
      verticalAlign: 'bottom',
      borderBottom: '2px solid',
      borderBottomColor: 'inherit',
    },
    '& td': {
      verticalAlign: 'top',
      borderBottom: '1px solid',
      borderBottomColor: 'inherit',
    },
    '& td, & th': {
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingLeft: '0px',
      paddingRight: '16px',
    }
  },
}
