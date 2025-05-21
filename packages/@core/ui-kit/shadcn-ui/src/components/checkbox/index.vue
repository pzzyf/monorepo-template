<script setup lang="ts">

import { useId } from 'vue';
import { Checkbox } from '../../ui/checkbox';

const id = useId()

</script>

<template>
  <div class="flex items-center">
    <Checkbox :id="id" />
    <label :for="id" class="ml-2 cursor-pointer text-sm">
      <slot></slot>
    </label>
  </div>
</template>

<style scoped></style>
