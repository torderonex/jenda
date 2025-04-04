<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { createReusableTemplate } from '@vueuse/core'
import { useWorkspaceStore } from '../stores/workspace'
import {
  UiBadge,
  UiButton,
  UiPopover,
  UiPopoverContent,
  UiPopoverTrigger,
} from '@/shared/ui'
import ShareDialog from '@/modules/common/components/dialogs/ShareDialog.vue'
import { cn } from '@/shared/libs/shadcn/utils'

defineOptions({
  inheritAttrs: false,
})

const isDialogOpen = ref<boolean>(false)
const isPopoverOpen = ref<boolean>(false)

const workspaceStore = useWorkspaceStore()
const { workspace } = storeToRefs(workspaceStore)

const [DefineTemplate, ReuseTemplate] = createReusableTemplate()
</script>

<template>
  <DefineTemplate v-slot="{ icon, data, isSettings }">
    <UiButton
      size="sm"
      variant="ghost"
      :class="
        cn('w-full justify-start px-2 focus:ring-0')"
      @click="isPopoverOpen = false"
    >
      <span v-if="!isSettings" :class="cn(icon, 'w-4 h-4 text-neutral-700 dark:text-neutral-300')" />
      <div
        v-else
        class="w-4 h-4 bg-neutral-100 border border-solid border-neutral-200 rounded-full flex items-center justify-center cursor-pointer"
      >
        <img :src="workspace.img as string" class="object-cover w-full rounded-lg" />
      </div>
      <p class="text-neutral-700 dark:text-neutral-300 text-13px 2xl:text-sm">
        {{ $t(`workspace.popover.${data}`) }}
      </p>
    </UiButton>
  </DefineTemplate>
  <UiPopover v-bind="$attrs" v-model:open="isPopoverOpen" :modal="false">
    <UiPopoverTrigger as-child>
      <slot />
    </UiPopoverTrigger>
    <UiPopoverContent side="bottom" align="start" class="px-1 max-w-270px">
      <div class="relative w-full h-full">
        <div class="flex items-center justify-between gap-1 mb-4 px-2">
          <div class="flex flex-col gap-0.5 mt-1">
            <p class="text-base !fw600 dark:text-neutral-100">
              {{ workspace.name }}
            </p>
            <div class="flex items-center gap-1">
              <UiBadge variant="secondary" class="shadow-none px-1 py-0 text-10px">
                {{ workspace.plan }}
              </UiBadge>
              <UiBadge variant="secondary" class="shadow-none px-1 py-0 text-10px">
                <span class="text-blue-500">
                  {{ $t(`workspace.popover.${workspace.status}`) }}
                </span>
              </UiBadge>
              <span class="text-11px mx-1 2xl:text-xs text-neutral-500 dark:text-neutral-400">
                •
              </span>
              <p class="text-11px 2xl:text-xs text-neutral-500 dark:text-neutral-400">
                {{ $t('workspace.popover.members', workspace.members.length) }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-0">
          <p class="px-2 text-small text-neutral-500 dark:text-neutral-400 mb-1">
            {{ $t('workspace.popover.section') }}
          </p>
          <ReuseTemplate data="invite" icon="i-hugeicons-link-04" @click="isDialogOpen = true" />
          <ReuseTemplate :is-settings="true" data="settings" @click="$router.push({ name: 'settings' })" />
        </div>
      </div>
    </UiPopoverContent>
  </UiPopover>
  <ShareDialog v-model:open="isDialogOpen" />
</template>
