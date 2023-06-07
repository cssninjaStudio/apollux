<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    option?: any
  }>(),
  {
    option: undefined,
  },
)

const { close } = usePanels()
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 border-l bg-white"
  >
    <div
      class="w-full h-20 flex items-center justify-between px-6 border-b border-muted-200 dark:border-muted-800"
    >
      <div>
        <BaseHeading weight="medium">
          {{ props.option?.title }}
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-400">
          {{ props.option?.subtitle }}
        </BaseParagraph>
      </div>

      <!--Close button-->
      <button
        type="button"
        class="flex items-center justify-center w-10 h-10 nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 transition-colors duration-300 cursor-pointer"
        @click="close"
      >
        <Icon name="lucide:arrow-right" class="h-4 w-4" />
      </button>
    </div>

    <div
      class="relative h-[calc(100%_-_80px)] w-full px-6 overflow-y-auto nui-slimscroll"
    >
      <div class="py-10">
        <div class="space-y-6">
          <!--Overview-->
          <div
            class="grid grid-cols-12 pb-6 border-b border-muted-200 dark:border-muted-800"
          >
            <div class="col-span-4">
              <BaseHeading size="sm" weight="medium" class="text-muted-400">
                {{ props.option?.benefits.concept.label }}
              </BaseHeading>
            </div>
            <div class="col-span-8">
              <ul class="list-disc space-y-1">
                <li v-for="feature in option.benefits.concept.features">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-600 dark:text-muted-500"
                    >{{ feature }}</BaseParagraph
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--Pros-->
          <div
            class="grid grid-cols-12 pb-6 border-b border-muted-200 dark:border-muted-800"
          >
            <div class="col-span-4">
              <BaseHeading size="sm" weight="medium" class="text-muted-400">
                {{ props.option?.benefits.pros.label }}
              </BaseHeading>
            </div>
            <div class="col-span-8">
              <ul class="list-disc space-y-1">
                <li v-for="feature in option.benefits.pros.features">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-600 dark:text-muted-500"
                    >{{ feature }}</BaseParagraph
                  >
                </li>
              </ul>
            </div>
          </div>
          <!--Cons-->
          <div
            class="grid grid-cols-12 pb-6 border-b border-muted-200 dark:border-muted-800"
          >
            <div class="col-span-4">
              <BaseHeading size="sm" weight="medium" class="text-muted-400">
                {{ props.option?.benefits.cons.label }}
              </BaseHeading>
            </div>
            <div class="col-span-8">
              <ul class="list-disc space-y-1">
                <li v-for="feature in option.benefits.cons.features">
                  <BaseParagraph
                    size="sm"
                    class="text-muted-600 dark:text-muted-500"
                    >{{ feature }}</BaseParagraph
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--Provider-->
        <div class="flex items-center justify-between mt-6">
          <div class="flex items-center gap-2">
            <img :src="props.option?.provider.logo" class="w-11 h-11" alt="" />
            <BaseHeading
              size="md"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              {{ props.option?.provider.name }}
            </BaseHeading>
          </div>
          <div>
            <BaseButton shape="full" color="primary" shadow="hover"
              >Get Started</BaseButton
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
