<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  title: 'Send - Step 1',
  layout: 'empty',
  preview: {
    title: 'Send - Step 1',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const {
  data: request,
  totalSteps,
  currentStep,
  loading,
  complete,
  getNextStep,
  getPrevStep,
  steps,
} = useMultiStepForm<PaymentSend, StepData>()
useHead({
  title: 'Recipient',
})
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

    <div class="relative max-w-md space-y-3">
      <BaseInput
        icon="ph:user-duotone"
        v-model="request.recipient.name"
        placeholder="Ex: John Doe"
        :classes="{
          input: '!p-4 !ps-12 !h-12',
          icon: '!h-12 !w-12',
        }"
      />

      <div class="flex gap-2">
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
