export default defineAppConfig({
  apollux: {
    topnav: {
      navigation: {
        enabled: true,
        logo: {
          component: 'ApolluxLogo',
          resolve: true,
          props: { class: 'text-primary-600 h-10 w-10' },
        },
        items: [],
      },
      circularMenu: {
        enabled: true,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: false,
        tools: [],
      },
    },
  },
})
