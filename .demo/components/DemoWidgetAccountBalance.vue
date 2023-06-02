<script setup lang="ts"></script>

<template>
  <BaseCard
    shape="curved"
    elevated
    class="dark:!bg-muted-950 dark:!border-muted-800"
  >
    <div class="flex flex-col gap-4 px-8 pt-8 text-center">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="uppercase text-muted-400"
      >
        Account Balance
      </BaseHeading>
      <p>
        <span
          class="font-sans font-medium text-4xl text-muted-800 dark:text-white before:content-['$'] before:text-xl"
        >
          9,543.12
        </span>
      </p>
      <div class="flex items-center justify-center gap-x-2">
        <i
          class="iconify w-4 h-4 text-success-500"
          data-icon="lucide:arrow-up"
        ></i>
        <span class="font-sans text-sm text-muted-400">
          $149.32 Today, Sep 25
        </span>
      </div>
    </div>
    <DemoChartAreaBalance />
  </BaseCard>
</template>
