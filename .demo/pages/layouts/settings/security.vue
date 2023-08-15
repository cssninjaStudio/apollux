<script setup lang="ts">
definePageMeta({
  title: 'Security',
  preview: {
    title: 'Security',
    description: 'For settings management',
    categories: ['layouts', 'settings'],
    src: '/img/screens/layouts-settings-3.png',
    srcDark: '/img/screens/layouts-settings-3-dark.png',
    order: 37,
  },
})

const session = ref(true)
const password = ref(true)
</script>

<template>
  <div class="py-6 space-y-10 divide-muted-200 dark:divide-muted-800">
    <!--Statements-->
    <div class="grid md:grid-cols-12 gap-8">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          Account
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Set a unique password to protect your account. Don't forget to change
          it from time to time.
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
        >
          Account info
        </BaseHeading>
        <div
          class="flex flex-col divide-y divide-muted-200 dark:divide-muted-800"
        >
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <h3 class="font-heading text-xs text-muted-400">Password</h3>
                <span>Change password</span>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
          <!--Item-->
          <div class="group">
            <a
              href="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <h3 class="font-heading text-xs text-muted-400">
                  Backup codes
                </h3>
                <span>Generate codes</span>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!--2 Factor-->
    <div class="grid md:grid-cols-12 gap-8">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          2 Factor
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Reset or edit the authentication method (e.g. Authy or Google
          Authenticator) for this account.
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
        >
          2 Factor
        </BaseHeading>
        <div
          class="flex flex-col divide-y divide-muted-200 dark:divide-muted-800"
        >
          <!--Item-->
          <div class="group">
            <NuxtLink
              to="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Setup
                </BaseHeading>
                <BaseText size="sm">Setup 2 factor</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </NuxtLink>
          </div>
          <!--Item-->
          <div class="group">
            <NuxtLink
              to="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Key
                </BaseHeading>
                <BaseText size="sm">Setup key</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </NuxtLink>
          </div>
          <!--Item-->
          <div class="group">
            <NuxtLink
              to="#"
              class="flex items-center gap-4 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Phone
                </BaseHeading>
                <BaseText size="sm">Phone number</BaseText>
              </div>
              <Icon name="lucide:edit-3" class="ms-auto w-4 h-4" />
              <BaseText
                size="xs"
                weight="semibold"
                class="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Edit
              </BaseText>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!--Notifications-->
    <div class="grid md:grid-cols-12 gap-8">
      <!--Column-->
      <div class="md:col-span-4">
        <BaseHeading
          as="h3"
          size="md"
          weight="medium"
          class="text-muted-800 dark:text-muted-100 mb-1"
        >
          Security notifications
        </BaseHeading>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Some notifications are essential when looking at your account
          security. Stay safe!
        </BaseParagraph>
      </div>
      <!--Column-->
      <div class="md:col-span-8">
        <BaseHeading
          as="h3"
          size="xs"
          weight="medium"
          class="pb-4 px-4 border-b border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100"
        >
          Notifications
        </BaseHeading>
        <div
          class="flex flex-col divide-y divide-muted-200 dark:divide-muted-800"
        >
          <!--Item-->
          <div class="group">
            <div
              class="flex items-center gap-2 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <BaseSwitchThin v-model="session" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Session
                </BaseHeading>
                <BaseText size="sm">New session started</BaseText>
              </div>
            </div>
          </div>
          <!--Item-->
          <div class="group">
            <div
              class="flex items-center gap-2 font-heading text-sm p-4 text-muted-600 dark:text-muted-400 hover:bg-muted-50 dark:hover:bg-muted-800 transition-colors duration-300"
            >
              <BaseSwitchThin v-model="password" />
              <div>
                <BaseHeading
                  as="h3"
                  size="xs"
                  weight="medium"
                  class="text-muted-400"
                >
                  Password
                </BaseHeading>
                <BaseText size="sm">Password change</BaseText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
