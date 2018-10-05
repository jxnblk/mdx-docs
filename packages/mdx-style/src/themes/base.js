const lightgray = '#f6f6ff'
const gray = '#e6e6ef'
const text = '#000'
const blue = '#07c'

export default {
  root: {
    fontFamily: 'system-ui, sans-serif',
    lineHeight: 1.625,
    color: 'var(--text, #000)',
    '--text': text,
    '--lightgray': lightgray,
    '--gray': gray,
    '--link': blue,
    '--code': blue,
    '--pre': blue,
  },
  a: {
    color: 'var(--link)'
  },
  h1: {
    fontSize: '32px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
    '@media screen and (min-width:40em)': {
      fontSize: '48px',
    }
  },
  h2: {
    fontSize: '24px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
    '@media screen and (min-width:40em)': {
      fontSize: '32px',
    }
  },
  h3: {
    fontSize: '20px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
  },
  h4: {
    fontSize: '16px',
    lineHeight: 1.25,
    marginTop: '32px',
    marginBottom: '16px',
  },
  h5: {
    fontSize: '14px',
    lineHeight: 1.25,
    marginTop: '16px',
    marginBottom: '16px',
  },
  h6: {
    fontSize: '12px',
    lineHeight: 1.25,
    marginTop: '16px',
    marginBottom: '16px',
  },
  p: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  ul: {
    paddingLeft: '16px',
    marginTop: '16px',
    marginBottom: '16px',
  },
  ol: {
    paddingLeft: '16px',
    marginTop: '16px',
    marginBottom: '16px',
  },
  li: {
    '& > p': {
      marginTop: 0,
      marginBottom: 0,
    },
    '& > ul': {
      marginTop: 0,
      marginBottom: 0,
    },
    '& > ol': {
      marginTop: 0,
      marginBottom: 0,
    }
  },
  blockquote: {
    fontSize: '24px',
    marginLeft: 0,
    marginRight: 0,
    marginTop: '32px',
    marginBottom: '32px',
  },
  // how should these work?
  code: {
    fontFamily: 'Menlo, monospace',
    fontSize: '14px',
    padding: '16px',
    marginTop: '32px',
    marginBottom: '32px',
    overflowX: 'auto',
    color: 'var(--code)',
    backgroundColor: 'var(--lightgray)',
  },
  inlineCode: {
    fontFamily: 'Menlo, monospace',
    color: 'var(--code)'
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '32px',
    marginBottom: '32px',
  },
  hr: {
    border: 0,
    height: '2px',
    marginTop: '32px',
    marginBottom: '32px',
    backgroundColor: 'var(--gray)'
  },
  table: {
    width: '100%',
    marginTop: '32px',
    marginBottom: '32px',
    borderCollapse: 'separate',
    borderSpacing: 0,
    borderColor: 'var(--gray)',
    '& th': {
      textAlign: 'left',
      verticalAlign: 'bottom',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '2px',
      borderBottomStyle: 'solid'
    },
    '& td': {
      textAlign: 'left',
      verticalAlign: 'top',
      paddingTop: '4px',
      paddingBottom: '4px',
      paddingRight: '4px',
      paddingLeft: 0,
      borderColor: 'inherit',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid'
    },
  }
}
