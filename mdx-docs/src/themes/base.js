const lightGray = `rgba(0, 0, 0, ${1/16})`
const blue = '#07c'
const red = '#f03'
const monospace = 'Menlo, monospace'

export const theme = {
  font: 'system-ui, sans-serif',
  lineHeight: 1.5,
  colors: {
    text: '#000',
    background: 'white',
    link: blue
  },
  pre: {
    fontFamily: monospace,
    fontSize: '13px',
  },
  LayoutSidebar: {
    borderRight: `1px solid ${lightGray}`,
  },
  LiveCode: {
    borderRadius: '4px',
    border: `1px solid ${lightGray}`
  },
  LivePreview: {
    padding: '16px',
  },
  LiveEditor: {
    fontFamily: monospace,
    fontSize: '13px',
    padding: '16px',
    backgroundColor: lightGray,
    '&:focus': {
      outline: 'none',
    }
  },
  LiveError: {
    fontFamily: monospace,
    fontSize: '13px',
    color: 'white',
    backgroundColor: red
  },
}

export default theme
