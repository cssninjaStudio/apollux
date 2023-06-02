<script setup lang="ts"></script>

<template>
  <div class="mt-7 px-2 overflow-x-auto">
    <table class="w-full whitespace-nowrap">
      <thead>
        <th class="w-1/5 pb-3 px-4">
          <BasePlaceload class="rounded h-3.5 w-6" />
        </th>
        <th class="w-2/5 pb-3 px-4">
          <BasePlaceload class="rounded h-3.5 w-14" />
        </th>
        <th class="pb-3 px-4">
          <BasePlaceload class="rounded h-3.5 w-16" />
        </th>
        <th class="pb-3 px-4">
          <BasePlaceload class="rounded h-3.5 w-16" />
        </th>
        <th class="pb-3 px-4">
          <BasePlaceload class="rounded h-3.5 w-12" />
        </th>
        <th class="font-sans text-xs font-semibold pb-3 px-4">
          <BasePlaceload class="rounded h-3.5 w-20" />
        </th>
      </thead>
      <tbody>
        <!--Row-->
        <tr v-for="index in 10" tabindex="0">
          <td class="py-2 px-4">
            <BasePlaceload class="rounded h-4 w-20" />
          </td>
          <td class="py-2 px-4">
            <BasePlaceload class="rounded h-4 w-28" />
          </td>
          <td class="py-2 px-4">
            <BasePlaceload class="rounded h-4 w-20" />
          </td>
          <td class="py-2 px-4">
            <BasePlaceload class="rounded h-4 w-20" />
          </td>
          <td class="py-2 px-4">
            <BasePlaceload class="py-3 px-3 w-16 m-1 rounded-full" />
          </td>
          <td class="py-2 px-4">
            <div class="flex items-center gap-2">
              <BasePlaceload class="rounded-full h-5 w-5" />
              <BasePlaceload class="rounded h-4 w-16" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
