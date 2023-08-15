<script setup lang="ts">
definePageMeta({
  title: 'Quickview',
  preview: {
    title: 'Quickview',
    description: 'For personal use and tracking',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-quickview.png',
    srcDark: '/img/screens/dashboards-quickview-dark.png',
    order: 5,
  },
})
</script>

<template>
  <div class="pb-20">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <div class="grid grid-cols-12 gap-6">
          <!--Card column-->
          <div class="col-span-12 sm:col-span-6">
            <div class="flex items-center justify-between mb-6">
              <BaseHeading
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
                >Your card</BaseHeading
              >
            </div>
            <!--Card-->
            <div class="p-2 rounded-2xl bg-muted-100 dark:bg-muted-950">
              <DemoCreditCardReal
                status="active"
                name="Kendra Wilson"
                number="•••• •••• •••• 4479"
                brand="mastercard"
              />
            </div>
          </div>
          <!--Upcoming column-->
          <div class="col-span-12 sm:col-span-6">
            <div class="flex flex-col h-full">
              <div class="flex items-center justify-between mb-6">
                <BaseHeading
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                  >Incoming payments</BaseHeading
                >
              </div>
              <div class="flex gap-6 grow">
                <!--Item-->
                <NuxtLink
                  to="/layouts/payments"
                  class="flex flex-col flex-1 h-full p-6 rounded-2xl bg-muted-100 hover:bg-muted-200 dark:bg-muted-950 dark:hover:bg-muted-800/40 transition-colors duration-200"
                >
                  <BaseIconBox
                    size="md"
                    class="bg-white dark:bg-muted-800 mb-4"
                  >
                    <Icon name="logos:campaignmonitor-icon" class="w-6 h-6" />
                  </BaseIconBox>
                  <div class="mb-8">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100 line-clamp-1"
                      >Campaign Monitor</BaseHeading
                    >
                    <BaseParagraph size="xs" class="text-muted-400"
                      >Incoming</BaseParagraph
                    >
                  </div>
                  <div class="mt-auto">
                    <BaseText
                      size="lg"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ asDollar(1234.15) }}
                    </BaseText>
                  </div>
                </NuxtLink>
                <!--Item-->
                <NuxtLink
                  to="/layouts/payments"
                  class="flex flex-col flex-1 h-full p-6 rounded-2xl bg-muted-100 hover:bg-muted-200 dark:bg-muted-950 dark:hover:bg-muted-800/40 transition-colors duration-200"
                >
                  <BaseIconBox
                    size="md"
                    class="bg-white dark:bg-muted-800 mb-4"
                  >
                    <Icon name="logos:asana-icon" class="w-6 h-6" />
                  </BaseIconBox>
                  <div class="mb-8">
                    <BaseHeading
                      weight="medium"
                      size="sm"
                      class="text-mute-800 dark:text-muted-100 line-clamp-1"
                      >Asana</BaseHeading
                    >
                    <BaseParagraph size="xs" class="text-muted-400"
                      >Outgoing</BaseParagraph
                    >
                  </div>
                  <div class="mt-auto">
                    <BaseText
                      size="lg"
                      weight="semibold"
                      lead="none"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ asDollar(249.99) }}
                    </BaseText>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <!--Transactions column-->
          <div class="col-span-12">
            <div class="flex items-center justify-between mb-6">
              <BaseHeading
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
                >Recent Activity</BaseHeading
              >
              <DemoLinkArrow to="/layouts" />
            </div>
            <div class="space-y-6">
              <!--Item-->
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800"
                >
                  <Icon
                    name="ph:credit-card-duotone"
                    class="w-5 h-5 text-muted-800 dark:text-muted-100"
                  />
                </div>
                <div class="w-2/5">
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    class="text-mute-800 dark:text-muted-100"
                    >Victoria's Corner</BaseHeading
                  >
                  <BaseParagraph size="xs" class="text-muted-400"
                    >Outgoing payment</BaseParagraph
                  >
                </div>
                <div class="hidden sm:block px-8">
                  <BaseText
                    size="sm"
                    weight="medium"
                    lead="none"
                    class="text-muted-400"
                  >
                    Jun 12, 2023
                  </BaseText>
                </div>
                <div class="ms-auto">
                  <BaseText
                    size="sm"
                    weight="semibold"
                    lead="none"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    - {{ asDollar(938.39) }}
                  </BaseText>
                </div>
              </div>
              <!--Item-->
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800"
                >
                  <Icon
                    name="ph:bank-duotone"
                    class="w-5 h-5 text-muted-800 dark:text-muted-100"
                  />
                </div>
                <div class="w-2/5">
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    class="text-mute-800 dark:text-muted-100"
                    >John Rowland</BaseHeading
                  >
                  <BaseParagraph size="xs" class="text-muted-400"
                    >Outgoing payment</BaseParagraph
                  >
                </div>
                <div class="hidden sm:block px-8">
                  <BaseText
                    size="sm"
                    weight="medium"
                    lead="none"
                    class="text-muted-400"
                  >
                    Jun 11, 2023
                  </BaseText>
                </div>
                <div class="ms-auto">
                  <BaseText
                    size="sm"
                    weight="semibold"
                    lead="none"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    - {{ asDollar(1234.15) }}
                  </BaseText>
                </div>
              </div>
              <!--Item-->
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800"
                >
                  <Icon
                    name="ph:credit-card-duotone"
                    class="w-5 h-5 text-muted-800 dark:text-muted-100"
                  />
                </div>
                <div class="w-2/5">
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    class="text-mute-800 dark:text-muted-100"
                    >Kali Burger</BaseHeading
                  >
                  <BaseParagraph size="xs" class="text-muted-400"
                    >Outgoing payment</BaseParagraph
                  >
                </div>
                <div class="hidden sm:block px-8">
                  <BaseText
                    size="sm"
                    weight="medium"
                    lead="none"
                    class="text-muted-400"
                  >
                    Jun 9, 2023
                  </BaseText>
                </div>
                <div class="ms-auto">
                  <BaseText
                    size="sm"
                    weight="semibold"
                    lead="none"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    - {{ asDollar(23.69) }}
                  </BaseText>
                </div>
              </div>
              <!--Item-->
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800"
                >
                  <Icon
                    name="ph:bank-duotone"
                    class="w-5 h-5 text-muted-800 dark:text-muted-100"
                  />
                </div>
                <div class="w-2/5">
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    class="text-mute-800 dark:text-muted-100"
                    >Railway Inc</BaseHeading
                  >
                  <BaseParagraph size="xs" class="text-muted-400"
                    >Ingoing payment</BaseParagraph
                  >
                </div>
                <div class="hidden sm:block px-8">
                  <BaseText
                    size="sm"
                    weight="medium"
                    lead="none"
                    class="text-muted-400"
                  >
                    Jun 8, 2023
                  </BaseText>
                </div>
                <div class="ms-auto">
                  <BaseText
                    size="sm"
                    weight="semibold"
                    lead="none"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    + {{ asDollar(2399.99) }}
                  </BaseText>
                </div>
              </div>
              <!--Item-->
              <div class="flex items-center gap-3">
                <div
                  class="shrink-0 h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800"
                >
                  <Icon
                    name="ph:credit-card-duotone"
                    class="w-5 h-5 text-muted-800 dark:text-muted-100"
                  />
                </div>
                <div class="w-2/5">
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    class="text-mute-800 dark:text-muted-100"
                    >Mobihouse</BaseHeading
                  >
                  <BaseParagraph size="xs" class="text-muted-400"
                    >Outgoing payment</BaseParagraph
                  >
                </div>
                <div class="hidden sm:block px-8">
                  <BaseText
                    size="sm"
                    weight="medium"
                    lead="none"
                    class="text-muted-400"
                  >
                    Jun 6, 2023
                  </BaseText>
                </div>
                <div class="ms-auto">
                  <BaseText
                    size="sm"
                    weight="semibold"
                    lead="none"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    - {{ asDollar(49.99) }}
                  </BaseText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div class="p-6 rounded-3xl bg-muted-100 dark:bg-muted-950">
          <div>
            <BaseParagraph size="xs" class="text-muted-400"
              >Spent today</BaseParagraph
            >
            <BaseHeading
              weight="semibold"
              size="3xl"
              class="text-muted-800 dark:text-muted-100"
              >{{ asDollar(687.22) }}</BaseHeading
            >
          </div>
          <div class="pb-6">
            <div>
              <DemoChartAreaBalance />
            </div>
          </div>
          <div class="flex flex-col gap-6">
            <!--Account-->
            <NuxtLink
              to="/layouts/accounts"
              class="flex items-center bg-muted-200 hover:bg-white dark:bg-muted-900 dark:hover:bg-muted-800 rounded-xl p-6 transition-colors duration-300"
            >
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ asDollar(9543.13) }}
              </BaseText>
              <div
                class="ms-auto flex items-center divide-x divide-muted-300 dark:divide-muted-800"
              >
                <BaseText
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-800 dark:text-muted-100 px-3"
                >
                  **** 4869
                </BaseText>
                <div class="px-3">
                  <Icon name="logos:mastercard" class="w-6 h-6" />
                </div>
              </div>
            </NuxtLink>
            <!--Account-->
            <NuxtLink
              to="/layouts/accounts"
              class="flex items-center bg-muted-200 hover:bg-white dark:bg-muted-900 dark:hover:bg-muted-800 rounded-xl p-6 transition-colors duration-300"
            >
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ asDollar(2816.27) }}
              </BaseText>
              <div
                class="ms-auto flex items-center divide-x divide-muted-300 dark:divide-muted-800"
              >
                <BaseText
                  size="sm"
                  weight="medium"
                  lead="none"
                  class="text-muted-800 dark:text-muted-100 px-3"
                >
                  **** 1521
                </BaseText>
                <div class="px-3">
                  <Icon name="logos:visa" class="w-6 h-6" />
                </div>
              </div>
            </NuxtLink>
            <!--Withdrawal-->
            <NuxtLink
              to="/layouts/cards"
              class="flex items-center gap-3 bg-muted-200 hover:bg-white dark:bg-muted-900 dark:hover:bg-muted-800 p-3 rounded-2xl transition-colors duration-200"
            >
              <div
                class="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon
                  name="guidance:atm"
                  class="w-5 h-5 text-muted-800 dark:text-muted-100"
                />
              </div>
              <div>
                <BaseHeading
                  weight="medium"
                  size="sm"
                  class="text-mute-800 dark:text-muted-100"
                  >{{ asDollar(950) }} /
                  <span class="font-semibold">{{
                    asDollar(2500)
                  }}</span></BaseHeading
                >
                <BaseParagraph size="xs" class="text-muted-400"
                  >Withdrawal limit</BaseParagraph
                >
              </div>
              <div class="ms-auto">
                <BaseButtonIcon shape="curved" condensed>
                  <Icon name="lucide:chevron-right" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
            </NuxtLink>
            <!--Payment-->
            <NuxtLink
              to="/layouts/cards"
              class="flex items-center gap-3 bg-muted-200 hover:bg-white dark:bg-muted-900 dark:hover:bg-muted-800 p-3 rounded-2xl transition-colors duration-200"
            >
              <div
                class="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon
                  name="guidance:money"
                  class="w-5 h-5 text-muted-800 dark:text-muted-100"
                />
              </div>
              <div>
                <BaseHeading
                  weight="medium"
                  size="sm"
                  class="text-mute-800 dark:text-muted-100"
                  >{{ asDollar(231.12) }} /
                  <span class="font-semibold">{{
                    asDollar(5000)
                  }}</span></BaseHeading
                >
                <BaseParagraph size="xs" class="text-muted-400"
                  >Payment limit</BaseParagraph
                >
              </div>
              <div class="ms-auto">
                <BaseButtonIcon shape="curved" condensed>
                  <Icon name="lucide:chevron-right" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
