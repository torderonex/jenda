<script lang="ts" setup>
import { computed, type HTMLAttributes } from 'vue'
import { CalendarHeader, type CalendarHeaderProps, useForwardProps } from 'radix-vue'
import { cn } from '@/shared/libs/shadcn/utils'

const props = defineProps<CalendarHeaderProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeader :class="cn('calendar-header', props.class)" v-bind="forwardedProps">
    <slot />
  </CalendarHeader>
</template>
