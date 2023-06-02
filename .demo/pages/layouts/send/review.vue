<script setup lang="ts">
import type { PaymentSend, StepData } from '../../../types'

definePageMeta({
  title: 'Send - Step 6',
  layout: 'empty',
  preview: {
    title: 'Send - Step 6',
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
  complete,
  getNextStep,
  getPrevStep,
  steps,
} = useMultiStepForm<PaymentSend, StepData>()
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
          <!--Amount-->
          <div class="flex-1 text-right">
            <BaseParagraph size="xs" class="text-muted-400 mb-1">
              Routing number
            </BaseParagraph>
            <BaseHeading
              v-if="request.routingNumber"
              as="h3"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100 h-10 flex items-center justify-end"
            >
              <span v-if="request.prefix">{{ request.prefix }}-</span>
              <span>{{ request.routingNumber }}</span>
            </BaseHeading>
            <BaseText
              v-else
              size="sm"
              class="text-muted-500 dark:text-muted-400 h-10 flex items-center justify-end"
            >
              No number provided
            </BaseText>
          </div>
        </div>

        <!--Recipient-->
        <div>
          <p class="font-heading text-xs text-muted-400 mb-1">Recipient</p>

          <div class="w-full flex gap-6 py-4">
            <div
              class="w-12 h-12 flex items-center justify-center rounded-full bg-muted-200"
            >
              <Icon name="ph:user-duotone" class="w-6 h-6 text-muted-400" />
            </div>
            <div>
              <BaseHeading
                v-if="request.recipient.name !== ''"
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ request.recipient.name }}
              </BaseHeading>
              <BaseHeading
                v-else
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                N/A
              </BaseHeading>
              <BaseParagraph
                v-if="request.recipient.address.lineOne !== ''"
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                {{ request.recipient.address.lineOne }}
              </BaseParagraph>
              <BaseParagraph
                v-else
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                No address provided yet
              </BaseParagraph>
              <BaseParagraph
                v-if="request.recipient.address.lineTwo !== ''"
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                {{ request.recipient.address.lineTwo }}
              </BaseParagraph>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                <BaseText v-if="request.recipient.address.city !== ''" size="xs"
                  >{{ request.recipient.address.city }},</BaseText
                >
                <BaseText
                  v-if="request.recipient.address.postalCode !== ''"
                  size="xs"
                  >{{ request.recipient.address.postalCode }}</BaseText
                >
              </BaseParagraph>
              <BaseParagraph
                v-if="request.recipient.address.lineOne !== ''"
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                <BaseText
                  v-if="request.recipient.address.state !== ''"
                  size="xs"
                  >{{ request.recipient.address.state }},</BaseText
                >
                <BaseText
                  v-if="request.recipient.address.country !== ''"
                  size="xs"
                  >{{ request.recipient.address.country }}</BaseText
                >
              </BaseParagraph>
            </div>
          </div>
        </div>

        <!--Account-->
        <div>
          <p class="font-heading text-xs text-muted-400 mb-1">Transfer from</p>
          <div
            class="w-full p-4 bg-white dark:bg-muted-1000 rounded-xl border border-muted-200 dark:border-muted-800"
          >
            <div class="w-full flex items-center gap-3 text-left">
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
              <div class="ml-auto pr-4">
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
            <span>Send Money</span>
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
