<template>
  <ApolluxTable shape="rounded">
    <template #header>
      <ApolluxTableHeading uppercase class="p-4">
        <div class="flex items-center">
          <BaseCheckbox v-model="selectAll" shape="rounded" class="text-primary-500" />
        </div>
      </ApolluxTableHeading>

      <ApolluxTableHeading uppercase>Collaborator</ApolluxTableHeading>

      <ApolluxTableHeading uppercase>Expertise</ApolluxTableHeading>

      <ApolluxTableHeading uppercase>Rate</ApolluxTableHeading>

      <ApolluxTableHeading uppercase>Status</ApolluxTableHeading>

      <ApolluxTableHeading uppercase class="p-4">
        <span class="sr-only">View</span>
      </ApolluxTableHeading>
    </template>

    <ApolluxTableRow v-for="member in team" :key="member.id">
      <ApolluxTableCell class="p-4">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selected"
            :value="`table-2-${member.id}`"
            shape="rounded"
            class="text-primary-500"
          />
        </div>
      </ApolluxTableCell>

      <ApolluxTableCell>
        {{ member.name }}
      </ApolluxTableCell>

      <ApolluxTableCell light>
        {{ member.expertise }}
      </ApolluxTableCell>

      <ApolluxTableCell>${{ member.rate }}/hour</ApolluxTableCell>

      <ApolluxTableCell>
        <BaseTag
          v-if="member.status === 'Available'"
          color="success"
          flavor="pastel"
          shape="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>

        <BaseTag
          v-else-if="member.status === 'New'"
          color="info"
          flavor="pastel"
          shape="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>

        <BaseTag
          v-else-if="member.status === 'Hired'"
          color="warning"
          flavor="pastel"
          shape="full"
          class="font-medium"
        >
          {{ member.status }}
        </BaseTag>
      </ApolluxTableCell>

      <ApolluxTableCell>
        <a
          href="#"
          class="text-primary-500 dark:text-primary-400 underline-offset-4 transition-opacity duration-300 hover:underline hover:opacity-75"
        >
          View
        </a>
      </ApolluxTableCell>
    </ApolluxTableRow>
  </ApolluxTable>
</template>

<script setup lang="ts">
const selected = ref([])
const selectAll = ref(false)

const team = [
  {
    id: 0,
    src: '/img/avatars/22.svg',
    name: 'Anna Vrinkof',
    role: 'UI/UX designer',
    expertise: 'UX Design',
    rate: 49,
    status: 'Available',
  },
  {
    id: 1,
    src: '/img/avatars/3.svg',
    name: 'John Cambell',
    role: 'Sales manager',
    expertise: 'Management',
    rate: 74,
    status: 'Hired',
  },
  {
    id: 2,
    src: '/img/avatars/9.svg',
    name: 'Beth Delanoe',
    role: 'Product designer',
    expertise: 'Product',
    rate: 43,
    status: 'Available',
  },
  {
    id: 3,
    src: '/img/avatars/14.svg',
    name: 'Andrew Higgs',
    role: 'Project manager',
    expertise: 'Project',
    rate: 69,
    status: 'New',
  },
]
</script>
