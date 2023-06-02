<script setup lang="ts"></script>

<template>
  <BaseCard
    shape="curved"
    elevated
    class="h-full py-16 px-10 dark:!bg-muted-950 dark:!border-muted-800"
  >
    <div class="h-full flex flex-col justify-between gap-7">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="uppercase text-muted-400"
      >
        Money out last 30 days
      </BaseHeading>

      <div>
        <span
          class="font-sans font-medium text-4xl text-muted-800 dark:text-white before:content-['$'] before:text-xl"
        >
          3,641.29
        </span>
      </div>

      <div class="space-y-1">
        <p class="font-sans text-muted-500">58 outgoing transactions</p>
        <div class="w-full h-0.5 bg-muted-200 dark:bg-muted-800"></div>
      </div>
      <div class="mt-2 text-right">
        <DemoLinkArrow to="#" />
      </div>
    </div>
  </BaseCard>
</template>
