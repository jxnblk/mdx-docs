import React from 'react'
import { Location } from '@reach/router'

export default Component => props =>
  <Component {...props} />
  // <Location children={router => <Component {...props} {...router} />} />
