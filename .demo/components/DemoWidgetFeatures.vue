<script setup lang="ts">
const show = ref(true)
</script>

<template>
  <div
    v-if="show"
    class="bg-muted-100 dark:bg-muted-950/50 p-4 sm:p-6 rounded-xl"
  >
    <div class="flex items-center justify-between mb-6">
      <div>
        <BaseHeading
          as="h3"
          weight="medium"
          size="xl"
          class="text-muted-800 dark:text-muted-100"
        >
          New Features
        </BaseHeading>
        <BaseParagraph class="text-muted-500 dark:text-muted-400">
          Some nice features we've just released
        </BaseParagraph>
      </div>
      <div>
        <BaseButtonClose
          color="muted"
          data-nui-tooltip="Hide this"
          @click="show = !show"
        />
      </div>
    </div>
    <div class="grid grid-cols-1 ltablet:grid-cols-2 lg:grid-cols-2 gap-6">
      <div class="relative">
        <BaseCard
          shape="curved"
          class="p-4 flex flex-col sm:flex-row gap-4 dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div
            class="flex items-center justify-center w-full sm:h-48 sm:w-48 bg-muted-100 dark:bg-muted-900 rounded-xl shrink-0"
          >
            <img src="/img/illustrations/ui/recurring.svg" class="w-full" />
          </div>
          <div class="flex flex-col">
            <BaseHeading
              as="h3"
              weight="medium"
              size="lg"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              Recurring payments
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-400 mb-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Idem
              adhuc; Igitur neque stultorum quisquam beatus.
            </BaseParagraph>
            <div class="mt-auto mb-1">
              <DemoLinkArrow to="#" label="Learn more about it" />
            </div>
          </div>
        </BaseCard>
      </div>
      <div class="relative">
        <BaseCard
          shape="curved"
          class="p-4 flex flex-col sm:flex-row gap-4 dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div
            class="flex items-center justify-center w-full sm:h-48 sm:w-48 bg-muted-100 dark:bg-muted-900 rounded-xl shrink-0"
          >
            <img src="/img/illustrations/ui/cashback.svg" class="w-full" />
          </div>
          <div class="flex flex-col">
            <BaseHeading
              as="h3"
              weight="medium"
              size="lg"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              Credit balance
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="text-muted-500 dark:text-muted-400 mb-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Idem
              adhuc; Igitur neque stultorum quisquam beatus.
            </BaseParagraph>
            <div class="mt-auto mb-1">
              <DemoLinkArrow to="#" label="Learn more about it" />
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
