<script setup lang="ts">
definePageMeta({
  title: 'Credit Cards',
  preview: {
    title: 'Credit Cards',
    description: 'For card management',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-cards.png',
    srcDark: '/img/screens/layouts-cards-dark.png',
    order: 13,
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

const { data, pending, error, refresh } = await useFetch('/api/cards', {
  query,
})

const currentCard = ref()

function openCardPanel(id: number, cards: any) {
  currentCard.value = cards.find((card: any) => card.id === id)
  open('card', { card: currentCard })
}
</script>

<template>
  <div class="w-full pb-24">
    <!--Header-->
    <div class="flex items-center justify-between py-6">
      <div>
        <BaseInput
          v-model="filter"
          icon="lucide:search"
          shape="curved"
          placeholder="Search cards..."
        />
      </div>
      <div class="flex items-center gap-2">
        <span class="font-sans text-sm text-muted-400">
          0-{{ data?.data.length }} of {{ data?.total }}
        </span>
      </div>
    </div>

    <div class="w-full">
      <!--Filters-->
      <div class="w-full flex items-center gap-5">
        <!--Dropdown-->
        <div>
          <DemoCardFilters />
        </div>

        <BaseText
          size="sm"
          weight="medium"
          class="hidden md:block text-muted-600 dark:text-muted-500"
        >
          No filters applied
        </BaseText>

        <div class="ms-auto">
          <BaseButton
            to="/layouts/card/new"
            shape="full"
            color="muted"
            condensed
          >
            <Icon name="lucide:plus" class="w-4 h-4" />
            <span>New Card</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="mt-7 overflow-x-auto">
      <table class="w-full whitespace-nowrap">
        <thead>
          <th
            class="md:w-1/5 font-sans text-xs font-semibold text-start pb-3 px-4 text-muted-400 dark:text-muted-300"
          >
            <span>Cardholder</span>
          </th>
          <th
            class="md:w-2/5 font-sans text-xs font-semibold text-start pb-3 px-4 text-muted-400 dark:text-muted-300"
          >
            <span>Card</span>
          </th>
          <th
            class="font-sans text-xs font-semibold text-start pb-3 px-4 text-muted-400 dark:text-muted-300"
          >
            <span>Spent this month</span>
          </th>
          <th
            class="font-sans text-xs font-semibold text-start pb-3 px-4 text-muted-400 dark:text-muted-300"
          >
            <span>Type</span>
          </th>
          <th
            class="font-sans text-xs font-semibold text-start pb-3 px-4 text-muted-400 dark:text-muted-300"
          >
            <span>Account</span>
          </th>
        </thead>
        <tbody>
          <tr
            v-for="card in data?.data"
            :key="card.id"
            tabindex="0"
            class="hover:bg-muted-50 dark:hover:bg-muted-950 cursor-pointer transition-colors duration-200 ease-in-out"
            @click="openCardPanel(card.id, data?.data)"
          >
            <td class="p-4">
              <span
                class="font-sans text-sm font-medium leading-none text-muted-500 dark:text-muted-300"
              >
                {{
                  card.cardInfo.name === 'Kendra Wilson'
                    ? `${card.cardInfo.name} (You)`
                    : card.cardInfo.name
                }}
              </span>
            </td>
            <td class="p-4">
              <div
                class="flex items-center gap-2 me-5 md:me-0 text-muted-500 dark:text-muted-300"
              >
                <Icon name="lucide:credit-card" class="w-5 h-5" />
                <BaseText size="sm" weight="medium" lead="none">
                  {{ card.cardInfo.number }}
                </BaseText>
                <span
                  class="inline-flex items-center gap-2 font-sans text-xs py-1.5 px-3 m-1 rounded-full bg-muted-100 dark:bg-muted-600/10 text-muted-500"
                >
                  <span
                    class="h-2 w-2 rounded-full"
                    :class="[
                      card.cardInfo.status === 'active' && 'bg-success-500',
                      card.cardInfo.status === 'disabled' &&
                        'bg-muted-300 dark:bg-muted-700',
                      card.cardInfo.status === 'expired' && 'bg-warning-500',
                      card.cardInfo.status === 'locked' && 'bg-danger-500',
                    ]"
                  ></span>
                  <span>{{ card.cardInfo.status }}</span>
                </span>
              </div>
            </td>
            <td class="p-4">
              <BaseText
                weight="medium"
                lead="none"
                class="text-muted-800 dark:text-muted-100"
              >
                ${{ card.monthSpent.toFixed(2) }}
              </BaseText>
            </td>
            <td class="p-4">
              <BaseText
                weight="medium"
                lead="none"
                size="sm"
                class="text-muted-400"
              >
                {{ card.cardInfo.type }}
              </BaseText>
            </td>
            <td class="p-4">
              <BaseText
                weight="medium"
                lead="none"
                size="sm"
                class="text-muted-400"
              >
                {{ card.account }}
              </BaseText>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
