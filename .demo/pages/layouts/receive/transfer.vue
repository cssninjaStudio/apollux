<script setup lang="ts">
import type { PaymentReceive, StepData } from '../../../types'

definePageMeta({
  title: 'Receive - Step 2',
  layout: 'empty',
  preview: {
    title: 'Receive - Step 2',
    description: 'For receiving payments',
    categories: ['layouts', 'lists'],
    src: '/img/screens/wizards-receive-2.png',
    srcDark: '/img/screens/wizards-receive-2-dark.png',
    order: 16,
  },
})

const {
  data: request,
  currentStep,
  loading,
  getNextStep,
  getPrevStep,
  steps,
} = useMultiStepForm<PaymentReceive, StepData>()
useHead({
  title: 'Transfer details',
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

const expandedRegular = ref(false)
const expandedInternational = ref(false)
const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}

onClickOutside(target, () => (open.value = false))

function setAccount(account: any) {
  request.value.account = account
  open.value = false
}
</script>

<template>
  <div class="w-full">
    <!--Transfer-->
    <div v-if="request.method === 'Bank transfer'" class="w-full">
      <div class="mb-8 space-y-2">
        <BaseHeading
          as="h2"
          size="2xl"
          weight="medium"
          class="md:!3xl text-muted-800 dark:text-white"
        >
          Bank transfer
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="max-w-sm text-muted-500 dark:text-muted-400"
        >
          Enter an amount to transfer. This amount is what will be deducted from
          the sender's account.
        </BaseParagraph>
      </div>

      <div class="w-full max-w-md">
        <!--Amount input-->
        <div class="relative">
          <BaseInput
            v-model="request.amount"
            type="number"
            shape="straight"
            icon="lucide:dollar-sign"
            placeholder="0.00"
            :classes="{
              input:
                '!ps-14 !py-2 !h-14 !text-4xl !leading-5 !border-t-0 !border-l-0  !border-r-0 !border-b-2 focus:!border-primary-500 dark:!bg-muted-900 dark:focus:!border-primary-500',
              icon: '!h-14 !w-14',
            }"
          />
        </div>

        <!--Transfer from-->
        <div class="pt-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="mb-4 text-muted-600 dark:text-muted-400"
          >
            Transfer from:
          </BaseHeading>

          <!--Placeholder-->
          <div class="p-4 text-center bg-muted-100 dark:bg-muted-950">
            <div class="w-full max-w-lg mx-auto">
              <BaseHeading
                as="h3"
                size="md"
                weight="medium"
                class="text-muted-800 dark:text-white"
              >
                External account
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400 mb-2"
              >
                Link external bank accounts to transfer funds.
              </BaseParagraph>

              <div class="flex items-center justify-center">
                <BaseButton color="primary" shape="full" class="w-32">
                  Link Account
                </BaseButton>
              </div>
            </div>
          </div>
        </div>

        <!--Transfer account-->
        <div class="pt-6 pb-4">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="mb-4 text-muted-600 dark:text-muted-400"
          >
            Transfer to:
          </BaseHeading>
          <!--Dropdown-->
          <div ref="target" class="relative w-full z-10">
            <button
              type="button"
              class="w-full p-4 click-blur bg-white dark:bg-muted-950 rounded-xl border border-muted-200 dark:border-muted-800"
              @click="openDropdown()"
            >
              <span class="w-full flex items-center gap-3 text-left">
                <ApolluxLogo class="w-8 h-8 text-primary-500" />
                <div>
                  <BaseText
                    size="sm"
                    class="block text-muted-800 dark:text-muted-200 capitalize"
                  >
                    {{ request.account.type }} {{ request.account.label }}
                  </BaseText>
                  <BaseText
                    size="xs"
                    class="block text-muted-500 dark:text-muted-400"
                  >
                    ${{ request.account.balance.toFixed(2) }}
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
                class="absolute top-20 left-0 w-full p-2 rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
              >
                <!--Accounts-->
                <ul>
                  <li v-for="account in accounts" :key="account.id">
                    <button
                      type="button"
                      class="group w-full flex items-center gap-3 text-left py-2 px-4 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-900 transition-colors duration-300"
                      @click="setAccount(account)"
                    >
                      <ApolluxLogo
                        class="w-8 h-8 text-muted-300 dark:text-muted-700 group-hover:text-primary-500 transition-colors duration-300"
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
        </div>
      </div>
    </div>

    <!--Link-->
    <div v-else-if="request.method === 'Payment link'" class="w-full">
      <div class="mb-8 space-y-2">
        <BaseHeading
          as="h2"
          size="2xl"
          weight="medium"
          class="md:!3xl text-muted-800 dark:text-white"
        >
          Payment link
        </BaseHeading>
        <BaseParagraph
          size="sm"
          class="max-w-sm text-muted-500 dark:text-muted-400"
        >
          Enter an amount to transfer. This amount is what will be deducted from
          the sender's account.
        </BaseParagraph>
      </div>

      <div class="w-full max-w-md">
        <!--Amount input-->
        <div class="relative">
          <BaseInput
            v-model="request.amount"
            type="number"
            shape="straight"
            icon="lucide:dollar-sign"
            placeholder="0.00"
            :classes="{
              input:
                '!ps-14 !py-2 !h-14 !text-4xl !leading-5 !border-t-0 !border-l-0  !border-r-0 !border-b-2 focus:!border-primary-500 dark:!bg-muted-900 dark:focus:!border-primary-500',
              icon: '!h-14 !w-14',
            }"
          />
        </div>

        <!--Send to-->
        <div class="pt-6">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="mb-4 text-muted-600 dark:text-muted-400"
          >
            Send to:
          </BaseHeading>

          <div class="relative">
            <BaseInput
              v-model="request.email"
              icon="lucide:mail"
              placeholder="Ex: johndoe@gmail.com"
              :classes="{
                input: '!ps-12 !py-2 !h-12',
                icon: '!h-12 !w-12',
              }"
            />
          </div>
        </div>

        <!--Transfer account-->
        <div class="pt-6 pb-4">
          <BaseHeading
            as="h4"
            size="sm"
            weight="medium"
            class="mb-4 text-muted-600 dark:text-muted-400"
          >
            Transfer to:
          </BaseHeading>
          <!--Dropdown-->
          <div ref="target" class="relative w-full z-10">
            <button
              type="button"
              class="w-full p-4 click-blur bg-white dark:bg-muted-950 rounded-xl border border-muted-200 dark:border-muted-800"
              @click="openDropdown()"
            >
              <span class="w-full flex items-center gap-3 text-left">
                <ApolluxLogo class="w-8 h-8 dark:invert" />
                <div>
                  <BaseText
                    size="sm"
                    class="block text-muted-800 dark:text-muted-200 capitalize"
                  >
                    {{ request.account.type }} {{ request.account.label }}
                  </BaseText>
                  <BaseText
                    size="xs"
                    class="block text-muted-500 dark:text-muted-400"
                  >
                    ${{ request.account.balance.toFixed(2) }}
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
                class="absolute top-20 left-0 w-full p-2 rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
              >
                <!--Accounts-->
                <ul>
                  <li v-for="account in accounts" :key="account.id">
                    <button
                      type="button"
                      class="w-full flex items-center gap-3 text-left py-2 px-4 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-900 transition-colors duration-300"
                      @click="setAccount(account)"
                    >
                      <ApolluxLogo class="w-8 h-8 dark:invert" />
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
        </div>
      </div>
    </div>

    <!--Wire-->
    <div v-else-if="request.method === 'Wire'" class="w-full pb-10">
      <div class="w-full max-w-md">
        <!--Header-->
        <div class="mb-4">
          <div class="space-y-2">
            <BaseHeading
              as="h2"
              size="2xl"
              weight="medium"
              class="md:!3xl text-muted-800 dark:text-white"
            >
              Wire details
            </BaseHeading>
            <BaseParagraph
              size="sm"
              class="max-w-sm text-muted-500 dark:text-muted-400"
            >
              Enter an amount to transfer. This amount is what will be deducted
              from the sender's account.
            </BaseParagraph>
            <a
              class="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
            >
              <Icon name="lucide:download" class="w-4 h-4" />
              <BaseText size="xs" weight="semibold">Download as PDF</BaseText>
            </a>
          </div>
        </div>
        <!--Account-->
        <div ref="target" class="relative w-full z-10">
          <button
            type="button"
            class="w-full p-4 click-blur bg-white dark:bg-muted-950 rounded-xl border border-muted-200 dark:border-muted-800"
            @click="openDropdown()"
          >
            <span class="w-full flex items-center gap-3 text-left">
              <ApolluxLogo class="w-8 h-8 dark:invert" />
              <div>
                <BaseText
                  size="sm"
                  class="block text-muted-800 dark:text-muted-200 capitalize"
                >
                  {{ request.account.type }} {{ request.account.label }}
                </BaseText>
                <BaseText
                  size="xs"
                  class="block text-muted-500 dark:text-muted-400"
                >
                  ${{ request.account.balance.toFixed(2) }}
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
              class="absolute top-20 left-0 w-full p-2 rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
            >
              <!--Accounts-->
              <ul>
                <li v-for="account in accounts" :key="account.id">
                  <button
                    type="button"
                    class="w-full flex items-center gap-3 text-left py-2 px-4 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-900 transition-colors duration-300"
                    @click="setAccount(account)"
                  >
                    <ApolluxLogo class="w-8 h-8 dark:invert" />
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

        <!--Transfer details-->
        <div class="py-6">
          <!--Regular collapse-->
          <div class="w-full flex flex-col">
            <!--Trigger-->
            <button
              type="button"
              class="w-full flex items-center justify-between p-4 border-b border-t border-muted-200 dark:border-muted-900 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300 cursor-pointer"
              @click="expandedRegular = !expandedRegular"
            >
              <BaseText
                size="xs"
                weight="medium"
                class="uppercase text-muted-500 dark:text-muted-400"
              >
                Regular transfer
              </BaseText>
              <Icon
                name="lucide:chevron-down"
                class="w-5 h-5 text-muted-400 transition-transform duration-300"
                :class="expandedRegular ? 'rotate-180' : ''"
              />
            </button>
            <!--Content-->
            <AddonCollapseTransition>
              <div v-if="expandedRegular" class="w-full p-4">
                <div class="space-y-6">
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="mb-4 text-muted-800 dark:text-white"
                    >
                      Beneficiary
                    </BaseHeading>
                    <!--List-->
                    <ul class="w-full font-heading text-sm space-y-3">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Beneficiary Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            Kendra Wilson
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Account number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            {{ request.account.number }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Account type
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            {{ request.account.type }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-right"
                          >
                            <BaseParagraph size="sm"
                              >124, Downing street</BaseParagraph
                            >
                            <BaseParagraph size="sm"
                              >New York, NY</BaseParagraph
                            >
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="mb-4 text-muted-800 dark:text-white"
                    >
                      Bank details
                    </BaseHeading>
                    <!--List-->
                    <ul class="w-full font-heading text-sm space-y-3">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            ABA Routing Number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            9156511
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Bank Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            Apollux Inc
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Bank Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-right"
                          >
                            <BaseParagraph size="sm"
                              >47 Victorian Av, Suite G3</BaseParagraph
                            >
                            <BaseParagraph size="sm"
                              >New York, NY</BaseParagraph
                            >
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AddonCollapseTransition>
          </div>
          <!--International collapse-->
          <div class="w-full flex flex-col">
            <!--Trigger-->
            <button
              type="button"
              class="w-full flex items-center justify-between p-4 border-b border-t border-muted-200 dark:border-muted-900 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300 cursor-pointer"
              @click="expandedInternational = !expandedInternational"
            >
              <BaseText
                size="xs"
                weight="medium"
                class="uppercase text-muted-500 dark:text-muted-400"
              >
                International transfer
              </BaseText>
              <Icon
                name="lucide:chevron-down"
                class="w-5 h-5 text-muted-400 transition-transform duration-300"
                :class="expandedInternational ? 'rotate-180' : ''"
              />
            </button>
            <!--Content-->
            <AddonCollapseTransition>
              <div v-if="expandedInternational" class="w-full p-4">
                <div class="space-y-6">
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="mb-4 text-muted-800 dark:text-white"
                    >
                      Beneficiary
                    </BaseHeading>
                    <!--List-->
                    <ul class="w-full font-heading text-sm space-y-3">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Beneficiary Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            Kendra Wilson
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Account number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            {{ request.account.number }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Account type
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            {{ request.account.type }}
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-right"
                          >
                            <BaseParagraph size="sm"
                              >47 Victorian Av, Suite G3</BaseParagraph
                            >
                            <BaseParagraph size="sm"
                              >New York, NY</BaseParagraph
                            >
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!--Fieldset-->
                  <div>
                    <BaseHeading
                      as="h5"
                      size="sm"
                      weight="semibold"
                      class="mb-4 text-muted-800 dark:text-white"
                    >
                      Bank details
                    </BaseHeading>
                    <!--List-->
                    <ul class="w-full font-heading text-sm space-y-3">
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            IBAN Number
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            US1565
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="block text-muted-500 dark:text-muted-400"
                          >
                            Bank Name
                          </BaseText>
                          <BaseText
                            size="sm"
                            class="block text-muted-800 dark:text-muted-200"
                          >
                            Apollux Inc
                          </BaseText>
                        </div>
                      </li>
                      <li>
                        <div class="flex justify-between">
                          <BaseText
                            size="sm"
                            class="text-muted-500 dark:text-muted-400"
                          >
                            Bank Address
                          </BaseText>
                          <div
                            class="text-muted-800 dark:text-muted-200 text-right"
                          >
                            <BaseParagraph size="sm"
                              >124, Downing street</BaseParagraph
                            >
                            <BaseParagraph size="sm"
                              >New York, NY</BaseParagraph
                            >
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AddonCollapseTransition>
          </div>
        </div>
      </div>
    </div>

    <!--Buttons-->
    <div class="flex gap-4 w-full max-w-md">
      <BaseButton
        v-if="currentStep > 0"
        :to="loading ? undefined : getPrevStep()?.to"
        :disabled="!getPrevStep()"
        class="!h-12 w-full"
      >
        <span>Previous</span>
      </BaseButton>
      <BaseButton
        v-if="request.method !== 'Wire'"
        :to="getNextStep()?.to"
        :disabled="!getNextStep()"
        color="primary"
        class="!h-12 w-full"
      >
        <span>Continue</span>
      </BaseButton>
    </div>
  </div>
</template>
