<script setup lang="ts">
definePageMeta({
  title: 'Invoice',
  preview: {
    title: 'Invoice',
    description: 'For services and accounting',
    categories: ['layouts'],
    src: '/img/screens/layouts-invoice.png',
    srcDark: '/img/screens/layouts-invoice-dark.png',
    order: 8,
  },
})

const pdfAttachment = ref(true)
const itemName = ref('UI/UX Design')
const itemHours = ref(20)
const hourRate = ref(50.45)
const taxRate = ref(6.5)

const itemSubtotal = computed(() =>
  (
    itemHours.value * hourRate.value +
    itemHours.value * hourRate.value * (taxRate.value / 100)
  ).toFixed(2),
)
</script>

<template>
  <div class="pb-20">
    <div class="grid grid-cols-12 gap-6">
      <div class="col-span-12 ltablet:col-span-8 lg:col-span-8">
        <div class="flex flex-col gap-6">
          <BaseCard shape="curved" color="white-contrast" elevated class="p-6">
            <div class="flex items-center gap-4 mb-8">
              <BaseAvatar
                src="/img/logos/companies/amazon.svg"
                alt="Amazon"
                size="md"
                shape="straight"
                mask="blob"
                class="bg-muted-100 dark:bg-muted-900"
              />
              <div>
                <BaseHeading
                  weight="medium"
                  size="lg"
                  lead="none"
                  class="line-clamp-1"
                >
                  Amazon
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                  Ecommerce Company
                </BaseParagraph>
              </div>
              <div class="ms-auto">
                <div class="text-right">
                  <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                    48, Church Street
                  </BaseParagraph>
                  <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                    Los Angeles, 92384
                  </BaseParagraph>
                  <BaseParagraph size="sm" class="text-muted-400 line-clamp-1">
                    United States
                  </BaseParagraph>
                </div>
              </div>
            </div>
            <div
              class="relative p-8 bg-primary-800 rounded-2xl flex flex-col sm:flex-row gap-y-6 justify-between overflow-hidden"
            >
              <div
                class="h-48 w-48 rounded-full bg-white/10 absolute -bottom-10 -start-10"
              ></div>
              <div
                class="hidden sm:block h-80 w-80 rounded-full bg-white/10 absolute -top-10 -end-24"
              ></div>
              <div class="relative z-20">
                <BaseHeading
                  as="h5"
                  weight="medium"
                  size="sm"
                  lead="none"
                  class="text-white mb-1"
                >
                  Invoice number
                </BaseHeading>
                <BaseParagraph weight="semibold" class="text-white mb-2"
                  >INV-2023-276</BaseParagraph
                >
                <BaseParagraph size="sm" class="text-white mb-1"
                  >Issued date: Jun 11, 2023</BaseParagraph
                >
                <BaseParagraph size="sm" class="text-white"
                  >Due date: Jul 11, 2023</BaseParagraph
                >
              </div>
              <div class="relative z-20 sm:text-end">
                <BaseHeading
                  as="h5"
                  weight="medium"
                  size="sm"
                  lead="none"
                  class="text-white mb-1"
                >
                  Billed to
                </BaseHeading>
                <BaseParagraph weight="semibold" class="text-white mb-2"
                  >Kendra Wilson</BaseParagraph
                >
                <BaseParagraph size="sm" class="text-white mb-1"
                  >21, Jumpwall Street</BaseParagraph
                >
                <BaseParagraph size="sm" class="text-white mb-1"
                  >Suite G2, Block 23</BaseParagraph
                >
                <BaseParagraph size="sm" class="text-white"
                  >Los Angeles, USA</BaseParagraph
                >
              </div>
            </div>
            <div class="py-6">
              <div class="flex items-center mb-8">
                <div>
                  <BaseHeading
                    weight="medium"
                    size="sm"
                    class="text-mute-800 dark:text-muted-100"
                    >Invoice details</BaseHeading
                  >
                  <BaseParagraph size="xs" class="text-muted-400"
                    >List the invoiced items</BaseParagraph
                  >
                </div>
                <div class="ms-auto">
                  <BaseButton shape="full">Customize</BaseButton>
                </div>
              </div>
              <div
                class="w-full border-b border-muted-200 dark:border-muted-800 pb-8 overflow-x-auto"
              >
                <table class="text-start w-full">
                  <thead>
                    <th
                      class="min-w-[200px] sm:min-w-[auto] sm:w-1/3 text-start px-2"
                    >
                      <BaseText
                        size="xs"
                        weight="semibold"
                        class="text-muted-400"
                      >
                        Item Name
                      </BaseText>
                    </th>
                    <th class="min-w-[90px] sm:min-w-[auto] text-start px-2">
                      <BaseText
                        size="xs"
                        weight="semibold"
                        class="text-muted-400"
                      >
                        Hours
                      </BaseText>
                    </th>
                    <th class="min-w-[120px] sm:min-w-[auto] text-start px-2">
                      <BaseText
                        size="xs"
                        weight="semibold"
                        class="text-muted-400"
                      >
                        Rate/hr
                      </BaseText>
                    </th>
                    <th class="min-w-[60px] sm:min-w-[60px] text-start px-2">
                      <BaseText
                        size="xs"
                        weight="semibold"
                        class="text-muted-400"
                      >
                        Tax
                      </BaseText>
                    </th>
                    <th class="min-w-[120px] sm:min-w-[120px] text-start px-2">
                      <BaseText
                        size="xs"
                        weight="semibold"
                        class="text-muted-400"
                      >
                        Subtotal
                      </BaseText>
                    </th>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-4 px-2">
                        <BaseInput
                          v-model="itemName"
                          placeholder="Name of the item"
                        />
                      </td>
                      <td class="py-4 px-2">
                        <BaseInput v-model="itemHours" placeholder="0" />
                      </td>
                      <td class="py-4 px-2">
                        <BaseInput
                          v-model="hourRate"
                          icon="lucide:dollar-sign"
                          placeholder="0.00"
                        />
                      </td>
                      <td class="py-4 px-2">
                        <BaseInput
                          v-model="taxRate"
                          icon="lucide:percent"
                          placeholder="0"
                        />
                      </td>
                      <td class="py-4 px-2">
                        <BaseInput
                          v-model="itemSubtotal"
                          icon="lucide:dollar-sign"
                          placeholder="0.00"
                          readonly
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    type="button"
                    class="flex items-center gap-1 text-primary-500 hover:underline underline-offset-4"
                  >
                    <Icon name="lucide:plus" class="w-4 h-4" />
                    <BaseText size="xs" weight="semibold"
                      >Add a new item</BaseText
                    >
                  </button>
                </div>
              </div>
              <div class="w-full pt-8">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <!--Payment method-->
                  <div>
                    <div class="flex items-center justify-between mb-6">
                      <BaseHeading
                        weight="medium"
                        size="sm"
                        class="text-muted-800 dark:text-muted-100"
                        >Payment method</BaseHeading
                      >
                      <BaseButtonIcon
                        to="/layouts/card/new"
                        shape="curved"
                        condensed
                      >
                        <Icon name="lucide:edit-2" class="w-4 h-4" />
                      </BaseButtonIcon>
                    </div>
                    <div class="bg-muted-100 dark:bg-muted-900 p-6 rounded-xl">
                      <div class="flex items-center justify-between mb-6">
                        <div>
                          <BaseHeading as="h4" size="sm">Paypal</BaseHeading>
                        </div>
                        <div>
                          <Icon name="logos:paypal" class="w-6 h-6" />
                        </div>
                      </div>
                      <div class="space-y-1">
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400"
                            >Name</BaseParagraph
                          >
                          <BaseParagraph
                            size="sm"
                            weight="semibold"
                            class="text-muted-800 dark:text-muted-100"
                            >Kendra Wilson</BaseParagraph
                          >
                        </div>
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400"
                            >Account</BaseParagraph
                          >
                          <BaseParagraph
                            size="sm"
                            weight="medium"
                            class="text-muted-800 dark:text-muted-100"
                            >3524 65456 3245 4869</BaseParagraph
                          >
                        </div>
                        <div class="flex items-center justify-between">
                          <BaseParagraph size="sm" class="text-muted-400"
                            >Routing</BaseParagraph
                          >
                          <BaseParagraph
                            size="sm"
                            weight="medium"
                            class="text-muted-800 dark:text-muted-100"
                            >4238293</BaseParagraph
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--Total-->
                  <div class="h-full flex flex-col">
                    <div class="space-y-2 mb-6 sm:ps-10">
                      <div class="flex items-center justify-between mb-6">
                        <BaseHeading
                          weight="medium"
                          size="sm"
                          class="text-muted-800 dark:text-muted-100"
                          >Amount billed</BaseHeading
                        >
                        <BaseButtonIcon
                          to="/layouts/card/new"
                          shape="curved"
                          condensed
                        >
                          <Icon name="lucide:printer" class="w-4 h-4" />
                        </BaseButtonIcon>
                      </div>
                      <div class="flex items-center justify-between">
                        <BaseParagraph size="sm" class="text-muted-400"
                          >Subtotal</BaseParagraph
                        >
                        <BaseParagraph
                          size="sm"
                          weight="semibold"
                          class="text-muted-800 dark:text-muted-100"
                          >{{ asDollar(1525.18) }}</BaseParagraph
                        >
                      </div>
                      <div class="flex items-center justify-between">
                        <BaseParagraph size="sm" class="text-muted-400"
                          >Discount</BaseParagraph
                        >
                        <BaseParagraph
                          size="sm"
                          weight="semibold"
                          class="text-muted-800 dark:text-muted-100"
                          >{{ asDollar(0.0) }}</BaseParagraph
                        >
                      </div>
                      <div class="flex items-center justify-between">
                        <BaseParagraph size="sm" class="text-muted-400"
                          >Taxes</BaseParagraph
                        >
                        <BaseParagraph
                          size="sm"
                          weight="semibold"
                          class="text-muted-800 dark:text-muted-100"
                          >{{ asDollar(0.0) }}</BaseParagraph
                        >
                      </div>
                    </div>
                    <div class="sm:ps-10 mt-auto">
                      <div
                        class="flex items-center justify-between border-t border-muted-200 dark:border-muted-800 pt-6"
                      >
                        <BaseParagraph size="sm" class="text-muted-400"
                          >Total</BaseParagraph
                        >
                        <BaseParagraph
                          size="sm"
                          weight="semibold"
                          class="text-muted-800 dark:text-muted-100"
                          >{{ asDollar(parseInt(itemSubtotal)) }}</BaseParagraph
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
      <div class="col-span-12 ltablet:col-span-4 lg:col-span-4">
        <div class="flex flex-col gap-6">
          <!--Customer-->
          <BaseCard shape="curved" color="white-contrast" elevated class="p-6">
            <div
              class="flex items-center gap-4 mb-6 pb-8 border-b border-muted-200 dark:border-muted-800"
            >
              <BaseAvatar
                src="/img/avatars/10.svg"
                alt="Gitlab"
                size="md"
                shape="straight"
                mask="blob"
                class="bg-muted-100 dark:bg-muted-900"
              />
              <div>
                <BaseHeading
                  weight="medium"
                  size="md"
                  lead="none"
                  class="line-clamp-1"
                >
                  Kendra Wilson
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                  kendraw@gmail.com
                </BaseParagraph>
              </div>
            </div>
            <div class="mb-6">
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                148, Victoria Street, Suite D23, 3rd floor
              </BaseParagraph>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
                >New York, USA</BaseParagraph
              >
            </div>
            <div>
              <BaseButton
                flavor="pastel"
                shape="curved"
                color="primary"
                class="w-full"
              >
                Edit Customer
              </BaseButton>
            </div>
          </BaseCard>
          <!--Amount-->
          <BaseCard shape="curved" color="white-contrast" elevated class="p-6">
            <div class="mb-6">
              <BaseHeading
                weight="medium"
                size="md"
                lead="none"
                class="line-clamp-1"
              >
                Invoice amount
              </BaseHeading>
              <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                Expressed in USD
              </BaseParagraph>
            </div>
            <div class="pb-4 border-b border-muted-200 dark:border-muted-800">
              <BaseHeading
                weight="semibold"
                size="2xl"
                lead="none"
                class="mb-3"
              >
                {{ asDollar(parseInt(itemSubtotal)) }}
                <BaseText size="xs" class="text-muted-400 inline">
                  (Tax incl.)
                </BaseText>
              </BaseHeading>
              <BaseTag shape="full" flavor="pastel" color="muted">
                Due on Jul 11, 2023
              </BaseTag>
            </div>
            <div class="flex items-center justify-between pt-4">
              <BaseText size="sm" class="text-muted-400"
                >Attach PDF in mail</BaseText
              >
              <div>
                <BaseSwitchBall v-model="pdfAttachment" color="primary" />
              </div>
            </div>
          </BaseCard>
          <!--Actions-->
          <BaseCard shape="curved" color="white-contrast" elevated class="p-6">
            <div class="flex gap-4">
              <BaseButton shape="curved" class="w-full">
                <Icon name="lucide:eye" class="w-4 h-4" />
                <span>Preview</span>
              </BaseButton>
              <BaseButton shape="curved" class="w-full">
                <Icon name="lucide:download" class="w-4 h-4" />
                <span>Download</span>
              </BaseButton>
            </div>
          </BaseCard>
          <!--Submit-->
          <div>
            <BaseButton shape="curved" color="primary" class="w-full !h-12">
              <Icon name="lucide:mail" class="w-4 h-4" />
              <span>Send Invoice</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
