<script setup lang="ts">
definePageMeta({
  title: 'Download',
  preview: {
    title: 'Downloads',
    description: 'For data export and download',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-downloads.png',
    srcDark: '/img/screens/layouts-downloads-dark.png',
    order: 37,
  },
})

const format = ref('quickbooks')
</script>

<template>
  <div class="w-full pb-24">
    <!--Header-->
    <div class="py-6 border-b border-muted-200 dark:border-muted-800">
      <div
        class="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3"
      >
        <BaseIconBox
          color="primary"
          flavor="pastel"
          size="md"
          shape="straight"
          mask="blob"
        >
          <Icon name="ph:chart-pie-slice-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <div>
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Export your data
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Download your data in CSV format.
          </BaseParagraph>
        </div>
        <div class="sm:ms-auto">
          <BaseSelect v-model="format" shape="full">
            <option value="quickbooks">Quickbooks CSV</option>
            <option value="xero">Xero CSV</option>
            <option value="freshbooks">Freshbooks CSV</option>
          </BaseSelect>
        </div>
      </div>
    </div>

    <!--Body-->
    <div class="py-6 space-y-10 divide-muted-200 dark:divide-muted-800">
      <!--Transaction-->
      <div class="grid md:grid-cols-12 gap-8">
        <!--Column-->
        <div class="md:col-span-4">
          <div class="flex gap-3">
            <BaseAvatar
              size="sm"
              :src="`/img/logos/companies/${format}-full.svg`"
            />
            <div>
              <BaseHeading
                as="h3"
                size="xl"
                weight="medium"
                class="text-muted-800 dark:text-white mb-1"
              >
                Transaction data
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Download transactions in CSV format for this account. Make sure
                to select the appropriate CSV format.
              </BaseParagraph>
            </div>
          </div>
        </div>
        <!--Column-->
        <div class="md:col-span-8">
          <BaseHeading
            as="h4"
            size="xs"
            weight="medium"
            class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
          >
            Statement period
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
                <BaseText size="sm">Jul 2023</BaseText>
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
                <BaseText size="sm">Jun 2023</BaseText>
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
                <BaseText size="sm">May 2023</BaseText>
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
                <BaseText size="sm">Apr 2023</BaseText>
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
                <BaseText size="sm">Mar 2023</BaseText>
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
                <BaseText size="sm">Feb 2023</BaseText>
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
                <BaseText size="sm">Jan 2023</BaseText>
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
