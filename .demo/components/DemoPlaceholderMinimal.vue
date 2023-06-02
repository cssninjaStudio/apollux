<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
  transparent?: boolean
}>()
</script>

<template>
  <div
    class="px-8 py-12 text-center"
    :class="!props.transparent && 'bg-muted-100 dark:bg-muted-950'"
  >
    <div class="w-full max-w-lg mx-auto">
      <h3 class="font-heading text-lg text-muted-800 dark:text-white mb-2">
        {{ props.title }}
      </h3>
      <p class="font-sans text-muted-500">
        {{ props.description }}
      </p>
    </div>
    <slot></slot>
  </div>
</template>
