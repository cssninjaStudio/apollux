<script setup lang="ts">
definePageMeta({
  title: 'Documents',
  preview: {
    title: 'Documents',
    description: 'For document management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-documents.png',
    srcDark: '/img/screens/layouts-documents-dark.png',
    order: 37,
  },
})
</script>

<template>
  <div class="w-full pb-24">
    <!--Header-->
    <div class="py-6 border-b border-muted-200 dark:border-muted-800">
      <BaseHeading
        as="h2"
        size="3xl"
        weight="medium"
        class="text-muted-800 dark:text-white"
      >
        Documents
      </BaseHeading>
      <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
        View and download your documents
      </BaseParagraph>
    </div>

    <!--Body-->
    <div class="py-6 space-y-10 divide-muted-200 dark:divide-muted-800">
      <!--Statements-->
      <div class="grid md:grid-cols-12 gap-8">
        <!--Column-->
        <div class="md:col-span-4">
          <BaseHeading
            as="h3"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white mb-1"
          >
            Statements
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            View transactions and total spending on this account. Use exports to
            download a CSV.
          </BaseParagraph>
        </div>
        <!--Column-->
        <div class="md:col-span-8">
          <BaseHeading
            as="h4"
            size="xs"
            weight="medium"
            class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
          >
            Statement files
          </BaseHeading>
          <div
            class="flex flex-col divide-y divide-muted-200 dark:divide-muted-800"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="flex items-center gap-2 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
              >
                <BaseText size="sm">Q1 Statement</BaseText>
                <Icon name="lucide:download" class="w-4 h-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="flex items-center gap-2 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
              >
                <BaseText size="sm">Q2 Statement</BaseText>
                <Icon name="lucide:download" class="w-4 h-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="flex items-center gap-2 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
              >
                <BaseText size="sm">Q3 Statement</BaseText>
                <Icon name="lucide:download" class="w-4 h-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
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
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white mb-1"
          >
            Other documents
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Some useful documents that you might need anytime, for sharing or
            verifications.
          </BaseParagraph>
        </div>
        <!--Column-->
        <div class="md:col-span-8">
          <BaseHeading
            as="h4"
            size="xs"
            weight="medium"
            class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
          >
            Other documents
          </BaseHeading>
          <div
            class="flex flex-col divide-y divide-muted-200 dark:divide-muted-800"
          >
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="flex items-center gap-2 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
              >
                <BaseText size="sm">Wire details</BaseText>
                <Icon name="lucide:download" class="w-4 h-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
            <!--Item-->
            <div class="group">
              <NuxtLink
                to="#"
                class="flex items-center gap-2 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
              >
                <BaseText size="sm">Bank contract</BaseText>
                <Icon name="lucide:download" class="w-4 h-4" />
                <BaseText
                  size="xs"
                  weight="semibold"
                  class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Download PDF
                </BaseText>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
