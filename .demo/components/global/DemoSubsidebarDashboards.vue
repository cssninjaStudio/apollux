<script setup lang="ts">
const navigation = [
  {
    name: 'Main Dashboard',
    to: '/dashboards',
  },
]
</script>

<template>
  <ApolluxSubsidebar>
    <template #header>
      <ApolluxSubsidebarHeader />
    </template>

    <ApolluxSubsidebarMenu :navigation="navigation" />
  </ApolluxSubsidebar>
</template>
