<template>
  <div class="max-w-sm">
    <BaseCard ref="target" shape="curved" color="white-contrast" elevated-hover class="p-5">
      <button type="button" class="click-blur flex w-full items-center gap-3" @click="open = !open">
        <BaseAvatar src="/img/avatars/15.svg" size="sm" />

        <span class="block text-start">
          <span class="font-heading text-muted-800 dark:text-muted-200 block text-sm font-medium">
            John Miller
          </span>

          <span class="font-heading text-muted-400 block text-xs font-medium">
            Software Engineer
          </span>
        </span>

        <Icon
          name="lucide:chevron-down"
          class="text-muted-400 ms-auto h-5 w-5 transition-transform duration-300"
          :class="open ? 'rotate-180' : ''"
        />
      </button>

      <AddonCollapseTransition>
        <div v-if="open" class="group flex items-center justify-between pt-4">
          <DemoLinkArrow to="#" label="Hire now" />

          <span class="font-heading text-muted-400 text-xs">7 years exp.</span>
        </div>
      </AddonCollapseTransition>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const props = defineProps<{
  slug: string
  title: string
  subtitle: string
  icon: string
  remaining: string
}>()

const target = ref(null)
const open = ref(false)
onClickOutside(target, (event) => (open.value = false))
</script>
