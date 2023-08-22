<script setup lang="ts">
definePageMeta({
  title: 'Personal',
  preview: {
    title: 'Personal',
    description: 'For personal data tracking',
    categories: ['dashboards'],
    src: '/img/screens/dashboards-personal.png',
    srcDark: '/img/screens/dashboards-personal-dark.png',
    order: 4,
  },
})

const accounts = ref([
  {
    id: 1,
    type: 'checking',
    label: '**** 4897',
    number: '1487 3256 54122 4897',
    balance: 9543.12,
  },
  {
    id: 2,
    type: 'checking',
    label: '**** 4869',
    number: '3524 65456 3245 4869',
    balance: 1211.67,
  },
  {
    id: 3,
    type: 'savings',
    label: '**** 6279',
    number: '3524 65456 3245 6279',
    balance: 4653.97,
  },
])

const selectedPerson = ref('Amber Wilson')
const selectedAccount = ref(accounts.value[0])
const amount = ref()

const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}

onClickOutside(target, () => (open.value = false))

function setAccount(account: any) {
  selectedAccount.value = account
  open.value = false
}
</script>

<template>
  <div class="pt-4 space-y-6 pb-20">
    <div class="grid grid-cols-12 gap-6">
      <!--Tile-->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard shape="curved" color="white-contrast" elevated class="p-4">
          <div class="flex items-center">
            <div class="relative text-success-500">
              <BaseProgressCircle
                :max="100"
                :value="75"
                :size="90"
                :thickness="2"
              />
              <Icon
                name="lucide:trending-up"
                class="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
              />
            </div>
            <div>
              <BaseParagraph size="sm" class="text-muted-400"
                >Total Income</BaseParagraph
              >
              <BaseHeading size="xl">$2,629.43</BaseHeading>
            </div>
          </div>
        </BaseCard>
      </div>
      <!--Tile-->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard shape="curved" color="white-contrast" elevated class="p-4">
          <div class="flex items-center">
            <div class="relative text-danger-500">
              <BaseProgressCircle
                :max="100"
                :value="34"
                :size="90"
                :thickness="2"
              />
              <Icon
                name="lucide:trending-down"
                class="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
              />
            </div>
            <div>
              <BaseParagraph size="sm" class="text-muted-400"
                >Total Expenses</BaseParagraph
              >
              <BaseHeading size="xl">$1,821.56</BaseHeading>
            </div>
          </div>
        </BaseCard>
      </div>
      <!--Tile-->
      <div class="col-span-12 sm:col-span-4">
        <BaseCard shape="curved" color="white-contrast" elevated class="p-4">
          <div class="flex items-center">
            <div class="relative text-warning-500">
              <BaseProgressCircle
                :max="100"
                :value="82"
                :size="90"
                :thickness="2"
              />
              <Icon
                name="lucide:dollar-sign"
                class="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6"
              />
            </div>
            <div>
              <BaseParagraph size="sm" class="text-muted-400"
                >Total Taxes</BaseParagraph
              >
              <BaseHeading size="xl">$712.19</BaseHeading>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 sm:col-span-8 space-y-6">
        <!--Account balance widget-->
        <DemoWidgetAccountBalance />
        <!--Transactions widget-->
        <DemoWidgetTransactionCompact />
      </div>
      <form action="" class="col-span-12 sm:col-span-4 space-y-6">
        <BaseCard shape="curved" color="white-contrast" elevated class="p-4">
          <div class="mb-6">
            <DemoCreditCardReal
              status="active"
              name="Kendra Wilson"
              number="•••• •••• •••• 4479"
              brand="mastercard"
            />
          </div>
          <div>
            <BaseHeading
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
              >Quick Transfer</BaseHeading
            >
            <div class="flex justify-between gap-3 mt-6">
              <div
                class="h-12 w-12 flex items-center justify-center rounded-full border-2 border-muted-200 peer-checked:border-primary-500"
              >
                <BaseButtonIcon shape="full">
                  <Icon name="lucide:plus" class="w-4 h-4" />
                </BaseButtonIcon>
              </div>
              <BaseRadioHeadless
                v-model="selectedPerson"
                name="transfer"
                value="John Baxter"
                data-nui-tooltip="John Baxter"
              >
                <div
                  class="h-12 w-12 flex items-center justify-center rounded-full border-2 border-muted-200 peer-checked:border-primary-500"
                >
                  <BaseAvatar src="/img/avatars/8.svg" size="sm" />
                </div>
              </BaseRadioHeadless>
              <BaseRadioHeadless
                v-model="selectedPerson"
                name="transfer"
                value="Amber Wilson"
                data-nui-tooltip="Amber Wilson"
              >
                <div
                  class="h-12 w-12 flex items-center justify-center rounded-full border-2 border-muted-200 peer-checked:border-primary-500"
                >
                  <BaseAvatar src="/img/avatars/24.svg" size="sm" />
                </div>
              </BaseRadioHeadless>
              <BaseRadioHeadless
                v-model="selectedPerson"
                name="transfer"
                value="Kaleb Wilson"
                data-nui-tooltip="Kaleb Wilson"
              >
                <div
                  class="h-12 w-12 flex items-center justify-center rounded-full border-2 border-muted-200 peer-checked:border-primary-500"
                >
                  <BaseAvatar src="/img/avatars/3.svg" size="sm" />
                </div>
              </BaseRadioHeadless>
              <BaseRadioHeadless
                v-model="selectedPerson"
                name="transfer"
                value="Jennifer Wilson"
                data-nui-tooltip="Jennifer Wilson"
              >
                <div
                  class="h-12 w-12 flex items-center justify-center rounded-full border-2 border-muted-200 peer-checked:border-primary-500"
                >
                  <BaseAvatar src="/img/avatars/12.svg" size="sm" />
                </div>
              </BaseRadioHeadless>
            </div>
          </div>
          <div class="mt-6 space-y-4">
            <!--Dropdown-->
            <div ref="target" class="relative w-full z-10">
              <button
                type="button"
                class="w-full p-4 click-blur bg-white dark:bg-muted-950 rounded-xl border border-muted-200 dark:border-muted-800"
                @click="openDropdown()"
              >
                <span class="w-full flex items-center gap-3 text-start">
                  <ApolluxLogo class="w-8 h-8 text-primary-500" />
                  <div>
                    <BaseText
                      size="sm"
                      class="block text-muted-800 dark:text-muted-200 capitalize"
                    >
                      {{ selectedAccount.type }} {{ selectedAccount.label }}
                    </BaseText>
                    <BaseText
                      size="xs"
                      class="block text-muted-500 dark:text-muted-400"
                    >
                      ${{ selectedAccount.balance.toFixed(2) }}
                    </BaseText>
                  </div>
                  <Icon
                    name="lucide:chevron-down"
                    class="w-4 h-4 ms-auto text-muted-400 transition-transform duration-300"
                    :class="open && 'rotate-180'"
                  />
                </span>
              </button>
              <Transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div
                  v-if="open"
                  class="absolute top-20 start-0 w-full p-2 rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
                >
                  <!--Accounts-->
                  <ul>
                    <li v-for="account in accounts" :key="account.id">
                      <button
                        type="button"
                        class="w-full flex items-center gap-3 text-start py-2 px-4 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-900 transition-colors duration-300"
                        @click="setAccount(account)"
                      >
                        <ApolluxLogo
                          class="w-8 h-8 text-muted-400 dark:text-muted-100"
                        />
                        <span class="block">
                          <span
                            class="block font-heading text-sm text-muted-800 dark:text-muted-200 capitalize"
                          >
                            {{ account.type }} {{ account.label }}
                          </span>
                          <span
                            class="block font-heading text-xs text-muted-500 dark:text-muted-400"
                          >
                            ${{ account.balance.toFixed(2) }}
                          </span>
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </Transition>
            </div>
            <!--Input-->
            <div class="relative">
              <BaseInput
                v-model="amount"
                type="number"
                icon="lucide:dollar-sign"
                placeholder="Transfer amount"
              />
            </div>
            <div>
              <BaseButton
                type="submit"
                shape="curved"
                color="primary"
                class="w-full !h-12"
                >Send Money</BaseButton
              >
            </div>
          </div>
        </BaseCard>
        <!--Learn more-->
        <BaseCard
          shape="curved"
          color="muted-contrast"
          class="relative flex flex-col sm:flex-row gap-4"
        >
          <div class="flex flex-col p-6">
            <div
              class="h-14 w-14 flex items-center justify-center rounded-full bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800 mb-4"
            >
              <div
                class="h-10 w-10 flex items-center justify-center rounded-full bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-800"
              >
                <Icon name="ph:bank-duotone" class="w-6 h-6 text-primary-500" />
              </div>
            </div>
            <BaseHeading
              as="h3"
              weight="medium"
              size="lg"
              class="text-muted-800 dark:text-muted-100 mb-2"
            >
              Try Quick Cash
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
      </form>
    </div>
  </div>
</template>
