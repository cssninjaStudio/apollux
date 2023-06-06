<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 md:col-span-8">
      <BaseCard
        shape="curved"
        class="relative flex flex-col sm:flex-row gap-4 dark:!bg-muted-950 dark:!border-muted-800 overflow-hidden"
      >
        <div class="flex flex-col p-6">
          <BaseHeading
            as="h3"
            weight="medium"
            size="lg"
            class="text-muted-800 dark:text-muted-100 mb-2"
          >
            Explore investments
          </BaseHeading>
          <BaseParagraph
            size="sm"
            class="text-muted-500 dark:text-muted-400 mb-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Idem
            adhuc; Igitur neque stultorum quisquam beatus.
          </BaseParagraph>
          <div class="mt-auto mb-1">
            <DemoLinkArrow to="#" label="Learn more about it" />
          </div>
        </div>
        <div
          class="flex items-center justify-center w-full sm:w-1/2 h-44 shrink-0"
        >
          <img
            src="/img/illustrations/ui/invest.svg"
            class="absolute xs:-bottom-48 xs:start-5 sm:top-0 ptablet:top-4 sm:end-0 w-auto sm:w-64 ltablet:w-72 lg:w-72 h-full object-contain ltablet:object-cover lg:object-cover object-top"
          />
        </div>
      </BaseCard>
    </div>
    <!--Invest widget-->
    <div class="col-span-12 md:col-span-4">
      <BaseCard
        shape="curved"
        class="relative h-full flex flex-col sm:flex-row gap-4 !bg-muted-100 dark:!bg-muted-950 dark:!border-muted-800"
      >
        <div class="flex flex-col p-6">
          <BaseHeading
            as="h3"
            weight="medium"
            size="lg"
            class="text-muted-800 dark:text-muted-100 mb-2"
          >
            Need more info?
          </BaseHeading>
          <BaseParagraph
            size="sm"
            class="text-muted-500 dark:text-muted-400 mb-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bork Idem
            adhuc; Igitur neque stultorum quisquam beatus.
          </BaseParagraph>
          <div class="mt-auto mb-1">
            <DemoLinkArrow to="#" label="Learn more about it" />
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
