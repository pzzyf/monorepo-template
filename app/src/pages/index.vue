<script setup lang="ts">
import { usePreferences } from '@afe1/preferences'

const { isShow } = usePreferences()
</script>

<template>
  <div class="min-h-full flex flex-1 select-none overflow-x-hidden">
    <div class="relative w-full justify-center">
      <div class="login-background absolute left-0 top-0 h-full w-full" />
    </div>
    <div v-show="isShow">
      123
    </div>
  </div>
</template>

<style scoped>
.login-background {
  background: linear-gradient(154deg, #07070915 30%, rgba(56, 56, 239, 0.15) 48%, #07070915 64%);
  filter: blur(100px);
}
</style>
