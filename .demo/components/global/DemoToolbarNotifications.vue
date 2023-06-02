<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
</script>

<template>
  <div class="group inline-flex items-center justify-center text-right">
    <Menu as="div" class="relative h-9 w-9 text-left" v-slot="{ close }">
      <MenuButton as="div">
        <button
          type="button"
          class="group-hover:ring-muted-200 dark:group-hover:ring-muted-700 dark:ring-offset-muted-900 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-transparent transition-all duration-300 group-hover:ring-offset-4"
        >
          <span
            class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 flex h-9 w-9 items-center justify-center rounded-full border bg-white"
          >
            <Icon name="ph:bell-duotone" class="text-muted-400 h-5 w-5" />
          </span>
        </button>
      </MenuButton>

      <Transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="divide-muted-100 border-muted-200 dark:divide-muted-700 dark:border-muted-700 dark:bg-muted-800 absolute end-0 mt-2 w-72 origin-top-right divide-y rounded-md border bg-white shadow-lg focus:outline-none"
        >
          <div class="p-4">
            <div class="relative flex items-center justify-between">
              <h4
                class="font-heading text-muted-500 dark:text-muted-200 text-xs uppercase"
              >
                Notifications
              </h4>
              <NuxtLink
                to="#"
                class="font-alt text-primary-500 text-xs font-semibold"
                @click.passive="close"
              >
                View All
              </NuxtLink>
            </div>
          </div>
          <div class="p-4">
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <BaseAvatar
                  shape="full"
                  size="sm"
                  src="/img/logos/companies/airbnb.svg"
                  class="bg-muted-100 dark:bg-muted-700/60"
                />
                <div class="ms-2">
                  <BaseHeading
                    as="h6"
                    size="xs"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      Your payment to
                    </BaseText>
                    Airbnb
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      was made successfully
                    </BaseText>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="ext-muted-400">
                    1 hour ago
                  </BaseParagraph>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <BaseAvatar
                  shape="full"
                  size="sm"
                  src="/img/avatars/19.svg"
                  class="bg-muted-100 dark:bg-muted-700/60"
                />
                <div class="ms-2">
                  <BaseHeading
                    as="h6"
                    size="xs"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      You received a wire for
                    </BaseText>
                    $950
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      from Milena Perez
                    </BaseText>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="ext-muted-400">
                    2 hours ago
                  </BaseParagraph>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <BaseAvatar
                  shape="full"
                  size="sm"
                  src="/img/logos/companies/gitlab.svg"
                  class="bg-muted-100 dark:bg-muted-700/60"
                />
                <div class="ms-2">
                  <BaseHeading
                    as="h6"
                    size="xs"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      Your payment to
                    </BaseText>
                    Gitlab
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      was made successfully
                    </BaseText>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="ext-muted-400">
                    5 hours ago
                  </BaseParagraph>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full rounded-md p-2 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-500',
                ]"
                @click.passive="close"
              >
                <BaseAvatar
                  shape="full"
                  size="sm"
                  src="/img/logos/companies/att.svg"
                  class="bg-muted-100 dark:bg-muted-700/60"
                />
                <div class="ms-2">
                  <BaseHeading
                    as="h6"
                    size="xs"
                    weight="semibold"
                    lead="tight"
                    class="text-muted-800 dark:text-white"
                  >
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      Your payment to
                    </BaseText>
                    AT&T
                    <BaseText
                      size="xs"
                      weight="normal"
                      class="inline text-muted-500 dark:text-muted-400"
                    >
                      was made successfully
                    </BaseText>
                  </BaseHeading>
                  <BaseParagraph size="xs" class="ext-muted-400">
                    Yesterday
                  </BaseParagraph>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
