<script setup lang="ts">
import type { PaymentSend, StepData } from '../../types'

definePageMeta({
  title: 'Send',
  layout: 'empty',
  preview: {
    title: 'Send',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const initialState = ref<PaymentSend>({
  recipient: {
    name: '',
    picture: '',
    address: {
      lineOne: '',
      lineTwo: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'United States',
    },
  },
  amount: 0,
  account: {
    id: 1,
    type: 'Checking',
    label: '**** 4897',
    number: '1487 3256 54122 4897',
    balance: 9543.12,
  },
  routingNumber: '',
  prefix: '',
  method: 'ACH',
})

const wizardSteps = [
  {
    to: '/layouts/send',
    meta: {
      name: 'Recipient',
      title: 'Who are you paying?',
      subtitle:
        'Enter the name of the person or the company your are sending money to',
    } satisfies StepData,
  },
  {
    to: '/layouts/send/method',
    meta: {
      name: 'Payment method',
      title: 'How do you want to pay?',
      subtitle:
        'Select on of the available payment methods to proceed to payment',
    } satisfies StepData,
  },
  {
    to: '/layouts/send/recipient',
    meta: {
      name: 'Recipient details',
      title: 'Recipient details',
      subtitle:
        'Enter the recipient routing details so money can be sent to their account',
    } satisfies StepData,
  },
  {
    to: '/layouts/send/address',
    meta: {
      name: 'Recipient address',
      title: 'Recipient address',
      subtitle:
        'Your recipient needs to have a legal address before you can send them money',
    } satisfies StepData,
  },
  {
    to: '/layouts/send/amount',
    meta: {
      name: 'Amount',
      title: 'Set an amount to transfer',
      subtitle:
        'Enter an amount to transfer. This amount cannot exceed the selected account balance',
    } satisfies StepData,
  },
  {
    to: '/layouts/send/review',
    meta: {
      name: 'Review',
      title: 'Review and send',
      subtitle:
        'Make sure everything in the process is correct before sending the money',
    } satisfies StepData,
  },
]

const toaster = useToaster()

const { handleSubmit, currentStep, progress, complete } = createMultiStepForm<
  PaymentSend,
  StepData
>({
  initialState: initialState,
  steps: wizardSteps,
  onSubmit: async (state, ctx) => {
    console.log('multi-step-submit', state)

    if (!state.recipient.name) {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Enter a recipient name')
    }
    if (state.routingNumber === '') {
      ctx.goToStep(ctx.getStep(2))
      throw new Error('Please provide a routing number')
    }
    if (state.recipient.address.lineOne === '') {
      ctx.goToStep(ctx.getStep(3))
      throw new Error('Please provide an address')
    }
    if (state.recipient.address.city === '') {
      ctx.goToStep(ctx.getStep(3))
      throw new Error('This address requires a city')
    }
    if (state.recipient.address.postalCode === '') {
      ctx.goToStep(ctx.getStep(3))
      throw new Error('This address requires a postal code')
    }
    if (state.recipient.address.state === '') {
      ctx.goToStep(ctx.getStep(3))
      throw new Error('This address requires a state')
    }
    if (state.amount === 0) {
      ctx.goToStep(ctx.getStep(4))
      throw new Error('Please enter an amount')
    }

    // Simulate async request
    await new Promise((resolve) => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Transfer request sent!`,
      color: 'success',
      icon: 'ph:check',
      closable: true,
    })
  },
  onError: (error) => {
    console.log('multi-step-error', error)

    toaster.clearAll()
    toaster.show({
      title: 'Error',
      message: error.message,
      color: 'danger',
      icon: 'lucide:alert-triangle',
      closable: true,
    })
  },
})

useHead({
  titleTemplate: (title) => `Send money - Step ${currentStep.value + 1}`,
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-muted-900">
    <DemoNavigationTop title="Send Money" closeTo="/layouts/payments" />

    <div class="w-full pt-32 pb-20">
      <div class="w-full max-w-6xl mx-auto px-4">
        <div class="w-full grid md:grid-cols-12 gap-10">
          <!--Stepper column-->
          <div :class="complete ? 'hidden' : 'md:col-span-3 lg:col-span-4'">
            <!--Stepper-->
            <div
              class="flex flex-col md:flex-row gap-4 xs:w-full xs:max-w-xs xs:mx-auto"
            >
              <div
                class="relative flex md:flex-col xs:max-w-xs xs:mx-auto justify-between gap-7"
              >
                <!--Progress-->
                <div
                  class="absolute xs:top-1.5 top-2 xs:inset-x-0 start-2 md:-translate-x-1/2 mx-auto w-[calc(100%_-_1rem)] h-1 md:h-[calc(100%_-_1rem)] md:w-1 bg-muted-200 dark:bg-muted-700 z-0"
                ></div>
                <!--Vertical progress-->
                <div
                  class="hidden md:block absolute top-0 start-2 -translate-x-1/2 mx-auto w-0.5 rounded-full bg-primary-500 z-10 transition-all duration-300"
                  :style="`height: ${progress}%;`"
                ></div>
                <!--Horizontal progress (mobile)-->
                <div
                  class="md:hidden absolute top-[7px] start-1.5 h-0.5 rounded-full bg-primary-500 z-10 transition-all duration-300"
                  :style="`width: calc(${progress}% - 0.5rem);`"
                ></div>
                <!--Nodes-->
                <div
                  v-for="(step, index) in wizardSteps"
                  :key="index"
                  class="relative z-20 w-4 h-4 flex items-center justify-center rounded-full bg-muted-200 dark:bg-muted-700"
                >
                  <span
                    class="block w-2 h-2 rounded-full bg-primary-500 transition-transform duration-300"
                    :class="currentStep >= index ? 'scale-1' : 'scale-0'"
                  ></span>
                </div>
              </div>
              <div
                class="relative flex md:flex-col justify-center md:justify-between gap-7"
              >
                <div
                  v-for="(step, index) in wizardSteps"
                  :key="index"
                  class="h-4 leading-none"
                  :class="currentStep === index ? '' : 'xs:hidden'"
                >
                  <span
                    class="block font-heading text-xs"
                    :class="
                      currentStep === index
                        ? 'text-muted-800 dark:text-muted-100'
                        : 'text-muted-400 dark:text-muted-500'
                    "
                  >
                    {{ step.meta.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!--Steps column-->
          <div
            :class="complete ? 'col-span-12' : 'md:col-span-9 lg:col-span-8'"
          >
            <form
              action=""
              method="POST"
              @submit.prevent="handleSubmit"
              novalidate
            >
              <RouterView />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
