<script setup lang="ts">
definePageMeta({
  title: 'Dashboard',
  preview: {
    title: 'Dashboard',
    description: 'For data tracking',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-main.png',
    srcDark: '/img/screens/dashboards-main-dark.png',
    order: 1,
  },
})
</script>

<template>
  <div>
    <!--CLoseable widget-->
    <div class="w-full">
      <!--Features widget-->
      <DemoWidgetFeatures class="mt-8" />
    </div>
    <div class="grid grid-cols-12 gap-6 pt-6 pb-20">
      <!--Grid item-->
      <div class="col-span-12 md:col-span-5">
        <!--Welcome widget-->
        <DemoWidgetWelcome />
      </div>
      <div class="col-span-12 md:col-span-7">
        <!--Account balance widget-->
        <DemoWidgetAccountBalance />
      </div>
      <div class="col-span-12 md:col-span-6">
        <!--Money out widget-->
        <DemoWidgetMoneyOut />
      </div>
      <div class="col-span-12 md:col-span-6">
        <!--Money in widget-->
        <DemoWidgetMoneyIn />
      </div>
      <div class="col-span-12 md:col-span-12">
        <!--Transactions widget-->
        <DemoWidgetTransactionSummary />
      </div>
    </div>
  </div>
</template>
