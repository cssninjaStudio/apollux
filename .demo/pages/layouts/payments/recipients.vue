<script setup lang="ts">
definePageMeta({
  title: 'Recipients',
  preview: {
    title: 'Recipients',
    description: 'For contacts management',
    categories: ['layouts', 'lists', 'payments'],
    src: '/img/screens/layouts-recipients.png',
    srcDark: '/img/screens/layouts-recipients-dark.png',
    order: 80,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(100)

watch([filter, perPage], () => {
  router.push({
    query: {
      page: undefined,
    },
  })
})

const query = computed(() => {
  return {
    filter: filter.value,
    perPage: perPage.value,
    page: page.value,
  }
})

const { data, pending, error, refresh } = await useFetch(
  '/api/payments/recipients',
  {
    query,
  },
)

const people = computed(() => {
  return data?.value?.data.filter((item: any) => item.type === 'person')
})

const companies = computed(() => {
  return data?.value?.data.filter((item: any) => item.type === 'company')
})
</script>

<template>
  <div class="w-full">
    <div class="space-y-10">
      <!--Recipients-->
      <div class="w-full">
        <div class="flex items-center gap-4 mb-5">
          <BaseButtonIcon
            to="/layouts/contacts/create"
            shape="full"
            color="primary"
            condensed
            data-nui-tooltip="Add recipient"
          >
            <Icon name="lucide:plus" size="w-2 h-2" />
          </BaseButtonIcon>
          <h3 class="font-heading text-xl text-muted-800 dark:text-muted-200">
            Contacts
          </h3>
          <div class="ms-auto">
            <BaseInput
              v-model="filter"
              icon="lucide:search"
              shape="curved"
              placeholder="Search contacts..."
            />
          </div>
        </div>

        <div class="py-6">
          <BaseText
            size="sm"
            weight="medium"
            class="uppercase text-muted-400 mb-4"
          >
            People
          </BaseText>

          <!--Placeholder-->
          <DemoPlaceholderMinimal
            v-if="people?.length === 0"
            title="No contacts found"
            description="We couldn'find any matching results. Try different search terms."
            transparent
          />

          <!--People-->
          <div v-else class="grid md:grid-cols-3 gap-5">
            <!--Grid item-->
            <NuxtLink
              v-for="item in people"
              :key="item.id"
              :to="`/layouts/recipient/${item.slug}`"
              class="group/contact"
            >
              <BaseCard
                shape="curved"
                elevated-hover
                class="p-4 dark:!bg-muted-950 group-hover/contact:border-primary-500"
              >
                <div class="flex items-center gap-2">
                  <BaseAvatar
                    shape="full"
                    size="sm"
                    :src="item.picture"
                    class="bg-muted-100 dark:bg-muted-700/60"
                  />
                  <div>
                    <h5
                      class="font-sans text-sm font-medium leading-none text-muted-500 dark:text-muted-300"
                    >
                      {{ item.name }}
                    </h5>
                    <p class="font-sans text-xs text-muted-400">
                      {{ item.category }}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 group-hover/contact:opacity-100 opacity-0 transition-opacity duration-200"
                    >
                      <Icon name="lucide:more-horizontal" class="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
        </div>

        <div class="py-6">
          <BaseText
            size="sm"
            weight="medium"
            class="uppercase text-muted-400 mb-4"
          >
            Companies
          </BaseText>

          <!--Placeholder-->
          <DemoPlaceholderMinimal
            v-if="companies?.length === 0"
            title="No contacts to show"
            description="We couldn'find any matching results. Try different search terms."
            transparent
          />

          <!--Companies-->
          <div v-else class="grid md:grid-cols-3 gap-5">
            <!--Grid item-->
            <NuxtLink
              v-for="item in companies"
              :key="item.id"
              :to="`/layouts/recipient/${item.slug}`"
              class="group/contact"
            >
              <BaseCard
                shape="curved"
                elevated-hover
                class="p-4 dark:!bg-muted-950 group-hover/contact:border-primary-500"
              >
                <div class="flex items-center gap-2">
                  <BaseAvatar
                    shape="full"
                    size="sm"
                    :src="item.picture"
                    class="bg-muted-100 dark:bg-muted-700/60"
                  />
                  <div>
                    <h5
                      class="font-sans text-sm font-medium leading-none text-muted-500 dark:text-muted-300"
                    >
                      {{ item.name }}
                    </h5>
                    <p class="font-sans text-xs text-muted-400">
                      {{ item.category }}
                    </p>
                  </div>
                  <div class="ms-auto">
                    <div
                      class="w-8 h-8 rounded-full flex items-center justify-center bg-muted-100 dark:bg-muted-900 text-muted-300 dark:text-muted-200 group-hover/contact:opacity-100 opacity-0 transition-opacity duration-200"
                    >
                      <Icon name="lucide:more-horizontal" class="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
