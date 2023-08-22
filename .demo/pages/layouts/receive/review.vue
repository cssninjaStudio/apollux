<script setup lang="ts">
import type { PaymentReceive, StepData } from '../../../types'

definePageMeta({
  title: 'Receive - Step 3',
  layout: 'empty',
  preview: {
    title: 'Receive - Step 3',
    description: 'For receiving payments',
    categories: ['layouts', 'lists'],
    src: '/img/screens/wizards-receive-3.png',
    srcDark: '/img/screens/wizards-receive-3-dark.png',
    order: 17,
  },
})

const {
  data: request,
  currentStep,
  loading,
  complete,
  getNextStep,
  getPrevStep,
  steps,
} = useMultiStepForm<PaymentReceive, StepData>()
useHead({
  title: 'Review',
})
</script>

<template>
  <div class="w-full">
    <!--Review section-->
    <div v-if="!complete">
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

      <div class="w-full max-w-md space-y-6">
        <!--Numbers-->
        <div class="flex items-end justify-between pb-4">
          <!--Amount-->
          <div class="flex-1">
            <BaseParagraph size="xs" class="text-muted-400 mb-1">
              Transfer amount
            </BaseParagraph>
            <BaseHeading
              as="h3"
              size="3xl"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              ${{ request.amount.toFixed(2) }}
            </BaseHeading>
          </div>
          <!--Payment method-->
          <div class="flex-1 text-end">
            <BaseParagraph size="xs" class="text-muted-400 mb-1">
              Payment method
            </BaseParagraph>
            <BaseHeading
              as="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 h-10 flex items-center justify-end"
            >
              {{ request.method }}
            </BaseHeading>
          </div>
        </div>

        <!--Transfer from-->
        <div v-if="request.method === 'Bank transfer'">
          <BaseParagraph size="xs" class="text-muted-400 mb-1">
            Transfer to
          </BaseParagraph>
          <BaseCard shape="curved" class="p-4 bg-white dark:!bg-muted-950">
            <div class="w-full flex items-center gap-3 text-start">
              <Icon
                name="clarity:bank-outline-badged"
                class="w-8 h-8 text-muted-500 dark:text-muted-400"
              />
              <div>
                <BaseText
                  size="sm"
                  class="block text-muted-800 dark:text-muted-200"
                >
                  External bank account
                </BaseText>
                <BaseText
                  size="xs"
                  class="block text-muted-500 dark:text-muted-400"
                >
                  $25,267.42
                </BaseText>
              </div>
            </div>
          </BaseCard>
        </div>

        <!--Send to-->
        <div v-else-if="request.method === 'Payment link'">
          <BaseParagraph size="xs" class="text-muted-400 mb-1">
            Send to
          </BaseParagraph>

          <div class="relative">
            <BaseInput
              v-model="request.email"
              icon="lucide:mail"
              placeholder="Ex: johndoe@gmail.com"
              :classes="{
                input: '!ps-12 !py-2 !h-12',
                icon: '!h-12 !w-12',
              }"
              readonly
            />
          </div>
        </div>

        <!--Account-->
        <div>
          <BaseParagraph size="xs" class="text-muted-400 mb-1">
            Transfer from
          </BaseParagraph>
          <div
            class="w-full p-4 bg-white dark:bg-muted-950 rounded-xl border border-muted-200 dark:border-muted-800"
          >
            <div class="w-full flex items-center gap-3 text-start">
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
              <div class="ms-auto pe-4">
                <BaseText
                  size="xs"
                  class="block text-muted-800 dark:text-muted-200"
                >
                  Payment Method
                </BaseText>
                <BaseText
                  v-if="request.method"
                  size="xs"
                  class="block text-muted-500 dark:text-muted-400"
                >
                  {{ request.method }}
                </BaseText>
              </div>
            </div>
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
            type="submit"
            color="primary"
            class="!h-12 w-full"
            :loading="loading"
            :disabled="loading"
          >
            <span>Send Request</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <!--Success section-->
    <div v-else>
      <div class="w-full max-w-md mx-auto text-center py-6">
        <div class="text-primary-500 mx-auto w-14 h-14 mb-4">
          <ApolluxCheckAnimated color="primary" size="lg" />
        </div>
        <BaseHeading
          as="h2"
          weight="medium"
          size="2xl"
          lead="tight"
          class="text-muted-800 dark:text-white mb-2"
        >
          Payment request sent!
        </BaseHeading>
        <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-5">
          Amazing! You've properly filled in your payment request. We'll let you
          know as soon as the funds are on their way.
        </BaseParagraph>
        <div class="flex justify-center">
          <BaseButton
            to="/dashboards"
            color="primary"
            shape="full"
            class="w-48"
          >
            Back to Dahboard
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
