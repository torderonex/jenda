<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { CalendarGridRow, type CalendarGridRowProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<CalendarGridRowProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarGridRow :class="cn('calendar-grid-row', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarGridRow>
</template>
