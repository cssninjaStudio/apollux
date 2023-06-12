<script setup lang="ts">
import type { Invite, StepData } from '../../../types'

definePageMeta({
  title: 'Invite - Step 2',
  layout: 'empty',
  preview: {
    title: 'Invite - Step 2',
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
} = useMultiStepForm<Invite, StepData>()
useHead({
  title: 'Payment method',
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

    <div class="w-full max-w-md">
      <div class="w-full space-y-4">
        <!--Radio groups-->
        <BaseRadioHeadless
          v-model="request.role"
          value="admin"
          name="role_permissions"
        >
          <div
            class="absolute top-1/2 -translate-y-1/2 left-6 w-6 h-6 rounded-full flex items-center justify-center peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-800 dark:text-muted-800 peer-checked:text-primary-500"
          >
            <div
              class="w-3 h-3 rounded-full bg-current transition-colors duration-300"
            ></div>
          </div>
          <div
            class="group flex items-center py-4 px-6 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg cursor-pointer peer-checked:shadow-xl peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static transition-shadow duration-300"
          >
            <div
              class="flex items-center justify-center w-5 h-5 border border-muted-200 rounded-full"
            ></div>
            <div class="flex flex-col ms-6">
              <BaseText
                weight="medium"
                class="block text-muted-800 dark:text-muted-100"
              >
                Admin
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Has full account access to move money, view balances, add and
                remove team members, and manage security settings.
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.role"
          value="bookkeeper"
          name="role_permissions"
        >
          <div
            class="absolute top-1/2 -translate-y-1/2 left-6 w-6 h-6 rounded-full flex items-center justify-center peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-800 dark:text-muted-800 peer-checked:text-primary-500"
          >
            <div
              class="w-3 h-3 rounded-full bg-current transition-colors duration-300"
            ></div>
          </div>
          <div
            class="group flex items-center py-4 px-6 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg cursor-pointer peer-checked:shadow-xl peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static transition-shadow duration-300"
          >
            <div
              class="flex items-center justify-center w-5 h-5 border border-muted-200 rounded-full"
            ></div>
            <div class="flex flex-col ms-6">
              <BaseText
                weight="medium"
                class="block text-muted-800 dark:text-muted-100"
              >
                Bookkeeper
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Can view accounts, download statements, and add transaction
                notes. Cannot move money or use cards.
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.role"
          value="cardonly"
          name="role_permissions"
        >
          <div
            class="absolute top-1/2 -translate-y-1/2 left-6 w-6 h-6 rounded-full flex items-center justify-center peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-800 dark:text-muted-800 peer-checked:text-primary-500"
          >
            <div
              class="w-3 h-3 rounded-full bg-current transition-colors duration-300"
            ></div>
          </div>
          <div
            class="group flex items-center py-4 px-6 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg cursor-pointer peer-checked:shadow-xl peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static transition-shadow duration-300"
          >
            <div
              class="flex items-center justify-center w-5 h-5 border border-muted-200 rounded-full"
            ></div>
            <div class="flex flex-col ms-6">
              <BaseText
                weight="medium"
                class="block text-muted-800 dark:text-muted-100"
              >
                Card Only
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Receives a card with custom spending limits, and can only see
                their own transactions when logged in.
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
        <BaseRadioHeadless
          v-model="request.role"
          value="custom"
          name="role_permissions"
        >
          <div
            class="absolute top-1/2 -translate-y-1/2 left-6 w-6 h-6 rounded-full flex items-center justify-center peer-checked:child:scale-1 peer-not-checked:child:scale-0 bg-muted-100 text-muted-100 dark:bg-muted-800 dark:text-muted-800 peer-checked:text-primary-500"
          >
            <div
              class="w-3 h-3 rounded-full bg-current transition-colors duration-300"
            ></div>
          </div>
          <div
            class="group flex items-center py-4 px-6 bg-white dark:bg-muted-950 border border-muted-200 dark:border-muted-800 rounded-lg cursor-pointer peer-checked:shadow-xl peer-checked:shadow-muted-400/10 dark:peer-checked:shadow-muted-800/10 group-focus-visible:tw-accessibility-static transition-shadow duration-300"
          >
            <div
              class="flex items-center justify-center w-5 h-5 border border-muted-200 rounded-full"
            ></div>
            <div class="flex flex-col ms-6">
              <BaseText
                weight="medium"
                class="block text-muted-800 dark:text-muted-100"
              >
                Custom
              </BaseText>
              <BaseParagraph
                size="xs"
                class="text-muted-500 dark:text-muted-400"
              >
                Can view accounts and move money (with or without approval up to
                a limit that you set as an admin).
              </BaseParagraph>
            </div>
          </div>
        </BaseRadioHeadless>
      </div>

      <div class="flex gap-4 mt-4">
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
