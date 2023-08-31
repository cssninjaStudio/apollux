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

const { data, pending, error, refresh } = await useFetch('/api/transactions', {
  query,
})

function statusColor(itemStatus: string) {
  switch (itemStatus) {
    case 'complete':
      return 'success'
    case 'in progress':
      return 'primary'
    case 'processing':
      return 'info'
    case 'cancelled':
      return 'warning'
    default:
      break
  }
}
</script>

<template>
  <BaseCard
    shape="curved"
    color="white-contrast"
    elevated
    class="py-4 md:py-7 px-4 md:px-8 xl:px-10"
  >
    <div class="sm:flex items-center justify-between">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="uppercase text-muted-400"
      >
        Recent Transactions
      </BaseHeading>
      <DemoLinkArrow to="#" />
    </div>
    <div v-if="!pending && data?.data.length === 0">
      <BasePlaceholderPage
        title="No matching results"
        subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
      >
      </BasePlaceholderPage>
    </div>
    <div v-else class="mt-7 overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <th class="w-1/5"></th>
          <th class="w-2/5"></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <!--Row-->
          <tr
            v-for="item in data?.data.slice(0, 8)"
            :key="item.id"
            tabindex="0"
          >
            <td class="py-2">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-400"
              >
                {{ item.date }}
              </BaseText>
            </td>
            <td class="py-2">
              <BaseText
                size="sm"
                weight="medium"
                lead="none"
                class="text-muted-600 dark:text-muted-300"
              >
                {{ item.issuer }}
              </BaseText>
            </td>
            <td class="py-2 px-4">
              <BaseText
                size="sm"
                weight="semibold"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ item.type === 'in' ? '+' : '-' }} ${{
                  item.amount.toFixed(2)
                }}
              </BaseText>
            </td>
            <td class="py-2 px-4">
              <BaseTag
                flavor="pastel"
                shape="full"
                :color="statusColor(item.status)"
                size="sm"
              >
                {{ item.status }}
              </BaseTag>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </BaseCard>
</template>
