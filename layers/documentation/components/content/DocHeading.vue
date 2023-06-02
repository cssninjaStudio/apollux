<script setup lang="ts">
const props = defineProps<{
  label: string
}>()
</script>

<template>
  <BaseHeading as="h3" weight="light" size="lg" class="not-prose mt-12">
    <ApolluxTocAnchor :label="props.label" level="3" prefix="">
      <template #suffix>
        <Icon name="lucide:hash" class="mt-[0.33rem] h-4 w-4" />
      </template>
    </ApolluxTocAnchor>
  </BaseHeading>
</template>
