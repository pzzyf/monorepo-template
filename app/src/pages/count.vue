<script setup lang="ts">
import { useCounterStore } from '@/store'

const countStore = useCounterStore()
</script>

<template>
  <div>
    <div>
      {{ countStore.count }}
    </div>
    <div flex justify-center>
      <div @click="countStore.decrement">
        -
      </div>
      <div ml-5 mr-5 />
      <div @click="countStore.increment">
        +
      </div>
    </div>
  </div>
</template>

<style scoped></style>
