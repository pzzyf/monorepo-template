<script setup lang="ts">
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui'
import { ref } from 'vue'

const checkboxOne = ref(true)
</script>

<template>
  <CheckboxRoot v-model="checkboxOne"
    class="hover:bg-stone-50 flex h-5 w-5 appearance-none items-center justify-center rounded-md bg-white shadow-sm border outline-none focus-within:shadow-[0_0_0_2px_black]">
    <CheckboxIndicator class="bg-white h-full w-full rounded flex items-center justify-center">
      x
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
