<script setup lang="ts">
const { open } = usePanels()
</script>

<template>
  <button
    type="button"
    class="h-10 w-10 inline-flex justify-center items-center font-sans text-sm text-muted-300 dark:text-muted-600 hover:text-yellow-400 dark:hover:text-yellow-400 bg-white dark:bg-muted-800 rounded-full shadow-lg shadow-muted-400/20 dark:shadow-muted-800/30 hover:shadow-xl nui-focus transition-all duration-300"
    @click="open('events')"
  >
    <Icon class="w-5 h-5" name="fluent:flash-28-filled" />
  </button>
</template>
