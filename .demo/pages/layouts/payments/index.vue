<script setup lang="ts">
definePageMeta({
  title: 'Payments',
  preview: {
    title: 'Outgoing payments',
    description: 'For payments management',
    categories: ['layouts', 'lists', 'payments'],
    src: '/img/screens/layouts-payments-outgoing.png',
    srcDark: '/img/screens/layouts-payments-outgoing-dark.png',
    order: 80,
  },
})

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
  '/api/payments/outgoing',
  {
    query,
  },
)

const toApprove = computed(() => {
  return data?.value?.data.filter((item: any) => item.status === 'pending')
})

const scheduled = computed(() => {
  return data?.value?.data.filter((item: any) => item.status === 'scheduled')
})
</script>

<template>
  <div class="w-full mt-6">
    <div class="space-y-10">
      <!--Needs approval-->
      <div class="w-full">
        <h3
          class="font-heading text-xl text-muted-800 dark:text-muted-200 mb-5"
        >
          Needs approval
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="toApprove?.length === 0"
          title="No pending approvals"
          description="Yo have no payment approvals. Please come back later."
        />

        <!--Payments approval list-->
        <div
          v-else
          class="divide-y divide-muted-200 dark:divide-muted-800 mt-3"
        >
          <!--item-->
          <div
            v-for="item in toApprove"
            :key="item.id"
            class="flex flex-col md:flex-row items-center py-5"
          >
            <div class="flex flex-col md:flex-row items-center gap-2">
              <BaseAvatar
                shape="full"
                size="md"
                :src="item.recipient.logo"
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
            <div
              class="flex flex-col md:flex-row items-center gap-6 md:ms-auto"
            >
              <div>
                <span
                  class="font-sans text-base font-medium leading-none text-muted-800 dark:text-muted-100"
                >
                  ${{ item.amount }}
                </span>
              </div>
              <div>
                <span
                  class="font-sans text-sm font-medium leading-none text-muted-500 dark:text-muted-300"
                >
                  {{ item.date }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <BaseButton color="muted" shape="full" condensed
                  >Cancel</BaseButton
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Scheduled-->
      <div class="w-full">
        <h3
          class="font-heading text-xl text-muted-800 dark:text-muted-200 mb-5"
        >
          Scheduled
        </h3>

        <!--Placeholder-->
        <DemoPlaceholderMinimal
          v-if="scheduled?.length === 0"
          title="No scheduled payments"
          description="Yo have no payment scheduled. Please come back later."
        />

        <!--Scheduled payments list-->
        <div
          v-else
          class="divide-y divide-muted-200 dark:divide-muted-800 mt-3"
        >
          <!--item-->
          <div
            v-for="item in scheduled"
            :key="item.id"
            class="flex flex-col md:flex-row items-center py-5"
          >
            <div class="flex flex-col md:flex-row items-center gap-2">
              <BaseAvatar
                shape="full"
                size="md"
                :src="item.recipient.logo"
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
            <div
              class="flex flex-col md:flex-row items-center gap-6 md:ms-auto"
            >
              <div>
                <span
                  class="font-sans text-base font-medium leading-none text-muted-800 dark:text-muted-100"
                >
                  ${{ item.amount }}
                </span>
              </div>
              <div>
                <span
                  class="font-sans text-sm font-medium leading-none text-muted-500 dark:text-muted-300"
                >
                  {{ item.date }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <BaseButton color="muted" shape="full" condensed
                  >Cancel</BaseButton
                >
                <BaseButton shape="full" condensed>Pay Now</BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
