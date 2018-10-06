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
}

export default theme
