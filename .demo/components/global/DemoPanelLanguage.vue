<script setup lang="ts">
const { close } = usePanels()

const language = ref('en')
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 border bg-white"
  >
    <div
      class="w-full h-20 flex items-center justify-between px-6 border-b border-muted-200 dark:border-muted-800"
    >
      <BaseHeading
        as="h3"
        size="xs"
        weight="medium"
        class="uppercase text-muted-500 dark:text-muted-100"
      >
        Select Language
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

    <div class="relative h-[calc(100%_-_80px)] w-full px-6">
      <div class="grid grid-cols-2 gap-4 py-6">
        <BaseRadioHeadless v-model="language" value="en">
          <BaseCard
            shape="curved"
            class="p-3 flex items-center gap-3 peer-checked:!border-primary-500 peer-checked:[&>.relative]:!border-primary-500 peer-checked:[&>.relative>div]:flex"
          >
            <div
              class="relative border-muted-200 dark:border-muted-600 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-7 w-7 rounded-full"
                src="/img/icons/flags/united-states-of-america.svg"
                alt="flag icon"
                height="28"
                width="28"
              />
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-white text-white"
              >
                <Icon name="feather:check" class="h-2 w-2" />
              </div>
            </div>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-100"
              >
                English
              </BaseHeading>
            </div>
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless v-model="language" value="fr">
          <BaseCard
            shape="curved"
            class="p-3 flex items-center gap-3 peer-checked:!border-primary-500 peer-checked:[&>.relative]:!border-primary-500 peer-checked:[&>.relative>div]:flex"
          >
            <div
              class="relative border-muted-200 dark:border-muted-600 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-7 w-7 rounded-full"
                src="/img/icons/flags/france.svg"
                alt="flag icon"
                height="28"
                width="28"
              />
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-white text-white"
              >
                <Icon name="feather:check" class="h-2 w-2" />
              </div>
            </div>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-100"
              >
                Français
              </BaseHeading>
            </div>
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless v-model="language" value="es">
          <BaseCard
            shape="curved"
            class="p-3 flex items-center gap-3 peer-checked:!border-primary-500 peer-checked:[&>.relative]:!border-primary-500 peer-checked:[&>.relative>div]:flex"
          >
            <div
              class="relative border-muted-200 dark:border-muted-600 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-7 w-7 rounded-full"
                src="/img/icons/flags/spain.svg"
                alt="flag icon"
                height="28"
                width="28"
              />
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-white text-white"
              >
                <Icon name="feather:check" class="h-2 w-2" />
              </div>
            </div>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-100"
              >
                Español
              </BaseHeading>
            </div>
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless v-model="language" value="de">
          <BaseCard
            shape="curved"
            class="p-3 flex items-center gap-3 peer-checked:!border-primary-500 peer-checked:[&>.relative]:!border-primary-500 peer-checked:[&>.relative>div]:flex"
          >
            <div
              class="relative border-muted-200 dark:border-muted-600 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-7 w-7 rounded-full"
                src="/img/icons/flags/germany.svg"
                alt="flag icon"
                height="28"
                width="28"
              />
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-white text-white"
              >
                <Icon name="feather:check" class="h-2 w-2" />
              </div>
            </div>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-100"
              >
                Deutsch
              </BaseHeading>
            </div>
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless v-model="language" value="mx">
          <BaseCard
            shape="curved"
            class="p-3 flex items-center gap-3 peer-checked:!border-primary-500 peer-checked:[&>.relative]:!border-primary-500 peer-checked:[&>.relative>div]:flex"
          >
            <div
              class="relative border-muted-200 dark:border-muted-600 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-7 w-7 rounded-full"
                src="/img/icons/flags/mexico.svg"
                alt="flag icon"
                height="28"
                width="28"
              />
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-white text-white"
              >
                <Icon name="feather:check" class="h-2 w-2" />
              </div>
            </div>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-100"
              >
                Mexicano
              </BaseHeading>
            </div>
          </BaseCard>
        </BaseRadioHeadless>
        <BaseRadioHeadless v-model="language" value="ch">
          <BaseCard
            shape="curved"
            class="p-3 flex items-center gap-3 peer-checked:!border-primary-500 peer-checked:[&>.relative]:!border-primary-500 peer-checked:[&>.relative>div]:flex"
          >
            <div
              class="relative border-muted-200 dark:border-muted-600 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg transition-all duration-300"
            >
              <img
                class="h-7 w-7 rounded-full"
                src="/img/icons/flags/china.svg"
                alt="flag icon"
                height="28"
                width="28"
              />
              <div
                class="bg-primary-500 dark:border-muted-800 absolute -end-1 -top-1 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-white text-white"
              >
                <Icon name="feather:check" class="h-2 w-2" />
              </div>
            </div>
            <div>
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-100"
              >
                中国人
              </BaseHeading>
            </div>
          </BaseCard>
        </BaseRadioHeadless>
      </div>
    </div>
  </div>
</template>
