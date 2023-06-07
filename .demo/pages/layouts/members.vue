<script setup lang="ts">
definePageMeta({
  title: 'Members',
  preview: {
    title: 'Members',
    description: 'For generic things',
    categories: ['layouts', 'lists'],
    src: '/img/screens/layouts-list-view-1.png',
    srcDark: '/img/screens/layouts-list-view-1-dark.png',
    order: 37,
  },
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

const filter = ref('')
const perPage = ref(45)
const { open } = usePanels()

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

const { data, pending, error, refresh } = await useFetch('/api/members', {
  query,
})

const currentMember = ref(data.value?.data[0])
</script>

<template>
  <!--Wrapper-->
  <div class="w-full pb-24">
    <!--Header-->
    <div class="flex items-center justify-end py-6">
      <!--Buttons-->
      <div class="hidden md:flex items-center gap-2">
        <BaseButton shape="full" color="muted" condensed>
          <Icon name="lucide:user" class="w-4 h-4" />
          <span>Invite a Member</span>
        </BaseButton>
        <BaseButton shape="full" color="muted" condensed>
          <Icon name="lucide:edit-3" class="w-4 h-4" />
          <span>Edit Member</span>
        </BaseButton>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!--Navigation-->
      <div class="col-span-12 ltablet:col-span-5 lg:col-span-5">
        <ul
          class="gap-2 flex ltablet:flex-col lg:flex-col overflow-x-auto ptablet:overflow-x-auto ltablet:overflow-x-hidden lg:overflow-x-hidden"
        >
          <li
            v-for="member in data?.data"
            :key="member.id"
            @click="currentMember = member"
          >
            <NuxtLink
              :to="`/layouts/members/${member.slug}`"
              class="flex items-center gap-2 p-4 rounded-xl"
              active-class="bg-muted-100"
            >
              <BaseAvatar :src="member.picture" :alt="member.name" size="sm" />
              <div>
                <BaseHeading
                  weight="medium"
                  size="md"
                  lead="tight"
                  class="line-clamp-1"
                >
                  {{ member.name }}
                </BaseHeading>
                <BaseParagraph size="xs" class="text-muted-400 line-clamp-1">
                  {{ member.email }}
                </BaseParagraph>
              </div>
              <div class="hidden sm:block ms-auto">
                <BaseTag shape="curved">{{ member.role.label }}</BaseTag>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <!--Slug content-->
      <div class="col-span-12 ltablet:col-span-7 lg:col-span-7">
        <RouterView />
      </div>
    </div>
  </div>
</template>
