import { themeGet } from 'styled-system'

export default {
  code: {
    fontFamily: 'Menlo, monospace',
  },
  pre: {
    fontFamily: 'Menlo, monospace',
  },
  Layout: {
    // fontFamily: '"Avenir Next", Roboto, sans-serif',
  },
  Sidebar: {
    paddingTop: '16px',
    paddingBottom: '16px',
    borderRight: '1px solid #ddd'
  },
  NavLink: props => ({
    display: 'block',
    color: 'inherit',
    fontWeight: 'bold',
    fontSize: '14px',
    textDecoration: 'none',
    '&.active': {
      color: themeGet('colors.blue', '#07c')(props)
    }
  }),
  PaginationLink: {
    fontSize: '16px'
  },
  LiveCode: {
    border: '1px solid #eee',
    borderRadius: '4px'
  },
  LivePreview: {
    padding: '16px'
  },
  LiveEditor: {
    padding: '16px',
    outline: 'none',
    backgroundColor: '#eee'
  },
  LiveError: {
    fontFamily: 'Menlo, monospace',
    fontSize: '12px',
    padding: '16px',
    color: 'white',
    backgroundColor: '#f00'
  },
}
