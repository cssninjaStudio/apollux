<script setup lang="ts">
definePageMeta({
  title: 'Transfer rules',
  preview: {
    title: 'Transfer rules',
    description: 'For account management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-transfer-rules.png',
    srcDark: '/img/screens/layouts-transfer-rules-dark.png',
    order: 12,
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

const { data, pending, error, refresh } = await useFetch(
  '/api/accounts/rules',
  {
    query,
  },
)
</script>

<template>
  <div>
    <!--Placeholder-->
    <div v-if="data?.data?.length === 0" class="mb-8">
      <p class="font-heading text-sm text-muted-500 dark:text-muted-500">
        You don't have any active rules
      </p>
    </div>

    <div v-else class="mb-8">
      <!-- Load rules here -->
    </div>

    <div
      class="w-full max-w-3xl px-10 py-8 rounded-xl bg-muted-100 dark:bg-muted-800"
    >
      <div class="space-y-4">
        <h4 class="font-heading text-sm text-muted-500 dark:text-muted-500">
          Add a rule
        </h4>
        <!--Rule-->
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-5">
            <button
              type="button"
              class="group w-full flex items-center gap-2 bg-white dark:bg-muted-900 p-4 rounded-xl shadow-xl shadow-muted-300/10 dark:shadow-muted-800/10 cursor-pointer"
            >
              <Icon
                name="lucide:plus"
                class="w-4 h-4 text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
              />
              <Icon
                name="ph:diamonds-four-duotone"
                class="iconify w-6 h-6 text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
              />
              <BaseText
                size="sm"
                class="text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
              >
                Target balance rule
              </BaseText>
            </button>
          </div>
          <div class="col-span-7">
            <div class="w-full h-full flex flex-col justify-center">
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-500"
              >
                Keep an account at a target balance by moving funds to or from
                savings each day.
              </BaseParagraph>
            </div>
          </div>
        </div>
        <!--Rule-->
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-5">
            <button
              type="button"
              class="group w-full flex items-center gap-2 bg-white dark:bg-muted-900 p-4 rounded-xl shadow-xl shadow-muted-300/10 dark:shadow-muted-800/10 cursor-pointer"
            >
              <Icon
                name="lucide:plus"
                class="w-4 h-4 text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
              />
              <Icon
                name="ph:compass-duotone"
                class="iconify w-6 h-6 text-muted-400 group-hover:text-primary-500 transition-colors duration-300"
              />
              <BaseText
                size="sm"
                class="text-muted-600 dark:text-muted-400 group-hover:text-muted-700 dark:group-hover:text-muted-200 transition-colors duration-300"
              >
                Zero balance rule
              </BaseText>
            </button>
          </div>
          <div class="col-span-7">
            <div class="w-full h-full flex flex-col justify-center">
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-500"
              >
                Keep an account at $0 by moving incoming funds to savings after
                each transaction.
              </BaseParagraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
