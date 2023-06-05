<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  title: 'Send - Step 5',
  layout: 'empty',
  preview: {
    title: 'Send - Step 5',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const {
  data: request,
  currentStep,
  loading,
  getNextStep,
  getPrevStep,
  steps,
} = useMultiStepForm<PaymentSend, StepData>()
useHead({
  title: 'Recipient',
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

const target = ref(null)
const open = ref(false)

function openDropdown() {
  open.value = true
}

onClickOutside(target, () => (open.value = false))

function setAccount(account: any) {
  request.value.account = account
  open.value = false
  setBalanceLimit()
}

function setBalanceLimit() {
  request.value.amount > request.value.account.balance
    ? (request.value.amount = request.value.account.balance)
    : (request.value.amount = request.value.amount)
}
</script>

<template>
  <div class="w-full">
    <div class="mb-8 space-y-2">
      <BaseHeading
        as="h2"
        size="2xl"
        weight="medium"
        class="md:!3xl text-muted-800 dark:text-white"
      >
        {{ steps[currentStep].meta.title }}
      </BaseHeading>
      <BaseParagraph
        size="sm"
        class="max-w-sm text-muted-500 dark:text-muted-400"
      >
        {{ steps[currentStep].meta.subtitle }}
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
          @change="setBalanceLimit()"
        />
      </div>

      <!--Transfer account-->
      <div class="py-10">
        <h4
          class="font-heading text-sm mb-4 text-muted-600 dark:text-muted-400"
        >
          Transfer from:
        </h4>
        <!--Dropdown-->
        <div ref="target" class="relative w-full z-10">
          <button
            type="button"
            class="w-full p-4 click-blur bg-white dark:bg-muted-1000 rounded-xl border border-muted-200 dark:border-muted-800"
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
              class="absolute top-20 left-0 w-full p-2 rounded-xl border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-1000 shadow-xl shadow-muted-400/10 dark:shadow-muted-800/10"
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

      <!--Buttons-->
      <div class="flex gap-4">
        <BaseButton
          v-if="currentStep > 0"
          :to="loading ? undefined : getPrevStep()?.to"
          :disabled="!getPrevStep()"
          class="!h-12 w-full"
        >
          <span>Previous</span>
        </BaseButton>
        <BaseButton
          :to="getNextStep()?.to"
          :disabled="!getNextStep()"
          color="primary"
          class="!h-12 w-full"
        >
          <span>Continue</span>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
