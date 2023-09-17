<script setup lang="ts">
const route = useRoute()
const app = useAppConfig()

/**
 * Global head configuration
 * @see https://nuxt.com/docs/getting-started/seo-meta
 */
useHead({
  title: () => route.meta?.title ?? '',
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - ${app.apollux.title}`
      : `${app.apollux.title}`
  },
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/img/favicon.png',
    },
  ],

  meta: [
    {
      name: 'description',
      content: () =>
        route.meta.description ??
        'An advanced Nuxt and Tailwind CSS Fintech template',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@cssninjaStudio',
    },
    {
      name: 'og:image:type',
      content: 'image/png',
    },
    {
      name: 'og:image:width',
      content: '1200',
    },
    {
      name: 'og:image:height',
      content: '630',
    },
    {
      name: 'og:image',
      content: `https://media.cssninja.io/embed/marketplace/product/wide.png?headline=${encodeURIComponent(
        route.meta.description ||
          (route.meta.preview
            ? `${route.meta.preview?.title} - ${route.meta.preview?.description}`
            : 'Nuxt & Tailwind CSS dashboard system'),
      )}&url=${encodeURIComponent(
        'https://media.cssninja.io/content/products/logos/apollux-text-white.svg',
      )}&previewUrl=${encodeURIComponent(
        `https://apollux.cssninja.io${
          route.meta.preview?.src || '/img/screens/documentation-hub.png'
        }`,
      )}`,
    },
  ],
})
</script>

<template>
  <div>
    <!-- 
      Global app search modal
      @see .demo/components/DemoAppSearch.vue
    -->
    <DemoAppSearch />
    <!-- 
      Global app layout switcher
      @see .demo/components/DemoAppLayoutSwitcher.vue
    -->
    <DemoAppLayoutSwitcher />

    <!-- 
      Vue Axe Popup
      @see .demo/plugins/vue-axe.client.ts
    -->
    <VueAxePopup />

    <NuxtLayout>
      <NuxtLoadingIndicator color="rgb(var(--color-primary-500))" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
