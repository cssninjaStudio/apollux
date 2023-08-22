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

const outgoing = computed(() => {
  if (data.value?.data.length && data.value?.data.length > 0) {
    return data.value.data.filter((item) => item.type === 'out')
  }
})

const total = computed(() => {
  let amount = 0
  for (const item of data.value?.data ?? []) {
    if (item.type === 'out') {
      amount = amount + item.amount
    }
  }
  return amount
})
</script>

<template>
  <BaseCard
    shape="curved"
    color="white-contrast"
    elevated
    class="h-full py-16 px-10"
  >
    <div class="h-full flex flex-col justify-between gap-7">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="uppercase text-muted-400"
      >
        Money out last 30 days
      </BaseHeading>

      <div class="flex items-center gap-3">
        <BaseText weight="light" size="3xl">-</BaseText>
        <span
          class="font-sans font-medium text-4xl text-muted-800 dark:text-white"
        >
          ${{ total.toFixed(2) }}
        </span>
      </div>

      <div v-if="outgoing?.length === 0" class="space-y-4 mb-2">
        <div class="space-y-1">
          <p class="font-sans text-muted-500">No outgoing transactions yet</p>
          <div class="w-full h-0.5 bg-muted-200 dark:bg-muted-800"></div>
        </div>
      </div>

      <div v-else class="space-y-4 mb-2">
        <div
          v-for="item in outgoing?.slice(0, 4)"
          :key="item.id"
          class="space-y-1"
        >
          <BaseParagraph size="sm" class="text-muted-500">{{
            item.issuer
          }}</BaseParagraph>
          <div class="relative w-full flex items-center gap-4">
            <BaseProgress
              :value="(item.amount / total) * 100"
              :max="100"
              size="xs"
            />
            <BaseText
              weight="medium"
              class="block w-1/5 text-end text-muted-800 dark:text-muted-100"
            >
              ${{ item.amount.toFixed(2) }}
            </BaseText>
          </div>
        </div>
      </div>
      <div class="mt-auto text-end">
        <DemoLinkArrow to="#" />
      </div>
    </div>
  </BaseCard>
</template>
