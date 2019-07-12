import DEFAULT from '../src/js/defaults'

export function reset(greety) {
  greety.options = { ...DEFAULT }
  greety.init()
}
