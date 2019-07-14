import greety from '../../src/js/greety'
import DEFAULT from '../../src/js/defaults'
import translate from '../../src/i18n/index'
import { reset } from '../util'

afterEach(() => {
  reset(greety)
})

describe('greety', () => {
  it('is initialized by default', () => {
    expect(typeof greety).toBe('object')
  })
})

describe('greety.config()', () => {
  it('merges the default props with the supplied options', () => {
    expect(greety.config({ language: 'zh' }).options).toEqual({ ...DEFAULT, language: 'zh' })
  })

  it('returns an instance of greety', () => {
    expect(greety.config()).not.toBe(null)
  })
})

describe('greety.greeting()', () => {
  context('when using default settings', () => {
    it('returns a formal greeting in English', () => {
      expect(greety.greeting()).toEqual(translate.en.normal['greeting-formal'])
    })
  })

  context("when 'formal' is set to false", () => {
    beforeEach(() => {
      greety.config({ formal: false })
    })

    it('returns a non-formal greeting in English', () => {
      expect(greety.greeting()).toEqual(translate.en.normal.greeting)
    })
  })
})
