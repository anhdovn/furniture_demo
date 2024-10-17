import { proxy } from 'valtio'

const state = proxy({
  color: '#EFBD4E',
})

export { state }