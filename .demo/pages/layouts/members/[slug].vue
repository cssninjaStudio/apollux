<script setup lang="ts">
definePageMeta({
  title: 'Members',
  preview: [
    {
      title: 'Member details',
      description: "For viewing Kendra's details",
      categories: ['layouts', 'lists', 'details'],
      src: '/img/screens/layouts-members-1.png',
      srcDark: '/img/screens/layouts-members-1-dark.png',
      order: 37,
      params: {
        slug: 'kendra-wilson',
      },
    },
    {
      title: 'Member details',
      description: "For viewing John's details",
      categories: ['layouts', 'lists', 'details'],
      src: '/img/screens/layouts-members-2.png',
      srcDark: '/img/screens/layouts-members-2-dark.png',
      order: 37,
      params: {
        slug: 'john-baxter',
      },
    },
  ],
})

const { open } = usePanels()
const route = useRoute()
const slug = computed(() => route.params.slug)

const query = computed(() => {
  return {
    slug: slug.value,
  }
})

const { data, pending, error, refresh } = await useFetch('/api/members', {
  query,
})

if (!data.value?.member) {
  await navigateTo('/layouts/members/kendra-wilson')
}
</script>

<template>
  <div>
    <BaseCard color="white-contrast" shape="curved">
      <div
        class="flex gap-4 p-6 sm:p-10 border-b border-muted-200 dark:border-muted-800"
      >
        <BaseAvatar
          :src="data?.member.picture"
          :alt="data?.member.name"
          size="lg"
          shape="straight"
          mask="blob"
        />
        <div>
          <BaseHeading
            weight="medium"
            size="xl"
            lead="none"
            class="line-clamp-1"
          >
            {{ data?.member.name }}
          </BaseHeading>
          <BaseParagraph size="sm" class="text-muted-400 line-clamp-1 mb-2">
            {{ data?.member.email }}
          </BaseParagraph>
          <BaseTag shape="curved">{{ data?.member.role.label }}</BaseTag>
        </div>
      </div>
      <div class="p-6 sm:p-10">
        <div class="space-y-6">
          <div
            v-for="role in data?.member.role.details"
            :key="role.label"
            class="grid grid-cols-12 pb-6 border-b border-muted-200 dark:border-muted-800"
          >
            <div class="col-span-12 sm:col-span-4 xs:mb-6">
              <BaseParagraph size="sm" class="text-muted-500">
                {{ role.label }}
              </BaseParagraph>
              <BaseHeading
                size="md"
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ role.access }}
              </BaseHeading>
            </div>
            <div class="col-span-12 sm:col-span-8">
              <ul class="list-disc space-y-1">
                <li v-for="permission in role.permissions" class="flex gap-2">
                  <Icon
                    v-if="permission.status"
                    name="lucide:check"
                    class="h-4 w-4 shrink-0 relative top-1 text-success-500"
                  />
                  <Icon
                    v-else
                    name="lucide:x"
                    class="h-4 w-4 shrink-0 relative top-1 text-danger-500"
                  />
                  <BaseParagraph size="sm" class="text-muted-400">{{
                    permission.label
                  }}</BaseParagraph>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid grid-cols-12 pb-6">
            <div class="col-span-12 sm:col-span-4">
              <BaseParagraph size="sm" class="text-muted-500">
                Cards
              </BaseParagraph>
              <BaseHeading
                size="md"
                weight="medium"
                class="text-muted-800 dark:text-muted-100"
              >
                {{ data?.member.cards.length }} card{{
                  data?.member.cards.length > 1 ? 's' : ''
                }}
              </BaseHeading>
            </div>
            <div class="col-span-12 sm:col-span-8">
              <table class="w-full whitespace-nowrap">
                <tbody>
                  <tr
                    v-for="card in data?.member.cards"
                    :key="card.id"
                    tabindex="0"
                  >
                    <td class="p-4">
                      <div
                        class="flex items-center gap-2 me-5 md:me-0 text-muted-500 dark:text-muted-300"
                      >
                        <Icon name="lucide:credit-card" class="w-5 h-5" />
                        <BaseText size="sm" weight="medium" lead="none">
                          {{ card.cardInfo.number }}
                        </BaseText>
                        <span
                          class="inline-flex items-center gap-2 font-sans text-xs py-1.5 px-3 m-1 rounded-full bg-muted-100 dark:bg-muted-600/10 text-muted-500"
                        >
                          <span
                            class="h-2 w-2 rounded-full"
                            :class="[
                              card.cardInfo.status === 'active' &&
                                'bg-success-500',
                              card.cardInfo.status === 'disabled' &&
                                'bg-muted-300 dark:bg-muted-700',
                              card.cardInfo.status === 'expired' &&
                                'bg-warning-500',
                              card.cardInfo.status === 'locked' &&
                                'bg-danger-500',
                            ]"
                          ></span>
                          <span>{{ card.cardInfo.status }}</span>
                        </span>
                      </div>
                    </td>
                    <td class="p-4 xs:hidden">
                      <BaseButton to="/layouts/cards" shape="full" condensed
                        >View</BaseButton
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
