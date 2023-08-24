<script setup lang="ts">
definePageMeta({
  title: 'Overview',
  preview: {
    title: 'Overview',
    description: 'For tracking and quick actions',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-overview.png',
    srcDark: '/img/screens/dashboards-overview-dark.png',
    order: 3,
  },
})
</script>

<template>
  <div class="pt-6 pb-20">
    <div class="grid grid-cols-12 gap-6">
      <div
        class="col-span-12 ptablet:col-span-5 ltablet:col-span-4 lg:col-span-4"
      >
        <div class="flex items-center justify-between mb-6">
          <BaseHeading
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
            >Your cards</BaseHeading
          >
          <BaseButtonIcon to="/layouts/card/new" shape="curved" condensed>
            <Icon name="lucide:plus" class="w-4 h-4" />
          </BaseButtonIcon>
        </div>
        <!--Cards and accounts-->
        <div
          class="flex flex-col gap-6 border-b border-muted-200 dark:border-muted-800 pb-10"
        >
          <!--Card-->
          <div class="p-2 rounded-2xl bg-muted-100 dark:bg-muted-950">
            <DemoCreditCardReal
              status="active"
              name="Kendra Wilson"
              number="•••• •••• •••• 4479"
              brand="mastercard"
            />
          </div>
          <!--Account-->
          <NuxtLink
            to="/layouts/accounts"
            class="flex items-center bg-muted-100 hover:bg-muted-200 dark:bg-muted-950 dark:hover:bg-muted-800 rounded-xl p-6 transition-colors duration-300"
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
            class="flex items-center bg-muted-100 hover:bg-muted-200 dark:bg-muted-950 dark:hover:bg-muted-800 rounded-xl p-6 transition-colors duration-300"
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
        </div>
        <!--Limits-->
        <div class="flex flex-col gap-6 pt-6">
          <!--Withdrawal-->
          <NuxtLink
            to="/layouts/cards"
            class="flex items-center gap-3 hover:bg-muted-100 dark:hover:bg-muted-950 p-3 rounded-2xl transition-colors duration-200"
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
            class="flex items-center gap-3 hover:bg-muted-100 dark:hover:bg-muted-950 p-3 rounded-2xl transition-colors duration-200"
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
      <div
        class="col-span-12 ptablet:col-span-7 ltablet:col-span-8 lg:col-span-8"
      >
        <div
          class="p-6 ltablet:p-12 lg:p-12 rounded-3xl bg-muted-100 dark:bg-muted-950"
        >
          <div class="flex items-center justify-between mb-6">
            <BaseHeading
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
              >Quick transaction</BaseHeading
            >
            <BaseButtonIcon to="/layouts/send" shape="curved" condensed>
              <Icon name="lucide:plus" class="w-4 h-4" />
            </BaseButtonIcon>
          </div>
          <div
            class="flex gap-4 overflow-x-auto nui-slimscroll ltablet:overflow-x-hidden lg:overflow-x-hidden"
          >
            <NuxtLink
              to="/layouts/send"
              class="flex-1 bg-muted-200 dark:bg-muted-800 text-center p-4 rounded-2xl hover:bg-muted-300 dark:hover:bg-muted-700 transition-colors duration-200"
            >
              <BaseIconBox
                size="md"
                shape="straight"
                mask="blob"
                class="mx-auto mb-2 bg-white dark:bg-muted-950"
              >
                <Icon name="ph:bank-duotone" class="w-5 h-5" />
              </BaseIconBox>
              <BaseText size="sm" class="line-clamp-1">Manual</BaseText>
            </NuxtLink>
            <div
              role="button"
              class="flex-1 bg-muted-200 dark:bg-muted-800 text-center p-4 rounded-2xl hover:bg-muted-300 dark:hover:bg-muted-700 transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/3.svg"
                size="md"
                shape="straight"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">Kaleb W.</BaseText>
            </div>
            <div
              role="button"
              class="flex-1 bg-muted-200 dark:bg-muted-800 text-center p-4 rounded-2xl hover:bg-muted-300 dark:hover:bg-muted-700 transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/8.svg"
                size="md"
                shape="straight"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">John B.</BaseText>
            </div>
            <div
              role="button"
              class="flex-1 bg-muted-200 dark:bg-muted-800 text-center p-4 rounded-2xl hover:bg-muted-300 dark:hover:bg-muted-700 transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/24.svg"
                size="md"
                shape="straight"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">Amber W.</BaseText>
            </div>
            <div
              role="button"
              class="flex-1 bg-muted-200 dark:bg-muted-800 text-center p-4 rounded-2xl hover:bg-muted-300 dark:hover:bg-muted-700 transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/12.svg"
                size="md"
                shape="straight"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">Jennifer W.</BaseText>
            </div>
            <div
              role="button"
              class="flex-1 bg-muted-200 dark:bg-muted-800 text-center p-4 rounded-2xl hover:bg-muted-300 dark:hover:bg-muted-700 transition-colors duration-200"
            >
              <BaseAvatar
                src="/img/avatars/13.svg"
                size="md"
                shape="straight"
                mask="blob"
                class="mx-auto mb-2"
              />
              <BaseText size="sm" class="line-clamp-1">Josh D.</BaseText>
            </div>
          </div>
          <div class="py-10">
            <div>
              <DemoChartAreaBalance />
            </div>
          </div>
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
                class="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon
                  name="ph:credit-card-duotone"
                  class="w-5 h-5 text-muted-800 dark:text-muted-100"
                />
              </div>
              <div>
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
                class="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon
                  name="ph:bank-duotone"
                  class="w-5 h-5 text-muted-800 dark:text-muted-100"
                />
              </div>
              <div>
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
                class="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon
                  name="ph:credit-card-duotone"
                  class="w-5 h-5 text-muted-800 dark:text-muted-100"
                />
              </div>
              <div>
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
                class="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon
                  name="ph:bank-duotone"
                  class="w-5 h-5 text-muted-800 dark:text-muted-100"
                />
              </div>
              <div>
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
                class="h-12 w-12 flex items-center justify-center rounded-xl bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon
                  name="ph:credit-card-duotone"
                  class="w-5 h-5 text-muted-800 dark:text-muted-100"
                />
              </div>
              <div>
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
  </div>
</template>
