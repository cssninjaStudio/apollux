<script setup lang="ts">
const navigation = [
  {
    name: 'Transactions',
    children: [
      {
        name: 'Transactions list',
        icon: 'ph:wallet-duotone',
        to: '/layouts',
        exact: true,
      },
    ],
  },
  {
    name: 'Payments',
    children: [
      {
        name: 'Outgoing',
        icon: 'ph:arrow-right-duotone',
        to: '/layouts/payments',
      },
      {
        name: 'Incoming',
        icon: 'ph:arrow-left-duotone',
        to: '/layouts/payments/incoming',
      },
      {
        name: 'Recipients',
        icon: 'ph:users-duotone',
        to: '/layouts/payments/recipients',
      },
    ],
  },
  {
    name: 'Accounts',
    children: [
      {
        name: 'Accounts',
        icon: 'ph:bank-duotone',
        to: '/layouts/accounts',
      },
      {
        name: 'Linked',
        icon: 'ph:link-duotone',
        to: '/layouts/accounts/linked',
      },
      {
        name: 'Rules',
        icon: 'ph:paper-plane-right-duotone',
        to: '/layouts/accounts/rules',
      },
    ],
  },
  {
    name: 'Personal',
    children: [
      {
        name: 'Documents',
        icon: 'ph:folder-duotone',
        to: '/layouts/documents',
      },
      {
        name: 'Offers',
        icon: 'ph:gift-duotone',
        to: '/layouts/offers',
      },
    ],
  },
  {
    divider: true,
  },
  {
    name: 'Settings',
    children: [
      {
        name: 'General',
        icon: 'ph:user-duotone',
        to: '/layouts/settings',
      },
      {
        name: 'Security',
        icon: 'ph:shield-duotone',
        to: '/layouts/settings/security',
      },
      {
        name: 'Notifications',
        icon: 'ph:notification-duotone',
        to: '/layouts/settings/notifications',
      },
      {
        name: 'API tokens',
        icon: 'ph:database-duotone',
        to: '/layouts/settings/tokens',
      },
    ],
  },
  {
    name: 'Authentication',
    children: [
      {
        name: 'Sign In',
        icon: 'ph:sign-in-duotone',
        to: '/auth',
      },
      {
        name: 'Signup',
        icon: 'ph:sparkle-duotone',
        to: '/auth/signup',
      },
      {
        name: 'Recover',
        icon: 'ph:wrench-duotone',
        to: '/auth/recover',
      },
    ],
  },
]
</script>

<template>
  <ApolluxSubsidebar>
    <template #header>
      <ApolluxSubsidebarHeader />
    </template>

    <ApolluxSubsidebarMenu :navigation="navigation" />
  </ApolluxSubsidebar>
</template>
