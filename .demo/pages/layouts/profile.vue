<script setup lang="ts">
definePageMeta({
  title: 'Profile',
  preview: {
    title: 'Profile',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})
</script>

<template>
  <div class="w-full">
    <!--Header-->
    <div class="py-6 border-b border-muted-200 dark:border-muted-800">
      <BaseHeading
        as="h2"
        size="2xl"
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        Profile
      </BaseHeading>
      <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
        Assess our investment options
      </BaseParagraph>
    </div>
  </div>
</template>
