<script setup lang="ts"></script>

<template>
  <BaseCard shape="curved" color="white-contrast" elevated class="h-full p-10">
    <div class="h-full flex flex-col justify-between gap-5">
      <BaseHeading
        as="h4"
        size="sm"
        weight="medium"
        lead="none"
        class="uppercase text-muted-400"
      >
        Kendra's Account
      </BaseHeading>

      <h2
        class="font-heading font-medium text-4xl ptablet:text-2xl text-muted-800 dark:text-white"
      >
        Welcome back, Kendra! 👋
      </h2>
      <BaseParagraph class="text-muted-500">
        Everything seems ok and up-to-date with your account since your last
        visit. Would you like to fund it?
      </BaseParagraph>
      <BaseButton
        color="primary"
        shape="full"
        class="!h-12 w-full max-w-[220px]"
        shadow="hover"
        >Fund my Account</BaseButton
      >
    </div>
  </BaseCard>
</template>
