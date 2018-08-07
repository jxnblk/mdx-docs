import { themeGet } from 'styled-system'

export default {
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
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    '&.active': {
      color: themeGet('colors.blue', '#07c')(props)
    }
  }),
  LiveCode: {
    border: '1px solid #eee',
    borderRadius: '4px'
  },
  LivePreview: {
    padding: '8px'
  },
  LiveEditor: {
    padding: '8px',
    outline: 'none',
    backgroundColor: '#eee'
  },
  LiveError: {
    fontFamily: 'Menlo, monospace',
    fontSize: '12px',
    padding: '8px',
    color: 'white',
    backgroundColor: '#f00'
  },
}
