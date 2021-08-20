import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  de: {
    message: {
      hello: 'hallo welt'
    }
  },
  en: {
    message: {
      hello: 'hello world'
    }
  },
  es: {
    message: {
      hello: 'hola mundo'
    }
  }
}

export default new VueI18n({
  fallbackLocale: 'en',
  locale: 'es',
  messages
})
