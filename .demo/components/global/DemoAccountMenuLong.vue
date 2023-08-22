<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const props = defineProps<{
  horizontal?: boolean
  collapsed?: boolean
}>()
</script>

<template>
  <div class="group w-full inline-flex items-center justify-center text-end">
    <Menu as="div" class="relative h-10 w-full text-start" v-slot="{ close }">
      <MenuButton as="template">
        <button
          type="button"
          class="inline-flex h-10 w-full gap-2 items-center rounded-xl"
          :class="!collapsed ? 'justify-center' : ''"
        >
          <div
            class="relative inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-transparent group-hover:ring-offset-2 group-hover:ring-primary-500 dark:ring-offset-muted-800 transition-all duration-300"
          >
            <img
              src="/img/avatars/10.svg"
              class="max-w-full h-10 w-10 rounded-full object-cover shadow-sm dark:border-transparent"
              alt=""
            />
          </div>

          <span
            class="text-muted-500 dark:text-muted-400/80 whitespace-nowrap font-sans text-sm"
            :class="!collapsed ? 'hidden' : 'block'"
          >
            My Account
          </span>
          <div class="ms-auto pe-4" :class="!collapsed ? 'hidden' : 'block'">
            <Icon
              name="lucide:chevron-up"
              class="h-4 w-4 text-muted-500"
              :class="!close && 'rotate-180'"
            />
          </div>
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
          class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 absolute mt-2 w-60 origin-bottom-right rounded-md border bg-white text-start shadow-lg focus:outline-none"
          :class="[
            props.horizontal ? 'top-10 end-0' : 'bottom-0 -end-16',
            !props.collapsed && '!-end-48',
          ]"
        >
          <div
            class="bg-white dark:bg-muted-700/40 p-6 border-b border-muted-200 dark:border-muted-700"
          >
            <div class="flex items-center">
              <div
                class="relative inline-flex h-14 w-14 items-center justify-center rounded-full"
              >
                <img
                  src="/img/avatars/10.svg"
                  class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
                  alt=""
                />
              </div>
              <div class="ms-3">
                <h6
                  class="font-heading text-muted-800 text-sm font-medium dark:text-white"
                >
                  Kendra Wilson
                </h6>
                <p class="text-muted-400 font-sans text-xs">
                  kendraw@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div class="p-2">
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/documents"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:folder-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Documents
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    Documents and statements
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/offers"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:gift-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Offers
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    Offers from our partners
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="/layouts/settings"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:gear-six-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Settings
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    Manage preferences
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
            <MenuItem as="div" v-slot="{ active }">
              <NuxtLink
                to="#"
                class="group flex w-full items-center rounded-md p-3 text-sm transition-colors duration-300"
                :class="[
                  active
                    ? 'bg-muted-100 dark:bg-muted-700 text-primary-500'
                    : 'text-muted-400',
                ]"
                @click.passive="close"
              >
                <Icon name="ph:sign-out-duotone" class="h-5 w-5" />
                <div class="ms-3">
                  <h6
                    class="font-heading text-muted-800 text-xs font-medium leading-none dark:text-white"
                  >
                    Logout
                  </h6>
                  <p class="text-muted-400 font-sans text-xs">
                    Logout from account
                  </p>
                </div>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  </div>
</template>
