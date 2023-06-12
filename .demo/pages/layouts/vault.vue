<script setup lang="ts">
definePageMeta({
  title: 'Vault',
  preview: {
    title: 'Vault',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})
</script>

<template>
  <div class="w-full">
    <!--Header-->
    <div class="py-6 border-b border-muted-200 dark:border-muted-800">
      <div class="flex flex-col sm:flex-row text-center sm:text-start items-center gap-3">
        <BaseIconBox color="success" flavor="pastel" size="md" shape="straight" mask="blob" >
          <Icon name="ph:shield-check-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <div>
          <BaseHeading
            as="h2"
            size="2xl"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Certified Vault
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
            Your vault is properly running and certified.
          </BaseParagraph>
        </div>
        <div class="sm:ms-auto flex items-center divide-x divide-muted-200 dark:divide-muted-800">
          <div class="text-center sm:text-end px-6">
            <BaseParagraph size="sm" class="text-muted-400">FDIC Insurance</BaseParagraph>
            <BaseParagraph size="md" class="text-muted-800 dark:text-muted-100">Up to $10M</BaseParagraph>
          </div>
          <div class="text-center sm:text-end px-6">
            <BaseParagraph size="sm" class="text-muted-400">Accounts</BaseParagraph>
            <BaseParagraph size="md" class="text-muted-800 dark:text-muted-100">$15,674</BaseParagraph>
          </div>
        </div>
      </div>
    </div>
    <!--Box-->
    <div class="py-6 border-b border-muted-200 dark:border-muted-800">
      <BaseCard shape="curved" elevated class="p-8 dark:!bg-muted-950 dark:!border-muted-800">
        <div class="w-full flex flex-col sm:flex-row sm:items-center justify-between">
          <div class="flex flex-col gap-3 max-w-md ptablet:max-w-sm">
            <BaseParagraph size="sm" class="text-muted-400">FDIC Insurance</BaseParagraph>
            <BaseHeading
            as="h4"
            size="lg"
            weight="medium"
            class="text-muted-800 dark:text-white"
          >
            Your accounts are FDIC insured up to $10M
          </BaseHeading>
          <BaseParagraph size="md" class="text-muted-500">You are protected by the highest level of FDIC insurance currently available</BaseParagraph>
          </div>
          <div class="flex flex-col gap-3 ptablet:me-5 ltablet:me-20 lg:me-20 mt-10 sm:mt-0">
            <BaseParagraph size="sm" class="text-muted-400">Checkings/Savings balance</BaseParagraph>
            <BaseHeading
              as="h4"
              size="2xl"
              weight="medium"
              class="text-muted-800 dark:text-white"
            >
              $15,674
            </BaseHeading>
            <BaseTag color="primary" flavor="pastel" shape="curved" class="text-center">Up to $10M FDIC insured</BaseTag>
          </div>
        </div>
      </BaseCard>
    </div>
    <!--About-->
    <div class="py-6 border-b border-muted-200 dark:border-muted-800">
      <div class="flex items-center gap-3">
        <div>
          <BaseHeading
            as="h3"
            size="xl"
            weight="medium"
            class="text-muted-800 dark:text-white mb-2"
          >
            About the Vault
          </BaseHeading>
          <BaseParagraph size="md" class="text-muted-500 dark:text-muted-400 mb-2">
            Your vault helps you manage bank risk and and protect your funds while you scale. Maximize your FDIC insurance coverage and move cash into money market funds composed of short term, US government backed securities when it benefits to you. 
          </BaseParagraph>
          <DemoLinkArrow to="#" label="Learn more about it" />
        </div>
      </div>
    </div>
    <!--About-->
    <div class="py-6 border-b border-muted-200 dark:border-muted-800">
      <DemoWidgetInvest />
    </div>
    <!--Disclaimer-->
    <div class="py-6">
      <BaseParagraph size="xs" class="text-muted-400">
        Apollux Treasury is offered by Apollux Advisory, LLC, an SEC-registered investment adviser. Registration with the SEC does not imply a certain level of skill or training. SEC registration does not mean the SEC has approved of the services of the investment adviser. This communication does not constitute an offer to sell or the solicitation of any offer to purchase an interest in any of the Apollux Advisory, LLC investments or accounts described herein. All investments are subject to the risk of loss, including the loss of principal. No representation is made that any investment will or is likely to achieve its objectives or that any investor will or is likely to achieve results comparable to those shown. Past performance is not indicative, and is no guarantee, of future results. Investments made through Apollux Advisory are not covered by FDIC but may be covered by SIPC. Some of the data contained in this notice was obtained from sources believed to be accurate but has not been independently verified. Please see full disclosures at Apollux.com/treasury.
      </BaseParagraph>
    </div>
  </div>
</template>
