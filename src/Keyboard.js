import React from 'react'

export default class Keyboard extends React.Component {
  handleKeyDown = e => {
    if (document.activeElement.tagName !== 'BODY') return
    // console.log(e.keyCode)
    if (e.metaKey || e.shiftKey || e.ctrlKey) return
    if (!e.altKey) return
    const { update, handlers } = this.props
    const handler = handlers[e.keyCode]
    if (typeof handler !== 'function') return
    update(handler)
  }

  componentDidMount () {
    document.body.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount () {
    document.body.removeEventListener('keydown', this.handleKeyDown)
  }

  render () {
    return false
  }
}
