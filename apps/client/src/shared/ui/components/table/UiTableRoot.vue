<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shared/libs/shadcn/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="cn(
      'table-wrapper',
      props.class,
    )"
  >
    <table
      v-bind="$attrs"
      :class="cn(
        'table',
      )"
    >
      <slot />
    </table>
  </div>
</template>
