import { modes } from './constants'

export const toggleMode = key => state => ({
  mode: state.mode === modes[key] ? modes.normal : modes[key]
})
