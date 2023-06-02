<script setup lang="ts">
definePageMeta({
  title: 'API Tokens',
  preview: {
    title: 'API Tokens',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})
</script>

<template>
  <div>
    <DemoPlaceholderMinimal
      title="You currently have no API tokens"
      description="If you need to connect to your backend, you can create an API token to be able to connect to our services from an external app."
    >
      <div class="flex justify-center mt-3">
        <BaseButton shape="full" color="primary" class="w-40">
          Create Token
        </BaseButton>
      </div>
    </DemoPlaceholderMinimal>
  </div>
</template>
