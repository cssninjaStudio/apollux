<script setup lang="ts">
import VectorLogoVisa from './VectorLogoVisa.vue'

const props = withDefaults(
  defineProps<{
    brand?: 'visa' | 'mastercard' | null | undefined
    name?: string | null | undefined
    number?: number | string | null | undefined
    expiryYear?: number | string
    expiryMonth?: number | string
    cvc?: number | string
    status?: 'active' | 'disabled' | 'expired' | 'locked'
  }>(),
  {
    brand: 'mastercard',
    name: '•••••• ••••••',
    number: '•••• •••• •••• ••••',
    expiryYear: '••',
    expiryMonth: '••',
    cvc: '•••',
    status: 'active',
  },
)
</script>

<template>
  <div
    class="dark:bg-muted-900 border-muted-200 dark:border-muted-800 shadow-muted-400/10 dark:shadow-muted-800/10 relative mx-auto h-[200px] w-full max-w-[315px] rounded-xl border bg-white p-6 shadow-xl"
  >
    <div class="flex h-full flex-col gap-3">
      <div class="flex items-center gap-2">
        <div
          class="h-2 w-2 rounded-full"
          :class="[
            props.status === 'active' && 'bg-success-500',
            props.status === 'disabled' && 'bg-muted-200 dark:bg-muted-700',
            props.status === 'expired' && 'bg-warning-500',
            props.status === 'locked' && 'bg-danger-500',
          ]"
        ></div>
        <span class="text-muted-400 font-sans text-sm capitalize">
          {{ props.status }}
        </span>
      </div>
      <div class="mt-auto space-y-1">
        <img
          class="mb-3 w-11"
          src="/img/illustrations/card-chip.svg"
          alt="Card chip"
          width="44"
          height="31"
        />
        <div>
          <h5 class="font-heading text-muted-500 text-sm">
            {{ props.name }}
          </h5>
        </div>
        <div>
          <p class="font-heading text-muted-400 text-xs">
            <span>{{ props.number }}</span>
          </p>
        </div>
        <div
          class="font-heading text-muted-400 flex w-full items-center gap-2 text-xs"
        >
          <div class="flex items-center gap-2">
            <span>EXP</span>
            <span>{{ props.expiryMonth }}/{{ props.expiryYear }}</span>
          </div>
          <div class="flex items-center gap-2">
            <span>CVC</span>
            <span>{{ props.cvc }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="props.brand === 'mastercard'" class="absolute end-5 top-4 flex">
      <div class="-me-2 h-9 w-9 rounded-full bg-rose-500/60"></div>
      <div
        class="relative z-10 -ms-2 h-9 w-9 rounded-full bg-yellow-500/60"
      ></div>
    </div>

    <div v-else-if="props.brand === 'visa'" class="absolute end-6 top-6 flex">
      <VectorLogoVisa class="text-primary-500 h-5" />
    </div>

    <div class="absolute bottom-7 end-5 flex">
      <ApolluxLogo class="text-primary-500 h-10 w-10" />
    </div>
  </div>
</template>
