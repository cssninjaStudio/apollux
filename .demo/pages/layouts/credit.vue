<script setup lang="ts">
definePageMeta({
  title: 'Credit',
  preview: {
    title: 'Credit',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const showFaq = ref(false)
const step = ref(1)
const nextStep = () => {
  step.value += 1
}
const prevStep = () => {
  step.value -= 1
}

const fullName = ref('')
const duration = ref('')
const amount = ref('')
</script>

<template>
  <div class="py-12">
    <div class="flex items-center min-h-[450px]">
      <!--Step 1-->
      <div
        v-if="step === 1"
        class="w-full flex flex-col md:flex-row items-center"
      >
        <!--Column-->
        <div v-if="!showFaq" class="w-full md:w-1/2">
          <div class="max-w-md space-y-3 p-4">
            <BaseHeading
              as="h2"
              weight="bold"
              size="3xl"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              Wondering on how to fund your business? Open a credit request.
            </BaseHeading>
            <BaseParagraph class="text-muted-500 dark:text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              optime, secundum naturam affectum esse possit.
            </BaseParagraph>
            <div class="flex gap-2">
              <BaseButton
                shape="full"
                color="primary"
                class="w-32"
                @click="nextStep()"
                >Continue</BaseButton
              >
              <BaseButton
                shape="full"
                color="muted"
                class="w-32"
                @click="showFaq = !showFaq"
                >Learn More</BaseButton
              >
            </div>
          </div>
        </div>
        <!--Column-->
        <div v-if="!showFaq" class="w-full md:w-1/2">
          <div class="max-w-sm mx-auto text-primary-500">
            <VectorIllustrationManWondering />
          </div>
        </div>
        <!--Faq-->
        <div v-else class="w-full">
          <BaseHeading
            as="h3"
            weight="semibold"
            size="4xl"
            lead="tight"
            class="text-muted-800 dark:text-white mb-10"
          >
            FAQ
          </BaseHeading>
          <!--Grid-->
          <div class="grid md:grid-cols-3 gap-x-3 gap-y-6">
            <!--Grid item-->
            <div class="space-y-2">
              <BaseHeading
                as="h4"
                weight="semibold"
                size="lg"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                Are there any fees?
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum
                optime, deinde etiam cum mediocri amico. Mihi, inquam, qui te id
                ipsum rogavi.
              </BaseParagraph>
            </div>
            <!--Grid item-->
            <div class="space-y-2">
              <BaseHeading
                as="h4"
                weight="semibold"
                size="lg"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                What are the durations?
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum
                optime, deinde etiam cum mediocri amico. Mihi, inquam, qui te id
                ipsum rogavi? An haec ab eo non dicuntur? Si qua in iis
                corrigere voluit, deteriora fecit. Duo Reges: constructio
                interrete.
              </BaseParagraph>
            </div>
            <!--Grid item-->
            <div class="space-y-2">
              <BaseHeading
                as="h4"
                weight="semibold"
                size="lg"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                What are the conditions?
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum
                optime, deinde etiam cum mediocri amico. Mihi, inquam, qui te id
                ipsum rogavi.
              </BaseParagraph>
            </div>
            <!--Grid item-->
            <div class="space-y-2">
              <BaseHeading
                as="h4"
                weight="semibold"
                size="lg"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                How do I sign up?
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum
                optime, deinde etiam cum mediocri amico. Mihi, inquam, qui te id
                ipsum rogavi.
              </BaseParagraph>
            </div>
            <!--Grid item-->
            <div class="space-y-2">
              <BaseHeading
                as="h4"
                weight="semibold"
                size="lg"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                What's the credit rate?
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum
                optime, deinde etiam cum mediocri amico. Mihi, inquam, qui te id
                ipsum rogavi.
              </BaseParagraph>
            </div>
            <!--Grid item-->
            <div class="space-y-2">
              <BaseHeading
                as="h4"
                weight="semibold"
                size="lg"
                lead="tight"
                class="text-muted-800 dark:text-white"
              >
                Can I cancel it anytime?
              </BaseHeading>
              <BaseParagraph size="sm" class="text-muted-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum
                optime, deinde etiam cum mediocri amico. Mihi, inquam, qui te id
                ipsum rogavi.
              </BaseParagraph>
            </div>
          </div>
          <!--Back button-->
          <div class="mt-10">
            <BaseButton
              shape="full"
              color="muted"
              class="w-32"
              @click="showFaq = !showFaq"
              >Go Back</BaseButton
            >
          </div>
        </div>
      </div>

      <!--Step 2-->
      <div
        v-else-if="step === 2"
        class="w-full flex flex-col md:flex-row items-center"
      >
        <!--Column-->
        <div class="w-full md:w-1/2">
          <div class="max-w-md space-y-3 p-4">
            <BaseHeading
              as="h2"
              weight="bold"
              size="3xl"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              Fill in the form.
            </BaseHeading>
            <BaseParagraph class="text-muted-500 dark:text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              optime, secundum naturam affectum esse possit.
            </BaseParagraph>
            <!--Form-->
            <form class="space-y-4 pb-6">
              <!--Field-->
              <BaseInput
                v-model="fullName"
                icon="lucide:user"
                label="Full Name"
                placeholder="Your complete name"
                class="w-full"
              />
              <!--Field group-->
              <div class="grid md:grid-cols-2 gap-4">
                <!--Field-->
                <div class="relative">
                  <BaseSelect v-model="amount" label="Requested amount">
                    <option value="">Select a range</option>
                    <option value="5k-20k">From $5k to $20k</option>
                    <option value="20k-50k">From $20k to $50k</option>
                    <option value="50k-100k">From $50k to $100k</option>
                    <option value="100k-500k">From $100k to $500k</option>
                    <option value="500k-1M">From $500k to $1M</option>
                    <option value="1M">Starting from $1M</option>
                  </BaseSelect>
                </div>
                <!--Field-->
                <div class="relative">
                  <BaseSelect v-model="amount" label="Requested duration">
                    <option value="">Select a duration</option>
                    <option value="5">5 years</option>
                    <option value="10">10 years</option>
                    <option value="15">15 years</option>
                    <option value="20">20 years</option>
                    <option value="25">25 years</option>
                  </BaseSelect>
                </div>
              </div>
            </form>

            <!--Buttons-->
            <div class="flex gap-2">
              <BaseButton
                shape="full"
                color="muted"
                class="w-32"
                @click="prevStep()"
                >Previous</BaseButton
              >
              <BaseButton
                shape="full"
                color="primary"
                class="w-32"
                @click="nextStep()"
                >Continue</BaseButton
              >
            </div>
          </div>
        </div>
        <!--Column-->
        <div class="w-full md:w-1/2">
          <div class="max-w-sm mx-auto text-primary-500">
            <VectorIllustrationTransaction />
          </div>
        </div>
      </div>

      <!--Step 3-->
      <div
        v-else-if="step === 3"
        class="w-full flex flex-col md:flex-row items-center"
      >
        <!--Column-->
        <div class="w-full md:w-1/2">
          <div class="max-w-md space-y-3 p-4">
            <BaseHeading
              as="h2"
              weight="bold"
              size="3xl"
              lead="tight"
              class="text-muted-800 dark:text-white"
            >
              Legal downloads.
            </BaseHeading>
            <BaseParagraph class="text-muted-500 dark:text-muted-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              optime, secundum naturam affectum esse possit.
            </BaseParagraph>
            <!--Download links-->
            <div class="py-5">
              <ul class="space-y-1">
                <!--Links-->
                <li>
                  <NuxtLink
                    to="#"
                    class="flex gap-4 px-4 py-3 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
                  >
                    <Icon
                      name="ph:bank-duotone"
                      class="w-7 h-7 text-primary-500"
                    />
                    <div>
                      <BaseParagraph
                        weight="medium"
                        size="sm"
                        lead="tight"
                        class="mb-1 text-muted-600 dark:text-muted-300"
                      >
                        Terms Of Service
                      </BaseParagraph>
                      <BaseParagraph
                        weight="medium"
                        size="xs"
                        class="text-muted-400"
                      >
                        Read this document carefully
                      </BaseParagraph>
                    </div>
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="#"
                    class="flex gap-4 px-4 py-3 rounded-lg hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
                  >
                    <Icon
                      name="ph:coins-duotone"
                      class="w-7 h-7 text-primary-500"
                    />
                    <div>
                      <BaseParagraph
                        weight="medium"
                        size="sm"
                        lead="tight"
                        class="mb-1 text-muted-600 dark:text-muted-300"
                      >
                        Credit Contract
                      </BaseParagraph>
                      <BaseParagraph
                        weight="medium"
                        size="xs"
                        class="text-muted-400"
                      >
                        Credit contract document sample
                      </BaseParagraph>
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>

            <!--Buttons-->
            <div class="flex gap-2">
              <BaseButton
                shape="full"
                color="muted"
                class="w-32"
                @click="prevStep()"
                >Previous</BaseButton
              >
              <BaseButton
                shape="full"
                color="primary"
                class="w-32"
                @click="nextStep()"
                >Finish</BaseButton
              >
            </div>
          </div>
        </div>
        <!--Column-->
        <div class="w-full md:w-1/2">
          <div class="max-w-sm mx-auto text-primary-500">
            <VectorIllustrationCreditCard />
          </div>
        </div>
      </div>

      <!--Step 4-->
      <div v-else-if="step === 4" class="w-full flex items-center">
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
            Credit request sent!
          </BaseHeading>
          <BaseParagraph class="text-muted-500 dark:text-muted-400 mb-5">
            Amazing! You've properly filled in your credit request. One of our
            counselors will reach out to you soon to set an appointment.
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
  </div>
</template>
