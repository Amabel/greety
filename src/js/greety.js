import i18next from 'i18next'
import DEFAULT from './defaults'
import resources from '../i18n/index'

class Greety {
  constructor (options = {}) {
    this.options = options
  }

  config (options = {}) {
    this.options = { ...DEFAULT, ...this.options, ...options }

    const i18nOptions = this.getI18nOptions(this.options)
    this.initI18next(i18nOptions)

    return this
  }

  greeting () {
    let key = this.options.formal
      ? 'greeting-formal'
      : 'greeting'

    return i18next.t(key)
  }

  initI18next (options) {
    const { lng, defaultNS } = options

    i18next.init({
      lng,
      defaultNS,
      initImmediate: false,
      resources
    })
  }

  getI18nOptions (options) {
    const lng = options.language || 'en'

    const defaultNS = options.simpleFormat
      ? 'simple'
      : 'normal'

    return { lng, defaultNS }
  }
}

export default new Greety()
