<script setup lang="ts">
const { isOpen } = useCollapse()
</script>

<template>
  <div
    class="flex h-16 w-full items-center gap-4 transition-all duration-150"
    :class="!isOpen ? 'px-2 justify-center' : 'px-6'"
  >
    <!--Account menu-->
    <DemoAccountMenuLong :collapsed="isOpen" />
  </div>
</template>
