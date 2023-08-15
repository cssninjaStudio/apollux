<script setup lang="ts">
definePageMeta({
  title: 'Accounts',
  preview: {
    title: 'Accounts',
    description: 'For account management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-accounts.png',
    srcDark: '/img/screens/layouts-accounts-dark.png',
    order: 10,
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

const { data, pending, error, refresh } = await useFetch('/api/accounts', {
  query,
})

const currentAccount = ref()

function openAccountPanel(id: number, accounts: any) {
  currentAccount.value = accounts.find((account: any) => account.id === id)
  open('account', { account: currentAccount })
}
</script>

<template>
  <div class="w-full">
    <!--Balance-->
    <div class="py-6">
      <p class="font-heading text-xs text-muted-400 mb-1">Global balance</p>
      <h3
        class="font-heading font-medium mb-1 text-3xl text-muted-800 dark:text-muted-100"
      >
        $15,389.22
      </h3>
    </div>
    <!--Placeholder-->
    <DemoPlaceholderMinimal
      v-if="data?.data?.length === 0"
      title="No payments to show"
      description="Yo have no payment requests completed. Please come back later."
    />
    <!--Accounts list-->
    <ul v-else class="max-w-2xl">
      <!--Header-->
      <li>
        <div
          class="w-full max-w-2xl flex gap-x-4 py-2 border-b border-muted-200 dark:border-muted-800 px-3"
        >
          <div class="w-3/5">
            <span class="font-heading text-xs text-muted-400 mb-1"
              >Account</span
            >
          </div>
          <div class="w-1/5">
            <span class="font-heading text-xs text-muted-400 mb-1"
              >Balance</span
            >
          </div>
          <div class="hidden md:w-1/5">
            <span class="font-heading text-xs text-muted-400 mb-1">
              Transfer rules
            </span>
          </div>
        </div>
      </li>
      <!--Account item-->
      <li
        v-for="account in data?.data"
        :key="account.id"
        class="hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300 cursor-pointer px-3"
        @click="openAccountPanel(account.id, data?.data)"
      >
        <div
          class="w-full max-w-2xl flex items-center gap-x-4 py-4 border-b border-muted-200 dark:border-muted-800"
        >
          <div class="w-3/5">
            <div class="w-full flex items-center gap-3">
              <ApolluxLogo class="w-8 h-8 text-muted-400" />
              <BaseText size="sm" class="text-muted-800 dark:text-muted-200">
                {{ account.type }} {{ account.number }}
              </BaseText>
            </div>
          </div>
          <div class="w-2/5 md:w-1/5">
            <BaseText class="text-muted-800 dark:text-muted-200">
              ${{ account.balance.toFixed(2) }}
            </BaseText>
          </div>
          <div class="hidden md:block md:w-1/5">
            <BaseButton to="/layouts/accounts/rules" shape="full" condensed>
              <Icon name="lucide:edit-3" class="w-4 h-4" />
              <span class="font-heading text-sm">New rule</span>
            </BaseButton>
          </div>
        </div>
      </li>
      <!--Add account-->
      <li
        class="hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300 cursor-pointer px-3"
      >
        <div
          class="group w-full flex items-center gap-x-4 py-4 border-b border-muted-200 dark:border-muted-800"
        >
          <div class="w-3/5">
            <div class="w-full flex items-center gap-3">
              <div
                class="w-8 h-8 flex items-center justify-center rounded-full text-muted-500 bg-muted-100 dark:bg-muted-800 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300"
              >
                <Icon name="lucide:plus" class="w-4 h-4" />
              </div>
              <BaseText
                size="sm"
                class="text-muted-400 dark:text-muted-500 group-hover:text-muted-600 dark:group-hover:text-muted-200"
              >
                Add an account
              </BaseText>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
