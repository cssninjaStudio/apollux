<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'

const months = [
  {
    id: 'january',
    label: 'Jan',
  },
  {
    id: 'february',
    label: 'Feb',
  },
  {
    id: 'march',
    label: 'Mar',
  },
  {
    id: 'april',
    label: 'Apr',
  },
  {
    id: 'may',
    label: 'May',
  },
  {
    id: 'june',
    label: 'Jun',
  },
  {
    id: 'july',
    label: 'Jul',
  },
  {
    id: 'august',
    label: 'Aug',
  },
  {
    id: 'september',
    label: 'Sep',
  },
  {
    id: 'october',
    label: 'Oct',
  },
  {
    id: 'november',
    label: 'Nov',
  },
  {
    id: 'december',
    label: 'Dec',
  },
]

const defaultKeywords = [
  'Wallmart',
  'Credit Card',
  "Harry's LLC",
  'Expenses',
  'Income',
  'Groceries',
  'Toys',
  'Restaurant',
]

const activeFilterTab = ref('filter-1')
const cardTypes = ref([''])
const cardholders = ref([''])
const status = ref([''])
const accounts = ref([''])
const spentStart = ref<number>()
const spentEnd = ref<number>()
const timeCategory = ref('all')
const timeCategoryFrom = ref('')
const timeCategoryTo = ref('')
</script>

<template>
  <div class="group relative hidden md:block">
    <Menu as="div" class="" v-slot="{ close }">
      <MenuButton as="template">
        <BaseButton shape="full" color="muted" size="sm">
          <Icon name="lucide:filter" class="w-4 h-4" />
          <span>Add Filter</span>
        </BaseButton>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute top-11 start-0 w-[660px] grid grid-cols-12 bg-white dark:bg-muted-950 rounded-lg overflow-hidden border border-muted-200 dark:border-muted-800 shadow-xl shadow-muted-400/20 dark:shadow-muted-800/20"
        >
          <div class="col-span-4 p-6 space-y-2 bg-muted-50 dark:bg-muted-900">
            <!--Menu item-->
            <button
              type="button"
              data-tab="tab-1"
              class="w-full flex items-center gap-2 py-2 px-3 rounded-lg border-2 font-sans text-sm cursor-pointer transition-all duration-300 tw-accessibility click-blur"
              :class="
                activeFilterTab === 'filter-1'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-1'"
            >
              <Icon name="lucide:credit-card" class="w-4 h-4" />
              <span>Card type</span>
              <Icon name="lucide:chevron-right" class="w-4 h-4 ms-auto" />
            </button>
            <!--Menu item-->
            <button
              type="button"
              data-tab="tab-2"
              class="w-full flex items-center gap-2 py-2 px-3 rounded-lg border-2 font-sans text-sm cursor-pointer transition-all duration-300 tw-accessibility click-blur"
              :class="
                activeFilterTab === 'filter-2'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-2'"
            >
              <Icon name="lucide:user" class="w-4 h-4" />
              <span>Cardholder</span>
              <Icon name="lucide:chevron-right" class="w-4 h-4 ms-auto" />
            </button>
            <!--Menu item-->
            <button
              type="button"
              data-tab="tab-3"
              class="w-full flex items-center gap-2 py-2 px-3 rounded-lg border-2 font-sans text-sm cursor-pointer transition-all duration-300 tw-accessibility click-blur"
              :class="
                activeFilterTab === 'filter-3'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-3'"
            >
              <Icon name="lucide:loader" class="w-4 h-4" />
              <span>Status</span>
              <Icon name="lucide:chevron-right" class="w-4 h-4 ms-auto" />
            </button>
            <!--Menu item-->
            <button
              type="button"
              data-tab="tab-4"
              class="w-full flex items-center gap-2 py-2 px-3 rounded-lg border-2 font-sans text-sm cursor-pointer transition-all duration-300 tw-accessibility click-blur"
              :class="
                activeFilterTab === 'filter-4'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-4'"
            >
              <Icon name="lucide:banknote" class="w-4 h-4" />
              <span>Spendings</span>
              <Icon name="lucide:chevron-right" class="w-4 h-4 ms-auto" />
            </button>
            <!--Menu item-->
            <button
              type="button"
              data-tab="tab-5"
              class="w-full flex items-center gap-2 py-2 px-3 rounded-lg border-2 font-sans text-sm cursor-pointer transition-all duration-300 tw-accessibility click-blur"
              :class="
                activeFilterTab === 'filter-5'
                  ? 'text-primary-500 border-primary-500 bg-primary-500/10'
                  : 'text-muted-500 hover:text-muted-600 dark:hover:text-muted-300 border-muted-50 dark:border-muted-900 hover:bg-muted-200 dark:hover:bg-muted-800'
              "
              @click="activeFilterTab = 'filter-5'"
            >
              <Icon name="lucide:calendar" class="w-4 h-4" />
              <span>Creation date</span>
              <Icon name="lucide:chevron-right" class="w-4 h-4 ms-auto" />
            </button>
          </div>

          <!--Filters-->
          <div class="col-span-8 min-h-[350px] p-6">
            <!--Filter 1-->
            <div v-if="activeFilterTab === 'filter-1'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="font-sans text-sm text-muted-400">
                      Filter card types
                    </p>
                    <button
                      type="button"
                      class="font-sans text-sm text-medium text-primary-500 hover:underline underline-offset-4"
                      @click="
                        status = ['Physical', 'Physical debit', 'Virtual']
                      "
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="mt-6 mb-4 border-t border-muted-200 dark:border-muted-800"
                  />
                  <div class="space-y-4">
                    <!--types-->
                    <div>
                      <BaseCheckbox
                        v-model="cardTypes"
                        color="primary"
                        label="Physical"
                        value="Physical"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardTypes"
                        color="primary"
                        label="Physical debit"
                        value="Physical debit"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardTypes"
                        color="primary"
                        label="Virtual"
                        value="Virtual"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 2-->
            <div v-else-if="activeFilterTab === 'filter-2'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="font-sans text-sm text-muted-400">
                      Filter cardholders
                    </p>
                    <button
                      type="button"
                      class="font-sans text-sm text-medium text-primary-500 hover:underline underline-offset-4"
                      @click="
                        status = [
                          'Kendra Wilson (You)',
                          'Kaleb Wilson',
                          'Amber Wilson',
                          'Jennifer Wilson',
                          'John Baxter',
                        ]
                      "
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="mt-6 mb-4 border-t border-muted-200 dark:border-muted-800"
                  />

                  <div class="space-y-4">
                    <!--Cardholders-->
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Kendra Wilson (You)"
                        value="Kendra Wilson (You)"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Kaleb Wilson"
                        value="Kaleb Wilson"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Amber Wilson"
                        value="Amber Wilson"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="Jennifer Wilson"
                        value="Jennifer Wilson"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="cardholders"
                        color="primary"
                        label="John Baxter"
                        value="John Baxter"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 3-->
            <div v-else-if="activeFilterTab === 'filter-3'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="font-sans text-sm text-muted-400">
                      Select status to filter
                    </p>
                    <button
                      type="button"
                      class="font-sans text-sm text-medium text-primary-500 hover:underline underline-offset-4"
                      @click="status = ['active', 'disabled', 'locked']"
                    >
                      Select All
                    </button>
                  </div>
                  <hr
                    class="mt-6 mb-4 border-t border-muted-200 dark:border-muted-800"
                  />

                  <div class="space-y-4">
                    <!--Status-->
                    <div>
                      <BaseCheckbox
                        v-model="status"
                        color="primary"
                        label="Active"
                        value="active"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="status"
                        color="primary"
                        label="Disabled"
                        value="disabled"
                      />
                    </div>
                    <div>
                      <BaseCheckbox
                        v-model="status"
                        color="primary"
                        label="Locked"
                        value="locked"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 4-->
            <div v-else-if="activeFilterTab === 'filter-4'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative flex items-center justify-between">
                    <p class="font-sans text-sm text-muted-400">
                      Spent this month
                    </p>
                  </div>
                  <hr
                    class="mt-6 mb-4 border-t border-muted-200 dark:border-muted-800"
                  />

                  <div class="space-y-4">
                    <!--Account-->
                    <div>
                      <BaseInput
                        v-model="spentStart"
                        type="number"
                        icon="lucide:chevron-right"
                        label="At least"
                        placeholder=""
                      />
                    </div>
                    <div>
                      <BaseInput
                        v-model="spentEnd"
                        type="number"
                        icon="lucide:chevron-left"
                        label="No more than..."
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Filter 5-->
            <div v-else-if="activeFilterTab === 'filter-5'">
              <div class="flex flex-col">
                <div class="px-3">
                  <div class="relative">
                    <BaseSelect
                      v-model="timeCategory"
                      label="Show transactions made within"
                      class="appearance-none px-3 py-2 h-10 text-sm leading-5 font-sans w-full rounded border border-muted-300 bg-white text-muted-600 placeholder-gray-300 focus:border-muted-300 focus:shadow-lg dark:placeholder-gray-600 dark:bg-muted-900 dark:text-muted-200 dark:border-muted-800 dark:focus:border-muted-800 tw-accessibility transition-all duration-300"
                    >
                      <option value="all">All time</option>
                      <option value="30_days">Last 30 days</option>
                      <option value="this_month">This month</option>
                      <option value="last_month">Last month</option>
                      <option value="this_year">This year</option>
                      <option value="last_year">Last year</option>
                    </BaseSelect>
                  </div>
                  <hr
                    class="mt-6 mb-4 border-t border-muted-200 dark:border-muted-800"
                  />
                  <BaseText size="xs" class="text-muted-400 mb-4"
                    >Or choose a date range</BaseText
                  >
                  <div class="grid grid-cols-2 gap-8">
                    <!--Calendar group-->
                    <div>
                      <!--Calendar-->
                      <div class="flex flex-col">
                        <div
                          class="flex items-center justify-between px-3 mb-2"
                        >
                          <button
                            type="button"
                            class="flex items-center justify-center w-6 text-muted-400 cursor-pointer"
                          >
                            <Icon name="lucide:arrow-left" class="w-4 h-4" />
                          </button>
                          <span
                            class="font-heading text-sm text-muted-700 dark:text-muted-100"
                          >
                            2023
                          </span>
                          <button
                            type="button"
                            class="flex items-center justify-center w-6 text-muted-400 cursor-pointer"
                          >
                            <Icon name="lucide:arrow-right" class="w-4 h-4" />
                          </button>
                        </div>
                        <div class="grid grid-cols-3 gap-1">
                          <div
                            v-for="month in months"
                            :key="month.id"
                            class="flex items-center justify-center"
                          >
                            <BaseRadioHeadless
                              v-model="timeCategoryFrom"
                              name="radio_date_from"
                              :value="month.id"
                            >
                              <button
                                type="button"
                                class="font-sans text-xs text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 flex items-center justify-center peer-checked:text-primary-500 peer-checked:bg-primary-500/10 h-8 w-8 rounded-full group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 transition-colors duration-200"
                              >
                                {{ month.label }}
                              </button>
                            </BaseRadioHeadless>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--Calendar group-->
                    <div>
                      <!--Calendar-->
                      <div class="flex flex-col">
                        <div
                          class="flex items-center justify-between px-3 mb-2"
                        >
                          <button
                            type="button"
                            class="flex items-center justify-center w-6 text-muted-400 cursor-pointer"
                          >
                            <Icon name="lucide:arrow-left" class="w-4 h-4" />
                          </button>
                          <span
                            class="font-heading text-sm text-muted-700 dark:text-muted-100"
                          >
                            2023
                          </span>
                          <button
                            type="button"
                            class="flex items-center justify-center w-6 text-muted-400 cursor-pointer"
                          >
                            <Icon name="lucide:arrow-right" class="w-4 h-4" />
                          </button>
                        </div>
                        <div class="grid grid-cols-3 gap-1">
                          <div
                            v-for="month in months"
                            :key="month.id"
                            class="flex items-center justify-center"
                          >
                            <BaseRadioHeadless
                              v-model="timeCategoryTo"
                              name="radio_date_to"
                              :value="month.id"
                            >
                              <button
                                type="button"
                                class="font-sans text-xs text-muted-500 dark:text-muted-400 group-hover/nui-radio-headless:text-muted-600 dark:group-hover/nui-radio-headless:text-muted-200 flex items-center justify-center peer-checked:text-primary-500 peer-checked:bg-primary-500/10 h-8 w-8 rounded-full group-hover/nui-radio-headless:bg-muted-100 dark:group-hover/nui-radio-headless:bg-muted-800 transition-colors duration-200"
                              >
                                {{ month.label }}
                              </button>
                            </BaseRadioHeadless>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
