import i18n from '@/shared/libs/i18n'
import { createHead } from '@unhead/vue'
import { vTooltip } from 'floating-vue'
import { createApp } from 'vue'
import Vue3Marquee from 'vue3-marquee'
import { VueUiRadar } from 'vue-data-ui'

// @ts-expect-error: unresolved type definitions for vue-writer
import VueWriter from 'vue-writer'
import App from './App.vue'
import autoAnimatePlugin from './plugins/formkit'

import { pinia, router } from './providers'

import './styles/primary/index.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import 'floating-vue/dist/style.css'
import 'vue-data-ui/style.css'

const app = createApp(App)
// head plugin
const head = createHead()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(head)
app.use(autoAnimatePlugin)
app.use(Vue3Marquee)
app.use(VueWriter)
app.directive('tooltip', vTooltip)
app.component('VueUiRadar', VueUiRadar)
app.mount('#app')
