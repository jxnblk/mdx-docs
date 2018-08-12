import React from 'react'
import LiveCode from './LiveCode'

// Link

export const pre = props => props.children

export const code = ({
  children,
  className = '',
  ...props
}) => {
  const lang = className.replace(/^language\-/, '')
  const isEditable = lang === '.jsx'
  const code = React.Children.toArray(children).join('\n')
  if (isEditable) {
    return (
      <LiveCode code={code} />
    )
  }
  return (
    <pre
      {...props}
      className={className}
      children={children}
    />
  )
}

export const components = {
  pre,
  code,
}

export default components
