import { Location } from '@reach/router'

export default Component => props =>
  <Location
    children={router => <Component {...props} {...router} />}
  />
