const black = '#000'
const white = '#fff'
const blue = '#0ff'
const magenta = '#f0f'

export default {
  root: {
    fontFamily: '"Roboto Mono", Menlo, monospace',
    lineHeight: 1.5,
    padding: '16px',
    color: `var(--text, ${white})`,
    backgroundColor: `var(--background, ${black})`,
    '--link': blue,
  },
  a: {
    color: 'var(--link)'
  },
  h1: {
    fontSize: '16px',
    marginTop: '64px',
    marginBottom: '64px',
  },
  h2: {
    fontSize: '16px',
    marginTop: '32px',
    marginBottom: '32px',
  },
  h3: {
    fontSize: '16px',
    marginTop: '16px',
    marginBottom: '16px',
  },
  h4: {
    fontSize: '16px',
    margin: 0,
  },
  h5: {
    fontSize: '16px',
    margin: 0,
  },
  h6: {
    fontSize: '16px',
    margin: 0,
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  inlineCode: {
    fontFamily: 'inherit',
    color: magenta,
  },
  code: {
    fontFamily: 'inherit',
    marginTop: '32px',
    marginBottom: '32px',
    color: magenta,
    overflowX: 'auto',
  },
  hr: {
    height: '4px',
    border: 0,
    backgroundColor: white,
  },
  ol: {
    paddingLeft: '2em',
    marginTop: '32px',
    marginBottom: '32px',
  },
  ul: {
    listStyle: 'square',
    paddingLeft: '2em',
    marginTop: '32px',
    marginBottom: '32px',
  },
  li: {
    '& > p': { margin: 0 },
    '& > ul': { margin: 0 },
    '& > ol': { margin: 0 },
  },
  blockquote: {
    fontWeight: 'bold',
    marginLeft: 0,
    marginTop: '64px',
    marginBottom: '64px',
    paddingLeft: '32px',
    borderLeft: '4px solid',
  },
  table: {
    width: '100%',
    marginTop: '32px',
    marginBottom: '32px',
    borderCollapse: 'separate',
    borderSpacing: 0,
    borderColor: 'inherit',
    '& th': {
      textAlign: 'left',
      verticalAlign: 'bottom',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid'
    },
    '& td': {
      textAlign: 'left',
      verticalAlign: 'top',
      paddingTop: '8px',
      paddingBottom: '8px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid'
    },
  }
}
