<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(10)

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
  '/api/payments/incoming',
  {
    query,
  },
)

const completed = computed(() => {
  return data?.value?.data.filter((item: any) => item.status === 'complete')
})

const active = computed(() => {
  return data?.value?.data.filter((item: any) => item.status !== 'complete')
})

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'complete':
      return 'muted'
    case 'in progress':
      return 'success'
    case 'sent':
      return 'info'
    case 'opened':
      return 'primary'
    default:
      break
  }
}
</script>

<template>
  <div class="w-full mt-6">
    <div class="space-y-10">
      <!-- Payments received -->
      <div class="w-full mb-16">
        <h3
          class="font-heading text-xl text-muted-800 dark:text-muted-200 mb-5"
        >
          Received payments
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="completed?.length === 0"
          title="No payments to show"
          description="Yo have no payment requests completed. Please come back later."
        />

        <!--Payments list-->
        <div v-else class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <th
                class="md:w-1/5 font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Created</span>
              </th>
              <th
                class="md:w-2/5 font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Contact</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Amount</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Account</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Status</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Actions</span>
              </th>
            </thead>
            <tbody>
              <!--Row-->
              <tr
                v-for="(item, index) in completed"
                :key="item.id"
                tabindex="0"
              >
                <td class="p-4">
                  <span
                    class="font-sans text-sm font-medium leading-none text-muted-500 dark:text-muted-300"
                  >
                    {{ item.date }}
                  </span>
                </td>
                <td class="p-4">
                  <div class="flex items-center gap-2 mr-5 md:mr-0">
                    <BaseAvatar
                      shape="full"
                      size="xs"
                      :src="item.recipient.photo"
                      class="bg-muted-100 dark:bg-muted-700/60"
                    />
                    <BaseText
                      size="sm"
                      lead="none"
                      weight="medium"
                      class="text-muted-500 dark:text-muted-300"
                    >
                      {{ item.recipient.name }}
                    </BaseText>
                  </div>
                </td>
                <td class="p-4">
                  <span
                    class="font-sans text-base font-medium leading-none text-muted-800 dark:text-muted-100"
                  >
                    ${{ item.amount.toFixed(2) }}
                  </span>
                </td>
                <td class="p-4">
                  <span
                    class="font-sans text-sm font-medium leading-none text-muted-400"
                  >
                    {{ item.account }}
                  </span>
                </td>
                <td class="p-4">
                  <BaseTag
                    flavor="pastel"
                    shape="full"
                    :color="index > 6 ? 'muted' : statusColor(item.status)"
                    condensed
                  >
                    {{ item.status }}
                  </BaseTag>
                </td>
                <td class="p-4 text-right">
                  <BaseButton shape="full" condensed>Details</BaseButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Payments requests -->
      <div class="w-full">
        <h3
          class="font-heading text-xl text-muted-800 dark:text-muted-200 mb-5"
        >
          Payment requests
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="active?.length === 0"
          title="No payments requests"
          description="Yo have no payment requests pending. Please come back later."
        />

        <!--Payments list-->
        <div v-else class="mt-7 overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <th
                class="md:w-1/5 font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Created</span>
              </th>
              <th
                class="md:w-2/5 font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Contact</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Amount</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Account</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Status</span>
              </th>
              <th
                class="font-sans text-xs font-semibold text-left pb-3 px-4 text-muted-400 dark:text-muted-300"
              >
                <span>Actions</span>
              </th>
            </thead>
            <tbody>
              <!--Row-->
              <tr v-for="(item, index) in active" :key="item.id" tabindex="0">
                <td class="p-4">
                  <span
                    class="font-sans text-sm font-medium leading-none text-muted-500 dark:text-muted-300"
                  >
                    {{ item.date }}
                  </span>
                </td>
                <td class="p-4">
                  <div class="flex items-center gap-2 mr-5 md:mr-0">
                    <BaseAvatar
                      shape="full"
                      size="xs"
                      :src="item.recipient.photo"
                      class="bg-muted-100 dark:bg-muted-700/60"
                    />
                    <BaseText
                      size="sm"
                      lead="none"
                      weight="medium"
                      class="text-muted-500 dark:text-muted-300"
                    >
                      {{ item.recipient.name }}
                    </BaseText>
                  </div>
                </td>
                <td class="p-4">
                  <span
                    class="font-sans text-base font-medium leading-none text-muted-800 dark:text-muted-100"
                  >
                    ${{ item.amount.toFixed(2) }}
                  </span>
                </td>
                <td class="p-4">
                  <span
                    class="font-sans text-sm font-medium leading-none text-muted-400"
                  >
                    {{ item.account }}
                  </span>
                </td>
                <td class="p-4">
                  <BaseTag
                    flavor="pastel"
                    shape="full"
                    :color="index > 6 ? 'muted' : statusColor(item.status)"
                    condensed
                  >
                    {{ item.status }}
                  </BaseTag>
                </td>
                <td class="p-4 text-right">
                  <BaseButton color="muted" shape="full" condensed
                    >Cancel</BaseButton
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
