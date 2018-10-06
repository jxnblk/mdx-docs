const config = require('../../babel.config')

module.exports = Object.assign({}, config, {
  env: {
    emotion: {
      plugins: [
        [
          'transform-rename-import',
          {
            original: '^styled-components$',
            replacement: 'react-emotion'
          }
        ]
      ]
    }
  }
})
