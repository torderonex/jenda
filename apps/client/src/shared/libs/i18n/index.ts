import { createI18n, type I18n } from 'vue-i18n'
import { enZod, ruZod, zhZod } from '../vee-validate/rules'
import { customPluralRule } from './plurals'
import useDayJsLocalize from './dayjs'
import { getCurrentLocale } from './utils/getLocale'

const ru_ru = import.meta.glob('./locales/**/ru-RU.ts', { eager: true })
const en_us = import.meta.glob('./locales/**/en-US.ts', { eager: true })
const zh_cn = import.meta.glob('./locales/**/zh-CN.ts', { eager: true })

function loadLang(modules: Record<string, any>) {
  const messages: { [key: string]: string } = {}

  Object.keys(modules).forEach((module) => {
    Object.assign(messages, { ...modules[module].default })
  })
  return messages
}

export interface MessageSchema {
  [key: string]: any
}

const messages = {
  'en-US': {
    ...loadLang(en_us),
    errors: {
      ...enZod,
    },
  },
  'ru-RU': {
    ...loadLang(ru_ru),
    errors: {
      ...ruZod,
    },
  },
  'zh-CN': {
    ...loadLang(zh_cn),
    errors: {
      ...zhZod,
    },
  },
}

const i18n = createI18n<[MessageSchema], 'en-US' | 'ru-RU' | 'zh-CN'>({
  legacy: false,
  locale: getCurrentLocale.value,
  globalInjection: true,
  pluralRules: {
    'ru-RU': {
      // @ts-expect-error i18n shema
      customPluralRule,
    },
  },
  messages,
})

useDayJsLocalize(i18n as I18n)

export default i18n
