<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router/auto'

const { tm, locale } = useI18n()
const route = useRoute()

const privacyItems = tm('authentication.privacy') as string[]

const maxWidth = computed(() => {
  return locale.value === 'ru-RU' ? '400px' : '320px'
})

const privacyChangingItem = computed(() =>
  route.name === 'sign-in' ? privacyItems[1] : privacyItems[0],
)
</script>

<template>
  <p
    class="pt-2.5 text-sm text-center text-neutral-500 my-0 mx-auto select-none dark:text-neutral-400"
    :style="{ maxWidth }"
  >
    {{ privacyChangingItem }}
    <a
      href="https://github.com/mnenie/jenda"
      target="_blank"
      rel="noopener noreferrer"
      class="form-text-underline dark:hover:text-neutral-500"
    >
      {{ privacyItems[2] }}
    </a>
    {{ privacyItems[3] }}
    <a
      href="https://github.com/mnenie/jenda"
      target="_blank"
      rel="noopener noreferrer"
      class="form-text-underline dark:hover:text-neutral-500"
    >
      {{ privacyItems[4] }}
    </a>
  </p>
</template>
