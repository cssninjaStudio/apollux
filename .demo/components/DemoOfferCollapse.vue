<script setup lang="ts">
import AddonCollapseTransition from './AddonCollapseTransition.vue'

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

<template>
  <BaseCard
    ref="target"
    shape="curved"
    elevated-hover
    class="p-5 dark:!bg-muted-950"
  >
    <!--Trigger-->
    <button
      type="button"
      class="w-full flex items-center gap-3 click-blur"
      @click="open = !open"
    >
      <Icon :name="props.icon" class="w-8 h-8" />
      <span class="block text-left">
        <span
          class="block font-heading font-medium text-sm text-muted-800 dark:text-muted-200"
        >
          {{ props.title }}
        </span>
        <span class="block font-heading font-medium text-xs text-muted-400">
          {{ props.subtitle }}
        </span>
      </span>
      <Icon
        name="lucide:chevron-down"
        class="w-5 h-5 ml-auto text-muted-400 transition-transform duration-300"
        :class="open ? 'rotate-180' : ''"
      />
    </button>
    <AddonCollapseTransition>
      <div v-if="open" class="group flex items-center justify-between pt-4">
        <DemoLinkArrow to="3" label="Get this offer" />
        <span class="font-heading text-xs text-muted-400"
          >{{ props.remaining }} left</span
        >
      </div>
    </AddonCollapseTransition>
  </BaseCard>
</template>
