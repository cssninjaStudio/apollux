<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    to: string
  }>(),
  {
    label: 'View all',
  },
)
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="group inline-flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors duration-300"
  >
    <span
      class="font-sans font-medium text-sm group-hover:underline underline-offset-4"
      >{{ props.label }}</span
    >
    <Icon
      name="lucide:arrow-right"
      class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
    />
  </NuxtLink>
</template>
