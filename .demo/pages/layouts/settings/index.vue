<script setup lang="ts">
definePageMeta({
  title: 'Personal',
  preview: {
    title: 'Personal',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})
</script>

<template>
  <div class="py-6 space-y-10 divide-muted-200 dark:divide-muted-800">
    <!--Grid-->
    <div class="grid md:grid-cols-12 gap-8">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          About you
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Some basic information that we need to know about you, and to process
          legal matters.
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
        >
          Your info
        </BaseHeading>
        <div
          class="flex flex-col divide-y divide-muted-200 dark:divide-muted-800"
        >
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Email address
                </BaseHeading>
                <BaseText size="sm">kendrawilson@gmail.com</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Preferred name
                </BaseHeading>
                <BaseText size="sm">Kendra Wilson</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Legal name
                </BaseHeading>
                <BaseText size="sm">Kendra Wilson</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!--Documents-->
    <div class="grid md:grid-cols-12 gap-8">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          Additional info
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Some useful information that we could need to reach out to you or for
          a few checks.
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
        >
          Additional info
        </BaseHeading>
        <div
          class="flex flex-col divide-y divide-muted-200 dark:divide-muted-800"
        >
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Date of birth
                </BaseHeading>
                <BaseText size="sm">08/23/1986</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Phone number
                </BaseHeading>
                <BaseText size="sm">+1 559 454 15</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Address
                </BaseHeading>
                <BaseParagraph size="sm">47, Victorian Av.</BaseParagraph>
                <BaseParagraph size="sm">Suite G3, New York, NY</BaseParagraph>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
