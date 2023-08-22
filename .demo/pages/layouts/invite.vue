<script setup lang="ts">
import type { Invite, StepData } from '../../types'

definePageMeta({
  title: 'Invite',
  layout: 'empty',
  preview: {
    title: 'Invite',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const initialState = ref<Invite>({
  firstName: '',
  lastName: '',
  email: '',
  role: 'admin',
})

const wizardSteps = [
  {
    to: '/layouts/invite',
    meta: {
      name: 'Email invite',
      title: 'Who do you want to invite?',
      subtitle:
        'Enter the name of the person that you want to invite to your organization',
    } satisfies StepData,
  },
  {
    to: '/layouts/invite/permissions',
    meta: {
      name: 'Permissions',
      title: 'Assign them a role',
      subtitle:
        "A team member's role determines what they can see and do on your Apollux organization account",
    } satisfies StepData,
  },
  {
    to: '/layouts/invite/review',
    meta: {
      name: 'Review',
      title: 'One last look',
      subtitle:
        'Make sure everything in the process is correct before sending the invite',
    } satisfies StepData,
  },
]

const toaster = useToaster()

const { handleSubmit, currentStep, progress, complete } = createMultiStepForm<
  Invite,
  StepData
>({
  initialState: initialState,
  steps: wizardSteps,
  onSubmit: async (state, ctx) => {
    console.log('multi-step-submit', state)

    if (state.firstName === '') {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please enter a first name')
    }
    if (state.lastName === '') {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please enter a first name')
    }
    if (state.email === '') {
      ctx.goToStep(ctx.getStep(0))
      throw new Error('Please enter an email address')
    }
    if (state.role === '') {
      ctx.goToStep(ctx.getStep(1))
      throw new Error('Please select a role')
    }

    // Simulate async request
    await new Promise((resolve) => setTimeout(resolve, 4000))

    toaster.clearAll()
    toaster.show({
      title: 'Success',
      message: `Invitation has been sent!`,
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
  titleTemplate: (title) => `Invite - Step ${currentStep.value + 1}`,
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-muted-900">
    <DemoNavigationTop title="Invite" closeTo="/layouts/members" />

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
