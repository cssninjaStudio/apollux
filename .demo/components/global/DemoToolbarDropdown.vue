<script setup lang="ts"></script>

<template>
  <BaseDropdown
    flavor="button"
    shape="full"
    button-color="primary"
    label="Actions"
    orientation="end"
    size="md"
  >
    <BaseDropdownItem to="/layouts/send" title="Send" text="Send someone money">
      <template #start>
        <Icon name="ph:arrow-right-duotone" class="me-2 block h-5 w-5" />
      </template>
    </BaseDropdownItem>

    <BaseDropdownItem
      to="/layouts/receive"
      title="Receive"
      text="Add or receive funds"
    >
      <template #start>
        <Icon name="ph:arrow-left-duotone" class="me-2 block h-5 w-5" />
      </template>
    </BaseDropdownItem>

    <BaseDropdownItem
      to="/layouts/cards"
      title="Cards"
      text="Manage your cards"
    >
      <template #start>
        <Icon name="ph:credit-card-duotone" class="me-2 block h-5 w-5" />
      </template>
    </BaseDropdownItem>

    <BaseDropdownItem
      to="/layouts/accounts"
      title="Accounts"
      text="Manage your accounts"
    >
      <template #start>
        <Icon name="ph:wallet-duotone" class="me-2 block h-5 w-5" />
      </template>
    </BaseDropdownItem>
  </BaseDropdown>
</template>
