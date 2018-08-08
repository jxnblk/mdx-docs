// example custom template
module.exports = ({
  scripts,
  css
}) => `<!DOCTYPE html>
<style>#root { color: tomato }</style>
<div id=root></div>
${scripts}
`
