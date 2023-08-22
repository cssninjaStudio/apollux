<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    account?: any
  }>(),
  {
    account: undefined,
  },
)

const { close } = usePanels()

const demoAreaBalance = reactive(useDemoAreaBalance())

function useDemoAreaBalance() {
  const { primary } = useTailwindColors()
  const type = 'area'
  const height = 250

  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    colors: [primary.value],
    legend: {
      show: false,
      position: 'top',
    },
    grid: {
      show: false,
      padding: {
        left: -10,
        right: 0,
        bottom: 10,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2022-09-19T00:00:00.000Z',
        '2022-09-20T01:30:00.000Z',
        '2022-09-21T02:30:00.000Z',
        '2022-09-22T03:30:00.000Z',
        '2022-09-23T04:30:00.000Z',
        '2022-09-24T05:30:00.000Z',
        '2022-09-25T06:30:00.000Z',
      ],
    },
    yaxis: {
      labels: {
        show: false,
        offsetX: -15,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
      y: {
        formatter: (val: number) => `$${val}`,
      },
    },
  }

  const series = ref(props.account.history)

  return {
    type,
    height,
    options,
    series,
  }
}
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
        Account Details
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
      class="relative h-[calc(100%_-_5rem)] w-full overflow-y-auto overflow-x-hidden nui-slimscroll p-6"
    >
      <!--Info-->
      <div class="flex items-center justify-between">
        <div>
          <BaseHeading
            as="h4"
            size="lg"
            weight="medium"
            class="text-muted-800 dark:text-muted-100 capitalize"
          >
            {{ props.account.type }} {{ props.account.number }}
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-400">
            {{ account.owner.name }}
          </BaseParagraph>
        </div>
        <!--Balance-->
        <div class="py-6 pe-4 text-end">
          <BaseParagraph size="xs" class="text-muted-400 mb-1">
            Account balance
          </BaseParagraph>
          <BaseParagraph
            size="2xl"
            weight="medium"
            class="mb-1 text-muted-800 dark:text-muted-100"
          >
            ${{ account.balance.toFixed(2) }}
          </BaseParagraph>
        </div>
      </div>
      <!--Content-->
      <div class="space-y-4 py-6 pe-4">
        <!--Item-->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-muted-800"></div>
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-40">
              Routing number
            </BaseParagraph>
            <BaseText data-nui-tooltip="The wire routing number">
              <Icon name="lucide:help-circle" class="h-3 w-3 text-muted-400" />
            </BaseText>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.routingNumber }}
          </BaseText>
        </div>
        <!--Item-->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-muted-500"></div>
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-40">
              Account number
            </BaseParagraph>
            <BaseText data-nui-tooltip="Your full account number">
              <Icon name="lucide:help-circle" class="h-3 w-3 text-muted-400" />
            </BaseText>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.accountNumber }}
          </BaseText>
        </div>
        <!--Item-->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-muted-300"></div>
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-40">
              IBAN
            </BaseParagraph>
            <BaseText data-nui-tooltip="The international identifier">
              <Icon name="lucide:help-circle" class="h-3 w-3 text-muted-400" />
            </BaseText>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.iban }}
          </BaseText>
        </div>
        <!--Item-->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-muted-200"></div>
            <BaseParagraph size="sm" class="text-muted-700 dark:text-muted-40">
              Bank code
            </BaseParagraph>
          </div>
          <BaseText
            size="sm"
            weight="medium"
            class="text-muted-800 dark:text-muted-100"
          >
            {{ account.details.bankCode }}
          </BaseText>
        </div>
      </div>

      <div class="p-4 -mt-6">
        <AddonApexcharts v-bind="demoAreaBalance" />
      </div>
    </div>
  </div>
</template>
