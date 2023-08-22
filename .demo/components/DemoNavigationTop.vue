<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    closeLabel?: string
    closeTo?: string
  }>(),
  {
    closeLabel: 'Back',
    closeTo: '/',
  },
)
</script>

<template>
  <div x-cloak class="absolute top-0 start-0 w-full">
    <div class="w-full max-w-6xl mx-auto px-4">
      <div class="w-full flex items-center justify-between py-5">
        <div class="flex-1 flex items-center">
          <NuxtLink to="/dashboards" class="flex items-center gap-2">
            <ApolluxLogo class="w-8 h-8 text-primary-600" />
            <ApolluxLogoText
              class="text-muted-800 dark:text-white h-3 hidden lg:block"
            />
          </NuxtLink>
        </div>
        <div class="grow">
          <div class="w-full flex items-center justify-center">
            <BaseParagraph class="text-muted-700 dark:text-muted-200">
              {{ props.title }}
            </BaseParagraph>
          </div>
        </div>
        <div class="flex-1">
          <div class="flex items-center justify-end">
            <NuxtLink :to="props.closeTo" class="group text-center">
              <Icon
                name="lucide:x"
                class="w-8 h-8 text-muted-800 dark:text-muted-500 dark:group-hover:text-muted-200 transition-colors duration-300"
              />
              <BaseText
                size="xs"
                class="block text-muted-400 dark:text-muted-400 dark:group-hover:text-muted-200 transition-colors duration-300"
              >
                {{ props.closeLabel }}
              </BaseText>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
