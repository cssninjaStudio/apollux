<script setup lang="ts">
definePageMeta({
  title: 'Integrations',
  preview: {
    title: 'Integrations',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})
</script>

<template>
  <div class="w-full pb-20">
    <div class="space-y-16">
      <!--Group-->
      <div>
        <!--Header-->
        <div class="py-6 border-b border-muted-200 dark:border-muted-800">
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Active (0)
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Currently active integrations
          </BaseParagraph>
        </div>
        <!--Content-->
        <div class="pt-6">
          <DemoPlaceholderMinimal
            title="No integrations"
            description="Yo have no active integrations. Start by adding one"
          />
        </div>
      </div>
      <!--Group-->
      <div>
        <!--Header-->
        <div class="py-6 border-b border-muted-200 dark:border-muted-800">
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Accounting
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Available accounting integrations
          </BaseParagraph>
        </div>
        <!--Content-->
        <div
          class="pt-6 space-y-8 divide-y divide-muted-200 dark:divide-muted-800"
        >
          <!--Item-->
          <div class="flex flex-col ltablet:flex-row lg:flex-row gap-3 pt-8">
            <BaseAvatar
              size="md"
              src="/img/logos/companies/quickbooks-full.svg"
            />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white mb-1"
              >
                Quickbooks
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                QuickBooks is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton shape="full" color="muted" condensed>
                <Icon name="lucide:link" class="w-4 h-4" />
                <span>Connect to Quickbooks</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="flex flex-col ltablet:flex-row lg:flex-row gap-3 pt-8">
            <BaseAvatar size="md" src="/img/logos/companies/xero-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white mb-1"
              >
                Xero
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Xero is a user-friendly, simple accounting software that tracks
                your business income and expenses, and organises your financial
                information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton shape="full" color="muted" condensed>
                <Icon name="lucide:link" class="w-4 h-4" />
                <span>Connect to Xero</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="flex flex-col ltablet:flex-row lg:flex-row gap-3 pt-8">
            <BaseAvatar
              size="md"
              src="/img/logos/companies/freshbooks-full.svg"
            />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white mb-1"
              >
                Freshbooks
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Freshbooks is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton shape="full" color="muted" condensed>
                <Icon name="lucide:link" class="w-4 h-4" />
                <span>Connect to Freshbooks</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
      <!--Group-->
      <div>
        <!--Header-->
        <div class="py-6 border-b border-muted-200 dark:border-muted-800">
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Other
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Other available integrations
          </BaseParagraph>
        </div>
        <!--Content-->
        <div
          class="pt-6 space-y-8 divide-y divide-muted-200 dark:divide-muted-800"
        >
          <!--Item-->
          <div class="flex flex-col ltablet:flex-row lg:flex-row gap-3 pt-8">
            <BaseAvatar size="md" src="/img/logos/companies/zapier-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white mb-1"
              >
                Zapier
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Zapier is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton shape="full" color="muted" condensed>
                <Icon name="lucide:link" class="w-4 h-4" />
                <span>Connect to Zapier</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="flex flex-col ltablet:flex-row lg:flex-row gap-3 pt-8">
            <BaseAvatar size="md" src="/img/logos/companies/google-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white mb-1"
              >
                Google Suite
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Google is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton shape="full" color="muted" condensed>
                <Icon name="lucide:link" class="w-4 h-4" />
                <span>Connect to Google</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="flex flex-col ltablet:flex-row lg:flex-row gap-3 pt-8">
            <BaseAvatar size="md" src="/img/logos/companies/stripe-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white mb-1"
              >
                Stripe
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Stripe is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton shape="full" color="muted" condensed>
                <Icon name="lucide:link" class="w-4 h-4" />
                <span>Connect to Stripe</span>
              </BaseButton>
            </div>
          </div>
          <!--Item-->
          <div class="flex flex-col ltablet:flex-row lg:flex-row gap-3 pt-8">
            <BaseAvatar size="md" src="/img/logos/companies/paypal-full.svg" />
            <div class="max-w-lg">
              <BaseHeading
                as="h4"
                size="lg"
                weight="medium"
                lead="tight"
                class="text-muted-800 dark:text-white mb-1"
              >
                Paypal
              </BaseHeading>
              <BaseParagraph
                size="sm"
                class="text-muted-500 dark:text-muted-400"
              >
                Paypal is a user-friendly, simple accounting software that
                tracks your business income and expenses, and organises your
                financial information for you, eliminating manual data entry.
              </BaseParagraph>
            </div>
            <div class="ltablet:ms-auto lg:ms-auto">
              <BaseButton shape="full" color="muted" condensed>
                <Icon name="lucide:link" class="w-4 h-4" />
                <span>Connect to Paypal</span>
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
