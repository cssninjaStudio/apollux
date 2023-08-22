<script setup lang="ts">
definePageMeta({
  title: 'Investments',
  preview: {
    title: 'Investments',
    description: 'For funding and investment options',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-invest.png',
    srcDark: '/img/screens/layouts-invest-dark.png',
    order: 37,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(45)
const { open } = usePanels()

watch([filter, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const query = computed(() => {
  return {
    filter: filter.value,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch('/api/invest', {
  query,
})

const currentOption = ref()

function openOptionPanel(id: number, options: any) {
  currentOption.value = options.find((option: any) => option.id === id)
  open('invest', { option: currentOption })
}
</script>

<template>
  <div class="pt-6 pb-20">
    <!--Invest widget-->
    <DemoWidgetInvest />
    <!--Content-->
    <div class="w-full">
      <!--Header-->
      <div class="py-6 border-b border-muted-200 dark:border-muted-800">
        <BaseHeading
          as="h2"
          size="2xl"
          weight="medium"
          class="text-muted-800 dark:text-white"
        >
          Explore options
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Assess our investment options
        </BaseParagraph>
      </div>
      <!--Options-->
      <div class="mt-7 overflow-x-auto">
        <table class="w-full whitespace-nowrap">
          <thead>
            <th
              class="md:w-1/5 font-sans text-xs font-semibold text-start pb-3 px-4 text-muted-400 dark:text-muted-300"
            >
              <span>Category</span>
            </th>
            <th
              class="md:w-3/5 font-sans text-xs font-semibold text-start pb-3 px-4 text-muted-400 dark:text-muted-300"
            >
              <span>Typically spent on</span>
            </th>
            <th
              class="font-sans text-xs font-semibold text-end pb-3 px-4 text-muted-400 dark:text-muted-300"
            >
              <span>Funding based on</span>
            </th>
          </thead>
          <tbody>
            <tr
              v-for="option in data?.data"
              :key="option.id"
              tabindex="0"
              class="hover:bg-muted-50 dark:hover:bg-muted-950 border-b border-muted-200 dark:border-muted-800 cursor-pointer transition-colors duration-200 ease-in-out"
              @click="openOptionPanel(option.id, data?.data)"
            >
              <td class="p-4">
                <div>
                  <BaseHeading
                    as="h4"
                    size="md"
                    weight="medium"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    {{ option.title }}
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    {{ option.subtitle }}
                  </BaseParagraph>
                </div>
              </td>
              <td class="p-4">
                <div class="flex items-center gap-2">
                  <BaseTag
                    v-for="target in option.targets"
                    condensed
                    shape="full"
                    :key="target"
                    color="muted"
                  >
                    {{ target }}
                  </BaseTag>
                </div>
              </td>
              <td class="p-4 text-end">
                <div class="flex justify-end">
                  <BaseParagraph
                    size="sm"
                    lead="none"
                    class="block text-muted-500 dark:text-muted-400"
                  >
                    {{ option.purpose }}
                  </BaseParagraph>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
