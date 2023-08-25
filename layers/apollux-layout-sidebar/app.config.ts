export default defineAppConfig({
  apollux: {
    sidebar: {
      circularMenu: {
        enabled: false,
        tools: [],
      },
      toolbar: {
        enabled: true,
        showTitle: true,
        showNavBurger: false,
        tools: [],
      },
      navigation: {
        enabled: true,
        startOpen: true,
        logo: {
          component: 'ApolluxLogo',
          resolve: true,
          props: { class: 'text-primary-500 h-10' },
        },
        items: [],
      },
    },
  },
})
