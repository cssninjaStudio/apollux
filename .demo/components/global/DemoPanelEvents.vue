<script setup lang="ts">
const { close } = usePanels()
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 border-l bg-white"
  >
    <div
      class="w-full h-20 flex items-center justify-between px-6 border-b border-muted-200 dark:border-muted-800"
    >
      <h3
        class="font-heading font-semibold uppercase text-xs text-muted-500 dark:text-muted-100"
      >
        Upcoming
      </h3>

      <!--Close button-->
      <button
        type="button"
        class="flex items-center justify-center w-10 h-10 nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 transition-colors duration-300 cursor-pointer"
        @click="close"
      >
        <Icon name="lucide:arrow-right" class="h-4 w-4" />
      </button>
    </div>

    <div class="relative h-[calc(100%_-_80px)] w-full px-6">
      <div class="pt-12 text-center px-4">
        <img
          class="w-40 mx-auto mb-4"
          src="/img/illustrations/coins/shiba-coin.svg"
          alt="Shiba inu coin"
        />
        <BaseHeading size="lg" weight="semibold">Coming soon</BaseHeading>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          We will soon be accepting crypto payments on our platform. Stay tuned!
        </BaseParagraph>
        <div class="flex items-center justify-center mt-4">
          <BaseButton color="primary" shape="full" shadow="hover" class="w-36"
            >Learn More</BaseButton
          >
        </div>
      </div>
    </div>
  </div>
</template>
