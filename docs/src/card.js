import React from 'react'

export default () =>
  <svg
    viewBox='0 0 512 256'
    width='1024'
    height='512'
  >
    <rect
      width='512'
      height='256'
      fill='black'
    />
    <text
      x='256'
      y={128 + 12}
      fill='white'
      textAnchor='middle'
      style={{
        fontFamily: 'system-ui, sans-serif',
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.5em'
      }}
    >
      MDX Docs
    </text>
  </svg>
