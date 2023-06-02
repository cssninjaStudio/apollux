<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    card?: any
  }>(),
  {
    card: undefined,
  },
)

const { close } = usePanels()

const detailsExpanded = ref(false)
const daySpentProgress = computed(() => {
  return (props.card?.daySpent / props.card?.limits.spend) * 100
})
</script>

<template>
  <div
    class="border-muted-200 dark:border-muted-800 dark:bg-muted-950 border-l bg-white"
  >
    <div
      class="w-full h-20 flex items-center justify-between px-6 border-b border-muted-200 dark:border-muted-800"
    >
      <BaseHeading
        as="h3"
        size="xs"
        weight="semibold"
        class="uppercase text-muted-500 dark:text-muted-100"
      >
        Card Details
      </BaseHeading>

      <!--Close button-->
      <button
        type="button"
        class="flex items-center justify-center w-10 h-10 nui-mask nui-mask-blob hover:bg-muted-100 dark:hover:bg-muted-800 text-muted-700 dark:text-muted-400 transition-colors duration-300 cursor-pointer"
        @click="close"
      >
        <Icon name="lucide:arrow-right" class="h-4 w-4" />
      </button>
    </div>

    <div
      class="relative h-[calc(100%_-_80px)] overflow-y-auto slimscroll w-full p-6"
    >
      <div class="mb-3">
        <!--Info-->
        <div class="flex items-center justify-between">
          <div>
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              {{ card.name }}
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              {{ card.cardInfo.name }}
            </BaseParagraph>
          </div>
          <div class="text-right">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="text-muted-800 dark:text-muted-100"
            >
              ${{ card.daySpent.toFixed(2) }}
            </BaseHeading>
            <BaseParagraph size="xs" class="text-muted-400">
              Spent today
            </BaseParagraph>
          </div>
        </div>
        <!--Progress-->
        <BaseProgress :value="daySpentProgress" size="xs" class="my-2" />

        <!--Card details-->
        <div class="pt-2">
          <button
            type="button"
            class="w-full flex items-center mb-3"
            @click="detailsExpanded = !detailsExpanded"
          >
            <span
              class="w-full flex items-center justify-between text-muted-500 dark:text-muted-400"
            >
              <span class="flex items-center gap-1">
                <Icon
                  name="lucide:chevron-down"
                  class="w-3 h-3 transition-transform duration-300"
                  :class="detailsExpanded ? 'rotate-180' : ''"
                />
                <BaseText v-if="!detailsExpanded" size="xs">
                  Show details
                </BaseText>
                <BaseText v-if="detailsExpanded" size="xs">
                  Hide details
                </BaseText>
              </span>

              <BaseText v-if="!detailsExpanded" size="xs">
                ${{ card.funds.available.toFixed(2) }} available · ${{
                  card.limits.spend.toFixed(2)
                }}
                limit
              </BaseText>
            </span>
          </button>
          <!--Collapse-->
          <div
            v-if="detailsExpanded"
            class="p-6 bg-muted-100 dark:bg-muted-900 rounded-xl"
          >
            <!--Head-->
            <div
              class="flex items-center justify-between pb-3 mb-3 border-b border-muted-200 dark:border-muted-800"
            >
              <BaseHeading
                as="h5"
                size="xs"
                weight="medium"
                class="text-muted-600 dark:text-muted-300"
              >
                Total daily limit
              </BaseHeading>
              <BaseText
                size="sm"
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                ${{ (card.limits.spend + card.limits.withdraw).toFixed(2) }}
              </BaseText>
            </div>
            <!--Content-->
            <div class="space-y-4">
              <!--Item-->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="h-2 w-2 rounded-full bg-muted-800"></div>
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Posted
                  </BaseParagraph>
                  <span data-tooltip="Settled transactions">
                    <Icon
                      name="lucide:help-circle"
                      class="w-3 h-3 text-muted-400"
                    />
                  </span>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.posted.toFixed(2) }}
                </BaseText>
              </div>
              <!--Item-->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="h-2 w-2 rounded-full bg-muted-500"></div>
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Pending
                  </BaseParagraph>
                  <span
                    data-tooltip="Unsettled transactions or temporary holds"
                  >
                    <Icon
                      name="lucide:help-circle"
                      class="w-3 h-3 text-muted-400"
                    />
                  </span>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.pending.toFixed(2) }}
                </BaseText>
              </div>
              <!--Item-->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="h-2 w-2 rounded-full bg-muted-300"></div>
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Unavailable
                  </BaseParagraph>
                  <span
                    data-tooltip="Unavailable funds due to spend on other cards. Reach out for assistance."
                  >
                    <Icon
                      name="lucide:help-circle"
                      class="w-3 h-3 text-muted-400"
                    />
                  </span>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.unavailable.toFixed(2) }}
                </BaseText>
              </div>
              <!--Item-->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <div class="h-2 w-2 rounded-full bg-white"></div>
                  <BaseParagraph
                    size="sm"
                    class="text-muted-700 dark:text-muted-400"
                  >
                    Available to spend
                  </BaseParagraph>
                </div>
                <BaseText
                  size="sm"
                  weight="medium"
                  class="text-muted-800 dark:text-muted-100"
                >
                  ${{ card.funds.available.toFixed(2) }}
                </BaseText>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full mt-4 space-y-5">
          <!--Card mockup-->
          <DemoCreditCardReal
            :status="card.cardInfo.status"
            :name="card.cardInfo.name"
            :number="card.cardInfo.number"
            :brand="card.cardInfo.brand"
          />
          <!--Card info / actions-->
          <div class="space-y-4 px-2">
            <BaseParagraph size="xs" class="text-center text-muted-400">
              This card was issued on {{ card.creationDate }}
            </BaseParagraph>
            <div class="flex justify-between items-center gap-2">
              <BaseButton shape="full" condensed> Disable </BaseButton>
              <BaseButton flavor="pastel" color="muted" shape="full" condensed>
                Replace
              </BaseButton>
              <BaseButton flavor="pastel" color="muted" shape="full" condensed>
                Cancel
              </BaseButton>
            </div>
          </div>
          <!--Billing address-->
          <div class="border-t border-muted-200 dark:border-muted-900">
            <div class="pt-6">
              <BaseParagraph size="xs" class="text-muted-400 mb-2">
                Billing address
              </BaseParagraph>
              <BaseParagraph
                v-for="item in card.address"
                :key="item"
                size="sm"
                weight="medium"
                class="text-muted-600 dark:text-muted-300"
                >{{ item }}</BaseParagraph
              >
            </div>
          </div>
          <!--Summary-->
          <div class="border-t border-muted-200 dark:border-muted-900">
            <div class="space-y-4 py-6">
              <!--item-->
              <div class="flex items-center justify-between">
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  Daily spend limit
                </BaseParagraph>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  ${{ card.limits.spend.toFixed(2) }}
                </BaseParagraph>
              </div>
              <!--item-->
              <div class="flex items-center justify-between">
                <div>
                  <BaseParagraph
                    size="sm"
                    weight="medium"
                    class="text-muted-600 dark:text-muted-300"
                  >
                    Daily withdrawal limit
                  </BaseParagraph>
                  <BaseParagraph size="xs" class="text-muted-400 mb-1">
                    Cash withdrawn today
                  </BaseParagraph>
                </div>
                <div>
                  <BaseParagraph
                    size="sm"
                    weight="medium"
                    class="text-muted-600 mb-1 dark:text-muted-300"
                  >
                    ${{ card.limits.withdraw.toFixed(2) }}
                  </BaseParagraph>
                  <BaseParagraph size="xs" class="text-muted-400 mb-1">
                    ${{ card.dayWithdraw.toFixed(2) }}
                  </BaseParagraph>
                </div>
              </div>
              <!--item-->
              <div class="flex items-center justify-between">
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  Account
                </BaseParagraph>

                <NuxtLink
                  to="#"
                  class="font-sans font-medium text-sm text-muted-600 dark:text-muted-300 hover:underline underline-offset-4"
                  data-tooltip="View Account"
                >
                  Checking {{ card.account }}
                </NuxtLink>
              </div>
              <!--item-->
              <div class="flex items-center justify-between">
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300"
                >
                  Card type
                </BaseParagraph>
                <BaseParagraph
                  size="sm"
                  weight="medium"
                  class="text-muted-600 dark:text-muted-300 capitalize"
                >
                  {{ card.cardInfo.type }}
                </BaseParagraph>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
