<script setup lang="ts">
const selectedStyle = ref('classic')
const toggled = ref(false)

watch(selectedStyle, (value) => {
  if (value) {
    toggled.value = true
    const timeout = setTimeout(() => {
      toggled.value = false
      clearTimeout(timeout)
    }, 1750)
  }
})
</script>

<template>
  <div class="dark:bg-muted-900 overflow-hidden bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-10 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >UI Library</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Shuriken UI
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          Shuriken UI provides a complete set of Nuxt components and utilities
          such as buttons, form elements, badges, tabs and typography clusters.
          Each component exposes several props that you can use to customize its
          look and feel.
        </BaseParagraph>
      </div>
      <div
        class="flex w-full flex-col-reverse items-center justify-between gap-6 sm:flex-row"
        aria-hidden="true"
      >
        <!-- Left -->
        <div class="relative w-full sm:w-1/2">
          <div class="absolute inset-x-0 z-0 -mt-2 py-24">
            <div
              class="mt-12 grid grid-cols-2 -space-x-52 opacity-60 dark:opacity-50 2xl:mx-auto 2xl:max-w-3xl"
            >
              <div
                class="from-primary-200 to-primary-400 h-40 bg-gradient-to-br blur-3xl dark:from-blue-700"
              ></div>
              <div
                class="dark:to-primary-600 h-24 bg-gradient-to-r from-indigo-400 to-indigo-700 blur-3xl"
              ></div>
            </div>
          </div>
          <div
            class="gridlines relative z-10 flex min-h-[480px] w-full items-center justify-center"
          >
            <div
              v-if="toggled"
              class="absolute left-0 top-1/4 z-10 h-full w-full overflow-hidden motion-reduce:hidden"
            >
              <div class="shuriken-1 absolute block">
                <img
                  class="animate-spin-fast h-10 w-10"
                  src="/img/logos/cssninja-logo-icon.svg"
                  alt=""
                />
              </div>
              <div class="shuriken-2 absolute block">
                <img
                  class="animate-spin-fast h-12 w-12"
                  src="/img/logos/cssninja-logo-icon.svg"
                  alt=""
                />
              </div>
              <div class="shuriken-3 absolute block">
                <img
                  class="animate-spin-fast h-11 w-11"
                  src="/img/logos/cssninja-logo-icon.svg"
                  alt=""
                />
              </div>
            </div>
            <BaseCard
              v-if="selectedStyle === 'smart'"
              shape="curved"
              color="white-contrast"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag shape="curved" color="primary" shadow="flat"
                  >$3,857.97</BaseTag
                >
                <BaseButtonClose shape="full" color="muted" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/logos/companies/xero.svg"
                class="mx-auto !flex bg-sky-500/10 !transition-all !duration-200"
                shape="full"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Acme Inc.</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Checking **** 4482</BaseText
                >
              </div>
              <div class="mb-3 mt-6 flex w-full items-center justify-center">
                <BaseInput
                  shape="curved"
                  icon="lucide:dollar-sign"
                  type="number"
                  placeholder="Ex: 3225.49"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                />
              </div>
              <div>
                <BaseButton
                  class="!h-12 w-full"
                  shape="curved"
                  color="primary"
                  flavor="pastel"
                >
                  <Icon name="lucide:dollar-sign" class="h-4 w-4" />
                  <span>Send Money</span>
                </BaseButton>
                <NuxtLink
                  to="#"
                  class="text-primary-500 block pt-4 text-center font-sans text-sm underline-offset-4 hover:underline"
                >
                  Learn More
                </NuxtLink>
              </div>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'creative'"
              color="white-contrast"
              shape="curved"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] overflow-hidden p-6"
            >
              <div
                class="bg-primary-500 dark:bg-primary-500/20 absolute -right-16 -top-32 h-72 w-72 rounded-full transition-transform delay-150 duration-500"
                :class="selectedStyle === 'creative' ? 'scale-100' : 'scale-0'"
              ></div>
              <div class="mb-6 flex items-center justify-between">
                <BaseTag
                  shape="full"
                  color="primary"
                  shadow="flat"
                  class="relative z-10"
                  >$3,857.97</BaseTag
                >
                <div
                  class="dark:bg-muted-800 flex h-7 w-7 items-center justify-center rounded-full bg-white"
                >
                  <BaseAvatar
                    size="xxs"
                    src="/img/icons/flags/united-states-of-america.svg"
                    shape="full"
                  />
                </div>
              </div>
              <BaseAvatar
                size="xl"
                src="/img/logos/companies/gitlab.svg"
                class="nui-mask nui-mask-hexed bg-primary-800 mx-auto !flex !transition-all !duration-200"
                shape="straight"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Acme Inc.</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Checking **** 4482</BaseText
                >
              </div>
              <div class="mb-3 mt-6 flex w-full items-center justify-center">
                <BaseInput
                  shape="full"
                  icon="lucide:dollar-sign"
                  type="number"
                  placeholder="Ex: 3225.49"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                />
              </div>
              <div class="flex gap-2">
                <BaseButton class="!h-11 w-full" shape="full">
                  <Icon name="lucide:box" class="h-4 w-4" />
                  <span>Stash</span>
                </BaseButton>

                <BaseButton class="!h-11 w-full" shape="full" color="primary">
                  <Icon name="lucide:send" class="h-4 w-4" />
                  <span>Send</span>
                </BaseButton>
              </div>
              <NuxtLink
                to="#"
                class="text-primary-500 block pt-4 text-center font-sans text-sm underline-offset-4 hover:underline"
              >
                Learn More
              </NuxtLink>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'corporate'"
              color="white-contrast"
              shape="rounded"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag shape="rounded" color="primary" shadow="flat"
                  >$3,857.97</BaseTag
                >
                <BaseButtonClose shape="curved" color="primary" />
              </div>
              <BaseAvatar
                size="xl"
                src="/img/logos/companies/quickbooks.svg"
                badge-src="/img/icons/flags/united-states-of-america.svg"
                class="mx-auto !flex bg-green-500/10 !transition-all !duration-200"
                shape="curved"
              />
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Acme Inc.</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Checking **** 4482</BaseText
                >
              </div>
              <BaseParagraph size="sm" class="text-muted-400 my-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                vitae nisl vitae nisl.</BaseParagraph
              >
              <div class="mb-3 mt-6 flex w-full items-center justify-center">
                <BaseInput
                  shape="rounded"
                  icon="lucide:dollar-sign"
                  type="number"
                  placeholder="Ex: 3225.49"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                />
              </div>
              <div>
                <BaseButton
                  class="!h-11 w-full"
                  shape="rounded"
                  color="primary"
                >
                  <Icon name="lucide:check" class="h-4 w-4" />
                  <span>Send Money</span>
                </BaseButton>
              </div>
            </BaseCard>
            <BaseCard
              v-if="selectedStyle === 'classic'"
              color="white-contrast"
              shape="straight"
              class="!border-primary-600 relative z-20 mx-auto max-w-[340px] p-6"
            >
              <div class="mb-6 flex items-center justify-between">
                <BaseTag shape="straight" color="primary" shadow="flat"
                  >$3,857.97</BaseTag
                >
                <BaseButtonClose shape="straight" />
              </div>
              <div
                class="bg-primary-500/10 mx-auto flex h-20 w-20 items-center justify-center"
              >
                <ApolluxLogo class="text-primary-500 h-10 w-10" />
              </div>
              <div class="mt-3 text-center">
                <BaseHeading as="h3" size="xl" weight="medium">
                  Acme Inc.</BaseHeading
                >
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Checking **** 4482</BaseText
                >
              </div>
              <BaseParagraph size="sm" class="text-muted-400 my-2 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                vitae nisl vitae nisl.</BaseParagraph
              >
              <div class="mb-3 mt-6 flex w-full items-center justify-center">
                <BaseInput
                  shape="straight"
                  icon="lucide:dollar-sign"
                  type="number"
                  placeholder="Ex: 3225.49"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                />
              </div>
              <div>
                <BaseButton
                  class="!h-11 w-full"
                  shape="straight"
                  color="primary"
                  flavor="outline"
                >
                  <span>Send Money</span>
                </BaseButton>
              </div>
            </BaseCard>
          </div>
        </div>
        <!-- Right -->
        <div class="relative w-full sm:w-1/2">
          <!-- buttons -->
          <div class="mx-auto">
            <div
              class="relative mx-auto mt-48 flex w-full max-w-xs flex-wrap sm:mt-0"
            >
              <img
                class="absolute -top-48 right-8 w-64"
                src="/img/illustrations/text-hand.svg"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'classic'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'classic'"
              >
                <Icon
                  name="system-uicons:document-words"
                  class="mb-2 h-10 w-10"
                />
                <span class="font-sans text-sm">Classic</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'corporate'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'corporate'"
              >
                <Icon name="system-uicons:diamond" class="mb-2 h-10 w-10" />
                <span class="font-sans text-sm">Corporate</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'smart'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'smart'"
              >
                <Icon name="system-uicons:maximise" class="mb-2 h-10 w-10" />
                <span class="font-sans text-sm">Smart</span>
              </button>
              <button
                type="button"
                class="mx-auto flex h-32 w-40 flex-col items-center justify-center transition-colors duration-200"
                :class="
                  selectedStyle === 'creative'
                    ? 'text-primary-500'
                    : 'text-muted-400 dark:text-muted-500 hover:text-muted-600 dark:hover:text-muted-200'
                "
                @click="selectedStyle = 'creative'"
              >
                <Icon
                  name="system-uicons:lightbulb-on"
                  class="mb-2 h-10 w-10"
                />
                <span class="font-sans text-sm">Creative</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gridlines {
  background-image: url(/img/illustrations/gridlines.svg);
}

.dark .gridlines {
  background-image: url(/img/illustrations/gridlines-predark.svg);
}

.shuriken-1 {
  animation: shurikenFirst 0.75s 0s forwards;
}

.shuriken-2 {
  top: 190px;
  transform: translateX(-20px);
  animation: shurikenSecond 0.5s 0s forwards;
}
.shuriken-3 {
  top: 110px;
  transform: translateX(-20px) rotate(20deg);
  animation: shurikenThird 1.75s 0s forwards;
}
@keyframes shurikenFirst {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(600px);
    opacity: 0;
  }
}

@keyframes shurikenSecond {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(500px);
    opacity: 0;
  }
}

@keyframes shurikenThird {
  0% {
    transform: translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translateX(400px);
    opacity: 0;
  }
}
</style>
