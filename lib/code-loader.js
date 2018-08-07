const unified = require('unified')
const remark = require('remark-parse')
const toMDXAST = require('@mdx-js/mdxast')
const matter = require('gray-matter')

const toCode = node => {
  if (node.type !== 'root') return
  const codes = []
  for (const child of node.children) {
    if (child.type !== 'code') continue
    const { lang, value } = child
    codes.push({
      lang,
      value
    })
  }
  return codes
}

function compile () {
  this.Compiler = tree => {
    return toCode(tree)
  }
}

const parse = src => {
  const { contents } = unified()
    .use(remark)
    .use(toMDXAST)
    .use(compile)
    .processSync(src)

  return contents
}

// extracts code fences from markdown
module.exports = async function (src) {
  const callback = this.async()
  const { content } = matter(src)
  const codes = parse(content)

  const code = `module.exports = [
${codes.map(({ lang, value }) => `{ lang: '${lang}', value: \`${value}\` }`).join(',\n')}
]`

  return callback(null, code)
}
