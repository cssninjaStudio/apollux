export default defineNuxtSchema({
  appConfig: {
    apollux: {
      title: 'Apollux',
      error: {
        logo: {
          component: 'ApolluxLogo',
          resolve: true,
          props: {},
        },
      },
      panels: {
        $schema: {
          type: 'array',
          items: {
            type: 'object',
            required: ['name', 'component'],
            properties: {
              name: { type: 'string' },
              position: {
                type: 'string',
                tsType: "'left' | 'right'",
                $default: 'left',
              },
              component: { type: 'string' },
              props: { type: 'object' },
              overlay: { type: 'boolean', $default: true },
            },
          },
        },
      },
    },
  },
})
