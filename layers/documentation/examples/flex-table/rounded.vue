<template>
  <ApolluxFlexTable>
    <template #header>
      <ApolluxFlexTableHeading type="shrink">
        <div class="flex items-center">
          <BaseCheckbox v-model="selectAll" shape="rounded" class="text-primary-500" />
        </div>
      </ApolluxFlexTableHeading>

      <ApolluxFlexTableHeading type="grow">Member</ApolluxFlexTableHeading>

      <ApolluxFlexTableHeading type="stable">Expertise</ApolluxFlexTableHeading>

      <ApolluxFlexTableHeading type="stable">Rate</ApolluxFlexTableHeading>

      <ApolluxFlexTableHeading type="stable">Status</ApolluxFlexTableHeading>

      <ApolluxFlexTableHeading type="stable">Actions</ApolluxFlexTableHeading>
    </template>

    <ApolluxFlexTableRow v-for="member in team" :key="member.id" shape="rounded">
      <ApolluxFlexTableCell type="shrink" data-content="Selection">
        <div class="flex items-center">
          <BaseCheckbox
            v-model="selected"
            :value="`checkbox-${member.id}`"
            shape="rounded"
            class="text-primary-500"
          />
        </div>
      </ApolluxFlexTableCell>

      <ApolluxFlexTableCell type="grow" data-content="Member">
        <div class="flex items-center">
          <BaseAvatar :src="member.src" size="sm" />

          <div class="ms-3 leading-none">
            <h4 class="font-sans text-sm font-medium">
              {{ member.name }}
            </h4>

            <p class="text-muted-400 font-sans text-xs font-normal">
              {{ member.role }}
            </p>
          </div>
        </div>
      </ApolluxFlexTableCell>

      <ApolluxFlexTableCell type="stable" data-content="Expertise" light>
        {{ member.expertise }}
      </ApolluxFlexTableCell>

      <ApolluxFlexTableCell type="stable" data-content="Rate">
        <span class="font-medium">${{ member.rate }}/hour</span>
      </ApolluxFlexTableCell>

      <ApolluxFlexTableCell type="stable" data-content="Status">
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
      </ApolluxFlexTableCell>

      <ApolluxFlexTableCell type="stable" data-content="Actions">
        <BaseButton color="primary" flavor="outline" shape="rounded" class="scale-90">
          View
        </BaseButton>
      </ApolluxFlexTableCell>
    </ApolluxFlexTableRow>
  </ApolluxFlexTable>
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
