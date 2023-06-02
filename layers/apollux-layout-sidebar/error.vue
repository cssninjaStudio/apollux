<script setup lang="ts">
const props = defineProps<{
  error: any
}>()

const app = useAppConfig()
</script>

<template>
  <ApolluxSidebarLayout :sidebar="false">
    <template #toolbar-title>{{ app.apollux.title }}</template>

    <ApolluxError :error="props.error" />
  </ApolluxSidebarLayout>
</template>
