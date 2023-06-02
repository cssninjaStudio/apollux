<script setup lang="ts">
import { useCollapse } from '../composables/collapse'

const props = withDefaults(
  defineProps<{
    collapse?: boolean
    toolbar?: boolean
    circularMenu?: boolean
    condensed?: boolean
    expanded?: boolean
    horizontalScroll?: boolean
  }>(),
  {
    collapse: true,
    toolbar: true,
    circularMenu: true,
  },
)

const app = useAppConfig()
const { isOpen } = useCollapse()

const collapseEnabled = computed(() => {
  return (
    app.apollux.collapse?.navigation?.enabled !== false &&
    props.collapse !== false
  )
})
const toolbarEnabled = computed(() => {
  return (
    app.apollux.collapse?.toolbar?.enabled !== false && props.toolbar !== false
  )
})
const circularMenuEnabled = computed(() => {
  return (
    app.apollux.collapse?.circularMenu?.enabled !== false &&
    props.circularMenu !== false
  )
})

const mainClass = computed(() => {
  if (props.condensed) {
    return 'bg-white dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden'
  }

  if (!collapseEnabled.value) {
    return 'bg-white dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10'
  }

  const list = [
    'bg-white dark:bg-muted-900 relative min-h-screen w-full overflow-x-hidden px-4 transition-all duration-300 xl:px-10',
  ]

  if (isOpen.value) {
    list.push('lg:max-w-[calc(100%_-_280px)] lg:ms-[280px]')
  } else {
    list.push('lg:max-w-[calc(100%_-_80px)] lg:ms-[80px]')
  }

  if (props.horizontalScroll) {
    list.push('!pe-0 xl:!pe-0')
  }

  return list
})
</script>

<template>
  <div class="dark:bg-muted-900 bg-white pb-20">
    <slot name="navigation">
      <ApolluxCollapseNavigation v-if="collapseEnabled" />
    </slot>

    <div :class="mainClass">
      <div
        :class="[
          props.condensed && !props.horizontalScroll && 'w-full',
          !props.condensed && props.horizontalScroll && 'mx-auto w-full',
          !props.condensed &&
            !props.horizontalScroll &&
            !props.expanded &&
            'mx-auto w-full max-w-5xl',
          !props.condensed &&
            !props.horizontalScroll &&
            props.expanded &&
            'mx-auto w-full max-w-7xl',
        ]"
      >
        <slot name="toolbar">
          <ApolluxCollapseToolbar
            v-if="toolbarEnabled"
            :collapse="props.collapse"
            :horizontal-scroll="props.horizontalScroll"
          >
            <template #title><slot name="toolbar-title"></slot></template>
          </ApolluxCollapseToolbar>
        </slot>

        <slot />
      </div>
    </div>

    <ApolluxPanels />

    <ApolluxCollapseCircularMenu v-if="circularMenuEnabled" />
  </div>
</template>
