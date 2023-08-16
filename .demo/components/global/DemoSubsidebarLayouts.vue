<script setup lang="ts">
const navigation = [
  {
    name: 'Main Dashboard',
    to: '/dashboards',
  },
  {
    name: 'Personal Board',
    to: '/dashboards/personal',
  },
  {
    name: 'Tracking Board',
    to: '/dashboards/tracking',
  },
  {
    name: 'Trading Board',
    to: '/dashboards/trading',
  },
  {
    name: 'Overview Board',
    to: '/dashboards/overview',
  },
  {
    name: 'Quickview Board',
    to: '/dashboards/quickview',
  },
  {
    divider: true,
  },
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
    name: 'Cards',
    children: [
      {
        name: 'Cards list',
        icon: 'ph:credit-card-duotone',
        to: '/layouts/cards',
        exact: true,
      },
      {
        name: 'New card',
        icon: 'ph:credit-card-duotone',
        to: '/layouts/cards/new',
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
        name: 'Downloads',
        icon: 'ph:download-duotone',
        to: '/layouts/download',
      },
      {
        name: 'Invoice',
        icon: 'ph:note-duotone',
        to: '/layouts/invoice',
      },
      {
        name: 'Offers',
        icon: 'ph:gift-duotone',
        to: '/layouts/offers',
      },
    ],
  },
  {
    name: 'Subpages',
    children: [
      {
        name: 'Investments',
        icon: 'ph:rocket-duotone',
        to: '/layouts/invest',
      },
      {
        name: 'Vault',
        icon: 'ph:shield-check-duotone',
        to: '/layouts/vault',
      },
      {
        name: 'Integrations',
        icon: 'ph:lightning-duotone',
        to: '/layouts/integrations',
      },
      {
        name: 'Members',
        icon: 'ph:users-duotone',
        to: '/layouts/members',
      },
      {
        name: 'Profile',
        icon: 'ph:user-duotone',
        to: '/layouts/profile',
      },
      {
        name: 'Edit profile',
        icon: 'ph:user-duotone',
        to: '/layouts/profile-edit',
      },
      {
        name: 'Company',
        icon: 'ph:buildings-duotone',
        to: '/layouts/company',
      },
      {
        name: 'Edit company',
        icon: 'ph:buildings-duotone',
        to: '/layouts/company-edit',
      },
      {
        name: 'New contact',
        icon: 'ph:user-plus-duotone',
        to: '/layouts/contacts/create',
      },
    ],
  },
  {
    name: 'Wizards',
    children: [
      {
        name: 'Send money',
        icon: 'ph:arrow-right-duotone',
        to: '/layouts/send',
        exact: true,
      },
      {
        name: 'Receive money',
        icon: 'ph:arrow-left-duotone',
        to: '/layouts/receive',
        exact: true,
      },
      {
        name: 'Invite members',
        icon: 'ph:envelope-duotone',
        to: '/layouts/invite',
        exact: true,
      },
      {
        name: 'New card',
        icon: 'ph:credit-card-duotone',
        to: '/layouts/cards/new',
        exact: true,
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
