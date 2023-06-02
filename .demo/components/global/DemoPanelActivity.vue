<script setup lang="ts">
const { close } = usePanels()
const activeTab = ref('tab-1')
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 border bg-white"
  >
    <div
      class="w-full h-20 flex items-center justify-between px-6 border-b border-muted-200 dark:border-muted-800"
    >
      <BaseHeading
        as="h3"
        size="xs"
        weight="semibold"
        class="uppercase text-muted-500 dark:text-muted-100"
      >
        Quick Access
      </BaseHeading>

      <!--Close button-->
      <button
        type="button"
        class="flex items-center justify-center w-10 h-10 nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 transition-colors duration-300 cursor-pointer"
        @click="close"
      >
        <Icon name="lucide:arrow-right" class="h-4 w-4" />
      </button>
    </div>

    <div class="flex h-16 items-center px-6">
      <!-- Tabs -->
      <div
        class="bg-muted-100 dark:bg-muted-900 relative flex h-10 w-full items-center rounded-full font-sans text-sm"
      >
        <button
          type="button"
          class="relative z-20 flex h-full flex-1 items-center justify-center"
          :class="activeTab === 'tab-1' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-1'"
        >
          <span>Contacts</span>
        </button>
        <button
          type="button"
          class="relative z-20 flex h-full flex-1 items-center justify-center"
          :class="activeTab === 'tab-2' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-2'"
        >
          <span>Accounts</span>
        </button>
        <button
          type="button"
          class="relative z-20 flex h-full flex-1 items-center justify-center"
          :class="activeTab === 'tab-3' ? 'text-white' : 'text-muted-400'"
          @click="activeTab = 'tab-3'"
        >
          <span>Cards</span>
        </button>
        <div
          class="bg-primary-600 absolute start-0 top-0 z-10 h-full w-1/3 rounded-full transition-all duration-300"
          :class="[
            activeTab === 'tab-1' && 'ms-0',
            activeTab === 'tab-2' && 'ms-[33.3%]',
            activeTab === 'tab-3' && 'ms-[66.6%]',
          ]"
        ></div>
      </div>
    </div>

    <div
      class="slimscroll relative h-[calc(100%_-_134px)] w-full overflow-y-auto px-6"
    >
      <div class="pt-4 pb-6">
        <!-- Contacts tab content -->
        <div v-if="activeTab === 'tab-1'" class="space-y-4">
          <div class="mb-4">
            <BaseHeading
              as="h5"
              size="xs"
              weight="medium"
              class="text-muted-400 uppercase"
            >
              Recently viewed
            </BaseHeading>
          </div>
          <!-- Contact -->
          <BaseCard
            shape="curved"
            class="flex items-center p-4 dark:!bg-muted-900 dark:!border-muted-800"
          >
            <BaseAvatar src="/img/avatars/13.svg" size="sm" />
            <div class="ms-3">
              <BaseHeading
                as="h6"
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-white"
              >
                Aaron Patterson
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"
                >Freelance worker</BaseParagraph
              >
            </div>
            <NuxtLink
              to="#"
              class="border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-700 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
            >
              <Icon name="feather:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </BaseCard>
          <!-- Contact -->
          <BaseCard
            shape="curved"
            class="flex items-center p-4 dark:!bg-muted-900 dark:!border-muted-800"
          >
            <BaseAvatar src="/img/avatars/20.svg" size="sm" />
            <div class="ms-3">
              <BaseHeading
                as="h6"
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-white"
              >
                Howard Streim
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"
                >Freelance worker</BaseParagraph
              >
            </div>
            <NuxtLink
              to="#"
              class="border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-700 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
            >
              <Icon name="feather:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </BaseCard>
          <!-- Contact -->
          <BaseCard
            shape="curved"
            class="flex items-center p-4 dark:!bg-muted-900 dark:!border-muted-800"
          >
            <BaseAvatar
              src="/img/logos/companies/amazon.svg"
              size="sm"
              class="bg-muted-100 dark:bg-muted-700/60"
            />
            <div class="ms-3">
              <BaseHeading
                as="h6"
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-white"
              >
                Amazon
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"
                >Commerce company</BaseParagraph
              >
            </div>
            <NuxtLink
              to="#"
              class="border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-700 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
            >
              <Icon name="feather:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </BaseCard>
          <!-- Contact -->
          <BaseCard
            shape="curved"
            class="flex items-center p-4 dark:!bg-muted-900 dark:!border-muted-800"
          >
            <BaseAvatar src="/img/avatars/24.svg" size="sm" />
            <div class="ms-3">
              <BaseHeading
                as="h6"
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-white"
              >
                Anna Lopez
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"
                >Freelance worker</BaseParagraph
              >
            </div>
            <NuxtLink
              to="#"
              class="border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-700 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
            >
              <Icon name="feather:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </BaseCard>
          <!-- Contact -->
          <BaseCard
            shape="curved"
            class="flex items-center p-4 dark:!bg-muted-900 dark:!border-muted-800"
          >
            <BaseAvatar
              src="/img/logos/companies/airbnb.svg"
              size="sm"
              class="bg-muted-100 dark:bg-muted-700/60"
            />
            <div class="ms-3">
              <BaseHeading
                as="h6"
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-white"
              >
                Airbnb
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400"
                >Housing company</BaseParagraph
              >
            </div>
            <NuxtLink
              to="#"
              class="border-muted-200 text-muted-400 hover:border-primary-500 hover:text-primary-500 dark:border-muted-700 dark:hover:border-primary-500 ms-auto flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300"
            >
              <Icon name="feather:arrow-right" class="h-4 w-4" />
            </NuxtLink>
          </BaseCard>
          <div>
            <BaseButton
              to="/layouts/payments/recipients"
              shape="curved"
              class="w-full"
              >View all contacts</BaseButton
            >
          </div>
        </div>

        <!-- Accounts tab content -->
        <div v-else-if="activeTab === 'tab-2'" class="space-y-4">
          <div class="mb-4">
            <BaseHeading
              as="h5"
              size="xs"
              weight="medium"
              class="text-muted-400 uppercase"
            >
              Recent activity
            </BaseHeading>
          </div>
          <!-- Account -->
          <div
            class="w-full flex items-center gap-x-4 py-4 border-b border-muted-200 dark:border-muted-800"
          >
            <div class="w-3/5">
              <div class="w-full flex items-center gap-3">
                <ApolluxLogo class="w-8 h-8 dark:invert" />
                <div>
                  <BaseText
                    size="sm"
                    class="block text-muted-800 dark:text-muted-200"
                  >
                    Checking **** 4897
                  </BaseText>
                  <BaseText size="xs" class="block text-muted-400">
                    5 new updates
                  </BaseText>
                </div>
              </div>
            </div>
            <div class="w-2/5 text-end">
              <BaseText class="text-muted-800 dark:text-muted-200">
                $9543.12
              </BaseText>
            </div>
          </div>
          <!-- Account -->
          <div
            class="w-full flex items-center gap-x-4 py-4 border-b border-muted-200 dark:border-muted-800"
          >
            <div class="w-3/5">
              <div class="w-full flex items-center gap-3">
                <ApolluxLogo class="w-8 h-8 dark:invert" />
                <div>
                  <BaseText
                    size="sm"
                    class="block text-muted-800 dark:text-muted-200"
                  >
                    Checking **** 4869
                  </BaseText>
                  <BaseText size="xs" class="block text-muted-400">
                    1 new update
                  </BaseText>
                </div>
              </div>
            </div>
            <div class="w-2/5 text-end">
              <BaseText class="text-muted-800 dark:text-muted-200">
                $1211.67
              </BaseText>
            </div>
          </div>
          <div>
            <BaseButton to="/layouts/accounts" shape="curved" class="w-full"
              >View my accounts</BaseButton
            >
          </div>
        </div>

        <!-- Timeline tab content -->
        <div v-else-if="activeTab === 'tab-3'" class="space-y-4">
          <div class="mb-4">
            <BaseHeading
              as="h5"
              size="xs"
              weight="medium"
              class="text-muted-400 uppercase"
            >
              Recently used
            </BaseHeading>
          </div>
          <div class="space-y-4">
            <NuxtLink
              to="/layouts/cards"
              class="block p-4 bg-muted-100 dark:bg-muted-900/50 rounded-xl border border-transparent hover:border-primary-500 transition-colors duration-300"
            >
              <DemoCreditCardReal
                status="active"
                name="Kendra Wilson"
                number="•••• •••• •••• 4479"
                brand="mastercard"
              />
              <div class="flex items-center justify-between mt-2 px-1">
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Latest transaction:</BaseText
                >
                <BaseText
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-muted-100"
                  >$279.99</BaseText
                >
              </div>
            </NuxtLink>
            <NuxtLink
              to="/layouts/cards"
              class="block p-4 bg-muted-100 dark:bg-muted-900/50 rounded-xl border border-transparent hover:border-primary-500 transition-colors duration-300"
            >
              <DemoCreditCardReal
                status="active"
                name="Kendra Wilson"
                number="•••• •••• •••• 2269"
                brand="visa"
              />
              <div class="flex items-center justify-between mt-2 px-1">
                <BaseText size="sm" class="text-muted-500 dark:text-muted-400"
                  >Latest transaction:</BaseText
                >
                <BaseText
                  size="sm"
                  weight="semibold"
                  class="text-muted-800 dark:text-muted-100"
                  >$899.99</BaseText
                >
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
