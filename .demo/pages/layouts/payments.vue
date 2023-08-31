<script setup lang="ts">
definePageMeta({
  title: 'Payments',
  preview: {
    title: 'Payments',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const route = useRoute()

const isOutgoing = computed(() => {
  return route.path.match('^/layouts/payments$')
})

const isIncoming = computed(() => {
  return route.path.startsWith('/layouts/payments/incoming')
})

const isRecipients = computed(() => {
  return route.path.startsWith('/layouts/payments/recipients')
})
</script>

<template>
  <!--Wrapper-->
  <div class="w-full pb-24">
    <!--Header-->
    <div class="flex items-center justify-end py-6">
      <!--Buttons-->
      <div class="hidden md:flex items-center gap-2">
        <BaseButton to="/layouts/send" shape="full" color="muted" size="sm">
          <Icon name="lucide:send" class="w-4 h-4" />
          <span>New Payment</span>
        </BaseButton>
        <BaseButton to="/layouts/receive" shape="full" color="muted" size="sm">
          <Icon name="lucide:mail" class="w-4 h-4" />
          <span>Request Payment</span>
        </BaseButton>
      </div>
    </div>

    <!--Tabs wrapper-->
    <div>
      <!--Tabs-->
      <div class="flex items-center justify-between overflow-hidden">
        <div
          class="flex gap-x-6 grow font-sans border-b border-muted-200 dark:border-muted-800 xs:overflow-x-auto"
        >
          <NuxtLink
            to="/layouts/payments"
            class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
            :class="
              isOutgoing
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Outgoing
          </NuxtLink>
          <NuxtLink
            to="/layouts/payments/incoming"
            class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
            :class="
              isIncoming
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Incoming
          </NuxtLink>
          <NuxtLink
            to="/layouts/payments/recipients"
            class="pb-2 select-none border-b-2 cursor-pointer transition-colors duration-300"
            :class="
              isRecipients
                ? 'text-muted-700 dark:text-muted-100 border-primary-500'
                : 'text-muted-300 hover:text-muted-400 dark:text-muted-500 dark:hover:text-muted-400 border-transparent'
            "
          >
            Recipients
          </NuxtLink>
        </div>
      </div>

      <!--Tab content-->
      <div class="w-full py-6">
        <RouterView />
      </div>
    </div>
  </div>
</template>
