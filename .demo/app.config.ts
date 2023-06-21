/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.demo/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
  apollux: {
    title: 'Apollux',
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeSwitch',
            props: {
              disableTransitions: true,
            },
          },
          {
            component: 'DemoToolbarLanguage',
          },
          {
            component: 'DemoToolbarNotifications',
          },
          {
            component: 'DemoToolbarActivity',
          },
          {
            component: 'DemoToolbarAccountMenu',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'DemoCircularMenuLanguage',
          },
          {
            component: 'DemoCircularMenuNotifications',
          },
          {
            component: 'DemoCircularMenuActivity',
          },
        ],
      },
      navigation: {
        logo: {
          component: 'ApolluxLogo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            title: 'Dashboards',
            icon: { name: 'ph:sidebar-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarDashboards' },
            activePath: '/dashboards',
          },
          {
            title: 'Layouts',
            icon: { name: 'ph:app-window-duotone', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarLayouts' },
            activePath: '/layouts',
          },
          {
            title: 'Chat',
            icon: { name: 'ph:chat-circle-duotone', class: 'w-5 h-5' },
            to: '/dashboards/messaging',
          },
          {
            title: 'Customize',
            icon: { name: 'ph:drop-half-bottom-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('switcher-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'Search',
            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('search-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'My Account',
            component: 'DemoAccountMenu',
            position: 'end',
          },
        ],
      },
    },
    collapse: {
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeSwitch',
          },
          {
            component: 'DemoToolbarDropdown',
          },
          {
            component: 'DemoToolbarPanelTrigger',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'DemoCircularMenuLanguage',
          },
          {
            component: 'DemoCircularMenuNotifications',
          },
          {
            component: 'DemoCircularMenuActivity',
          },
        ],
      },
      navigation: {
        enabled: true,
        header: {
          component: 'DemoCollapseNavigationHeader',
        },
        footer: {
          component: 'DemoCollapseNavigationFooter',
        },
        items: [
          {
            name: 'Dashboards',
            icon: { name: 'ph:gauge-duotone', class: 'w-6 h-6' },
            activePath: '/dashboards',
            children: [
              {
                name: 'Main Dashboard',
                to: '/dashboards',
                icon: { name: 'ph:house-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Personal',
                to: '/dashboards/personal',
                icon: { name: 'ph:chart-pie-slice-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Tracking',
                to: '/dashboards/tracking',
                icon: { name: 'ph:bank-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Trading',
                to: '/dashboards/trading',
                icon: { name: 'ph:chart-donut-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Overview',
                to: '/dashboards/overview',
                icon: { name: 'ph:subtract-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Quickview',
                to: '/dashboards/quickview',
                icon: { name: 'ph:circles-three-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Messaging',
                to: '/dashboards/messaging',
                icon: { name: 'ph:chat-duotone', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Transactions',
            icon: { name: 'ph:arrows-left-right-duotone', class: 'w-6 h-6' },
            to: '/layouts',
          },
          {
            name: 'Payments',
            icon: { name: 'ph:check-circle-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/payments',
            children: [
              {
                name: 'Outgoing',
                to: '/layouts/payments',
                icon: { name: 'ph:arrow-right-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Incoming',
                to: '/layouts/payments/incoming',
                icon: { name: 'ph:arrow-left-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Recipients',
                to: '/layouts/payments/recipients',
                icon: { name: 'ph:users-duotone', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Accounts',
            icon: { name: 'ph:bank-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/accounts',
            children: [
              {
                name: 'Accounts',
                to: '/layouts/accounts',
                icon: { name: 'ph:bank-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Linked accounts',
                to: '/layouts/accounts/linked',
                icon: { name: 'ph:link-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Transfer rules',
                to: '/layouts/accounts/rules',
                icon: {
                  name: 'ph:paper-plane-right-duotone',
                  class: 'w-4 h-4',
                },
              },
            ],
          },
          {
            name: 'Cards',
            icon: { name: 'ph:credit-card-duotone', class: 'w-6 h-6' },
            to: '/layouts/cards',
          },
          {
            name: 'Investment',
            icon: { name: 'ph:rocket-duotone', class: 'w-6 h-6' },
            to: '/layouts/invest',
          },
          {
            name: 'Divider',
            divider: true,
          },
          {
            name: 'Wizards',
            icon: { name: 'ph:notification-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/send',
            children: [
              {
                name: 'Send Money',
                to: '/layouts/send',
                icon: { name: 'ph:arrow-right-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Receive Money',
                to: '/layouts/receive',
                icon: { name: 'ph:arrow-left-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Invite members',
                to: '/layouts/invite',
                icon: { name: 'ph:envelope-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'New Card',
                to: '/layouts/card/new',
                icon: { name: 'ph:credit-card-duotone', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Subpages',
            icon: { name: 'ph:app-window-duotone', class: 'w-6 h-6' },
            activePath: '/layouts/subpages',
            children: [
              {
                name: 'Credit',
                to: '/layouts/credit',
                icon: { name: 'ph:rocket-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Members',
                to: '/layouts/members',
                icon: { name: 'ph:users-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Profile',
                to: '/layouts/profile',
                icon: { name: 'ph:user-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Company',
                to: '/layouts/company',
                icon: { name: 'ph:buildings-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Integrations',
                to: '/layouts/integrations',
                icon: { name: 'ph:lightning-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Vault',
                to: '/layouts/vault',
                icon: { name: 'ph:shield-check-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Documents',
                to: '/layouts/documents',
                icon: { name: 'ph:folder-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Download',
                to: '/layouts/download',
                icon: { name: 'ph:download-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Invoice',
                to: '/layouts/invoice',
                icon: { name: 'ph:note-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Offers',
                to: '/layouts/offers',
                icon: { name: 'ph:gift-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Settings',
                to: '/layouts/settings',
                icon: { name: 'ph:gear-six-duotone', class: 'w-4 h-4' },
              },
            ],
          },
          {
            name: 'Authentication',
            icon: { name: 'ph:lock-duotone', class: 'w-6 h-6' },
            activePath: '/auth',
            children: [
              {
                name: 'Login',
                to: '/auth',
                icon: { name: 'ph:fingerprint-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Signup',
                to: '/auth/signup',
                icon: { name: 'ph:lightning-duotone', class: 'w-4 h-4' },
              },
              {
                name: 'Recover',
                to: '/auth/recover',
                icon: {
                  name: 'ph:sparkle-duotone',
                  class: 'w-4 h-4',
                },
              },
            ],
          },
          {
            name: 'Customize',
            icon: { name: 'ph:drop-half-bottom-duotone', class: 'w-6 h-6' },
            click: () => {
              const isSwitcherOpen = useState('switcher-open', () => false)
              isSwitcherOpen.value = true
            },
          },
        ],
      },
    },
    panels: [
      {
        name: 'events',
        position: 'right',
        component: 'DemoPanelEvents',
      },
      {
        name: 'card',
        position: 'right',
        component: 'DemoPanelCard',
      },
      {
        name: 'account',
        position: 'right',
        component: 'DemoPanelAccount',
        size: 'lg',
      },
      {
        name: 'invest',
        position: 'right',
        component: 'DemoPanelInvest',
        size: 'lg',
      },
      {
        name: 'language',
        position: 'right',
        component: 'DemoPanelLanguage',
      },
      {
        name: 'activity',
        position: 'right',
        component: 'DemoPanelActivity',
      },
      {
        name: 'search',
        position: 'left',
        component: 'DemoPanelSearch',
      },
      {
        name: 'task',
        position: 'right',
        component: 'DemoPanelTask',
      },
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
  },
})
