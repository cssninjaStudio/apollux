<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'

definePageMeta({
  title: 'New card',
  layout: 'empty',
  preview: {
    title: 'New card',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const complete = ref(false)
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

const selectedAccount = ref(accounts.value[0])

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

// This is the object that will contain the validation messages
const VALIDATION_TEXT = {
  DAILY_SPEND_REQUIRED: 'Define a daily spend limit',
  DAILY_WITHDRAW_REQUIRED: 'Define a daily withdrawal limit',
  DAILY_LIMIT: 'You must allow at least $50 to spend daily',
}

// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    card: z.object({
      owner: z
        .union([
          z.literal('Kendra Wilson'),
          z.literal('Kaleb Wilson'),
          z.literal('Amber Wilson'),
          z.literal('Jennifer Wilson'),
          z.literal('John Baxter'),
        ])
        .nullable(),
      account: z
        .object({
          id: z.number(),
          number: z.string(),
          type: z.string(),
          label: z.string(),
          balance: z.number(),
        })
        .nullable(),
      brand: z.union([z.literal('mastercard'), z.literal('visa')]).nullable(),
      type: z.union([z.literal('physical'), z.literal('virtual')]).nullable(),
      dailySpend: z.number().nullable(),
      dailyWithdraw: z.number().nullable(),
    }),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (data.card.dailySpend === null || data.card.dailySpend <= 50) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.DAILY_LIMIT,
        path: ['card.dailySpend'],
      })
    }
    if (data.card.dailyWithdraw === null || data.card.dailyWithdraw <= 50) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.DAILY_LIMIT,
        path: ['card.dailyWithdraw'],
      })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  card: {
    owner: 'Kendra Wilson',
    account: {
      id: 1,
      number: '1487 3256 54122 4897',
      type: 'checking',
      label: '**** 4897',
      balance: 9543.12,
    },
    brand: 'mastercard',
    type: 'physical',
    dailySpend: null,
    dailyWithdraw: null,
  },
}))

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const success = ref(false)
const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

// Ask the user for confirmation before leaving the page if the form has unsaved changes
onBeforeRouteLeave(() => {
  if (meta.value.dirty && !success.value) {
    return confirm('You have unsaved changes. Are you sure you want to leave?')
  }
})

const toaster = useToaster()

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false

    // here you have access to the validated form values
    console.log('card-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true
      await new Promise((resolve, reject) => {
        if (values.card.dailySpend && values.card.dailySpend > 5000) {
          // simulate a backend error
          setTimeout(
            () => reject(new Error('Fake backend validation error')),
            2000,
          )
        }
        setTimeout(resolve, 4000)
      })

      toaster.clearAll()
      toaster.show({
        title: 'Success',
        message: `Card has been created!`,
        color: 'success',
        icon: 'ph:check',
        closable: true,
      })
    } catch (error: any) {
      // this will set the error on the form
      if (error.message === 'Fake backend validation error') {
        setFieldError('card.dailySpend', 'The maximum allowed limit is $5000')

        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

        toaster.clearAll()
        toaster.show({
          title: 'Oops!',
          message: 'Please review the errors in the form',
          color: 'danger',
          icon: 'lucide:alert-triangle',
          closable: true,
        })
      }
      return
    }

    // resetForm()

    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    success.value = true
  },
  (error) => {
    // this callback is optional and called only if the form has errors
    success.value = false

    // here you have access to the error
    console.log('card-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-muted-900">
    <DemoNavigationTop title="New Card" closeTo="/layouts/cards" />

    <div class="w-full pt-32 pb-20">
      <div class="w-full max-w-6xl mx-auto px-4">
        <div v-if="!success">
          <form
            action=""
            method="POST"
            class="w-full grid md:grid-cols-12 gap-8 ltablet:gap-16 lg:gap-16"
            @submit.prevent="onSubmit"
          >
            <!--Content column-->
            <div class="md:col-span-7 lg:col-span-7">
              <div class="w-full max-w-md">
                <div class="pb border-b border-muted-200 dark:border-muted-800">
                  <h2
                    class="font-heading text-2xl md:text-3xl text-muted-800 dark:text-white mb-8"
                  >
                    New Credit Card
                  </h2>
                </div>

                <div v-if="fieldsWithErrors" class="mt-8">
                  <BaseMessage type="primary" @close="() => setErrors({})">
                    This form has {{ fieldsWithErrors }} errors, please check
                    them before submitting
                  </BaseMessage>
                </div>

                <div
                  class="space-y-8 divide-y divide-muted-200 dark:divide-muted-800"
                >
                  <!--Field-->
                  <div class="pt-8">
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="mb-1 text-muted-600 dark:text-muted-400"
                    >
                      Associated account
                    </BaseHeading>
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
                              {{ selectedAccount.type }}
                              {{ selectedAccount.label }}
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
                  <!--Field-->
                  <div class="pt-8">
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="mb-1 text-muted-600 dark:text-muted-400"
                    >
                      Who is this card for?
                    </BaseHeading>
                    <!--Select-->
                    <div class="relative">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="card.owner"
                      >
                        <BaseSelect
                          :model-value="field.value"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          @update:model-value="handleChange"
                          @blur="handleBlur"
                        >
                          <option value="">Select Someone</option>
                          <option value="Kendra Wilson">Kendra Wilson</option>
                          <option value="Kaleb Wilson">Kaleb Wilson</option>
                          <option value="Amber Wilson">Amber Wilson</option>
                          <option value="Jennifer Wilson">
                            Jennifer Wilson
                          </option>
                          <option value="John Baxter">John Baxter</option>
                        </BaseSelect>
                      </Field>
                    </div>
                  </div>
                  <!--Field-->
                  <div class="pt-8">
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="mb-1 text-muted-600 dark:text-muted-400"
                    >
                      What kind of card do you need?
                    </BaseHeading>
                    <!--Select-->
                    <div class="relative">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="card.brand"
                      >
                        <BaseSelect
                          :model-value="field.value"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          @update:model-value="handleChange"
                          @blur="handleBlur"
                        >
                          <option value="visa">Visa</option>
                          <option value="mastercard">Mastercard</option>
                        </BaseSelect>
                      </Field>
                    </div>
                  </div>
                  <!--Field-->
                  <div class="pt-8">
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="mb-1 text-muted-600 dark:text-muted-400"
                    >
                      What type of card is it?
                    </BaseHeading>
                    <!--Select-->
                    <div class="relative group">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="card.type"
                      >
                        <BaseSelect
                          :model-value="field.value"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          @update:model-value="handleChange"
                          @blur="handleBlur"
                        >
                          <option value="physical">Physical</option>
                          <option value="virtual">Virtual</option>
                        </BaseSelect>
                      </Field>
                    </div>
                  </div>
                  <!--Field-->
                  <div class="pt-8">
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="mb-1 text-muted-600 dark:text-muted-400"
                    >
                      What's the daily spend limit?
                    </BaseHeading>
                    <!--Select-->
                    <div class="relative">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="card.dailySpend"
                      >
                        <BaseInput
                          :model-value="field.value"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          @update:model-value="handleChange"
                          @blur="handleBlur"
                          type="number"
                          icon="lucide:dollar-sign"
                          placeholder="0.00"
                        />
                      </Field>
                    </div>
                  </div>
                  <!--Field-->
                  <div class="pt-8">
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="mb-1 text-muted-600 dark:text-muted-400"
                    >
                      What's the daily withdrawal limit?
                    </BaseHeading>
                    <!--Select-->
                    <div class="relative">
                      <Field
                        v-slot="{
                          field,
                          errorMessage,
                          handleChange,
                          handleBlur,
                        }"
                        name="card.dailyWithdraw"
                      >
                        <BaseInput
                          :model-value="field.value"
                          :error="errorMessage"
                          :disabled="isSubmitting"
                          @update:model-value="handleChange"
                          @blur="handleBlur"
                          type="number"
                          icon="lucide:dollar-sign"
                          placeholder="0.00"
                        />
                      </Field>
                    </div>
                  </div>
                  <!--Buttons-->
                  <div class="flex flex-col-reverse sm:flex-row gap-4 py-8">
                    <div
                      class="h-12 w-full inline-flex justify-center items-center"
                    >
                      <BaseParagraph
                        size="sm"
                        class="text-muted-600 dark:text-muted-400"
                      >
                        The card will be activated within 1-2 business days.
                      </BaseParagraph>
                    </div>
                    <BaseButton
                      type="submit"
                      color="primary"
                      class="!h-12 w-full"
                      :loading="isSubmitting"
                    >
                      Issue New Card
                    </BaseButton>
                  </div>
                </div>
              </div>
            </div>

            <!--Card column-->
            <div class="relative md:col-span-5 lg:col-span-5">
              <!--Tabs-->
              <div class="sticky top-20">
                <DemoCreditCardReal
                  status="active"
                  :name="values.card?.owner"
                  :number="values.card?.account?.number"
                  :brand="values.card?.brand"
                />
              </div>
            </div>
          </form>
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
              Credit card created!
            </BaseHeading>
            <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-5">
              Amazing! You've properly created your new card. We'll let you know
              as soon as it has been sent to you.
            </BaseParagraph>
            <div class="flex justify-center">
              <BaseButton
                to="/layouts/cards"
                color="primary"
                shape="full"
                class="w-48"
              >
                Back to Cards
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
