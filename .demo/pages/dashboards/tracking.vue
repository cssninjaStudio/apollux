<script setup lang="ts">
definePageMeta({
  title: 'Tracking',
  preview: {
    title: 'Tracking',
    description: 'For generic things',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-personal-1.png',
    srcDark: '/img/screens/dashboards-personal-1-dark.png',
    order: 1,
  },
})
</script>

<template>
  <div class="pt-4 space-y-6 pb-20">
    <div class="grid grid-cols-12 gap-6">
      <!-- Balance -->
      <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
        <BaseCard
          shape="curved"
          elevated
          class="h-full p-8 dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div
            class="flex flex-col gap-y-6 sm:gap-y-0 sm:flex-row justify-between h-full"
          >
            <div class="flex flex-col">
              <BaseParagraph size="sm" class="text-muted-400 mb-4"
                >Main Account</BaseParagraph
              >
              <BaseHeading
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
                >Checking account</BaseHeading
              >
              <BaseParagraph size="sm" class="text-muted-400 mb-6"
                >1487 3256 54122 4897</BaseParagraph
              >
              <div class="flex flex-col sm:flex-row items-center gap-2 mt-auto">
                <BaseButton
                  to="/layouts/send"
                  shape="full"
                  color="primary"
                  class="w-full sm:w-auto"
                  >Transfer Money</BaseButton
                >
                <BaseButton
                  to="/layouts/accounts/linked"
                  shape="full"
                  class="w-full sm:w-auto"
                  >Link Accounts</BaseButton
                >
              </div>
            </div>
            <div class="flex flex-col">
              <BaseParagraph size="sm" class="text-muted-400 mb-4"
                >Available Funds</BaseParagraph
              >
              <BaseHeading as="h5" size="2xl" class="mb-6"
                >$9,543.12</BaseHeading
              >

              <div class="mt-auto ms-auto">
                <ApolluxLogo class="w-12 h-12 text-muted-400" />
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Orders -->
      <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
        <BaseCard
          shape="curved"
          elevated
          class="h-full p-8 !bg-primary-800 !border-primary-800"
        >
          <div
            class="flex flex-col sm:flex-row gap-y-16 sm:gap-y-0 justify-between"
          >
            <div class="flex flex-col">
              <BaseHeading weight="medium" class="text-white mb-3"
                >Standing Orders</BaseHeading
              >
              <BaseParagraph size="sm" class="text-muted-100 mb-6"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si
                longus, levis dictata sunt. Quare attende, quaeso</BaseParagraph
              >
              <div class="flex items-center gap-2 mt-auto">
                <BaseButton to="/layouts/send" shape="full"
                  >Manage Orders</BaseButton
                >
              </div>
            </div>
            <div class="relative shrink-0 min-h-[180px] min-w-[160px]">
              <div
                class="absolute bottom-0 right-0 sm:-right-16 min-w-[250px] max-w-[250px] sm:min-w-[220px]"
              >
                <VectorIllustrationCalendar class="text-primary-500" />
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard
          shape="curved"
          elevated
          class="p-6 dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div class="flex justify-between mb-6">
            <div class="flex flex-col">
              <BaseHeading
                weight="medium"
                size="md"
                class="text-muted-800 dark:text-muted-100 mb-&"
              >
                Chase bank
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                **** **** 1728
              </BaseParagraph>
            </div>
            <div>
              <img
                src="/img/logos/companies/chase-full.svg"
                alt="Bank logo"
                class="w-8 h-8"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <BaseHeading as="h5" size="xl">$3,462.12</BaseHeading>
            </div>
            <div>
              <BaseButtonIcon condensed>
                <Icon name="lucide:arrow-right" />
              </BaseButtonIcon>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard
          shape="curved"
          elevated
          class="p-6 dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div class="flex justify-between mb-6">
            <div class="flex flex-col">
              <BaseHeading
                weight="medium"
                size="md"
                class="text-muted-800 dark:text-muted-100 mb-&"
              >
                Eurasian bank
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                **** **** 3291
              </BaseParagraph>
            </div>
            <div>
              <img
                src="/img/logos/companies/eurasian-full.svg"
                alt="Bank logo"
                class="w-8 h-8"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <BaseHeading as="h5" size="xl">$1,763.49</BaseHeading>
            </div>
            <div>
              <BaseButtonIcon condensed>
                <Icon name="lucide:arrow-right" />
              </BaseButtonIcon>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Tile -->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard
          shape="curved"
          elevated
          class="p-6 dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div class="flex justify-between mb-6">
            <div class="flex flex-col">
              <BaseHeading
                weight="medium"
                size="md"
                class="text-muted-800 dark:text-muted-100 mb-&"
              >
                Bank of America
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                **** **** 5482
              </BaseParagraph>
            </div>
            <div>
              <img
                src="/img/logos/companies/bank-of-america-full.svg"
                alt="Bank logo"
                class="w-8 h-8"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <BaseHeading as="h5" size="xl">$6,729.87</BaseHeading>
            </div>
            <div>
              <BaseButtonIcon condensed>
                <Icon name="lucide:arrow-right" />
              </BaseButtonIcon>
            </div>
          </div>
        </BaseCard>
      </div>
      <!-- Transactions -->
      <div class="col-span-12">
        <DemoWidgetTransactionSummary />
      </div>
      <!-- Chart -->
      <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
        <BaseCard
          shape="curved"
          elevated
          class="p-8 flex flex-col h-full dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div class="sm:flex items-center justify-between mb-8">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="none"
              class="uppercase text-muted-400"
            >
              All Expenses
            </BaseHeading>
          </div>
          <div
            class="flex justify-between border-b border-muted-200 dark:border-muted-800 mb-4 pb-4"
          >
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Daily
              </BaseParagraph>
              <BaseHeading as="h5" size="md">$276.40</BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Weekly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">$1,287.12</BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Monthly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">$6,832.41</BaseHeading>
            </div>
          </div>
          <div class="sm:px-4 mt-auto">
            <DemoChartDonutExpenses />
          </div>
        </BaseCard>
      </div>
      <!-- Chart -->
      <div class="col-span-12 ltablet:col-span-6 lg:col-span-6">
        <BaseCard
          shape="curved"
          elevated
          class="p-8 flex-col h-full dark:!bg-muted-950 dark:!border-muted-800"
        >
          <div class="sm:flex items-center justify-between mb-8">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              lead="none"
              class="uppercase text-muted-400"
            >
              Income
            </BaseHeading>
          </div>
          <div
            class="flex justify-between border-b border-muted-200 dark:border-muted-800 mb-4 pb-4"
          >
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Daily
              </BaseParagraph>
              <BaseHeading as="h5" size="md">$378.12</BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Weekly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">$832.21</BaseHeading>
            </div>
            <div>
              <BaseParagraph size="xs" class="text-muted-400 mb-1">
                Monthly
              </BaseParagraph>
              <BaseHeading as="h5" size="md">$4214.97</BaseHeading>
            </div>
          </div>
          <div class="sm:px-4 mt-auto">
            <DemoChartBarMultiIncome />
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
