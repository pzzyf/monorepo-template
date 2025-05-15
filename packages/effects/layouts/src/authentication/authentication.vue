<script setup lang="ts">

interface Props {
  appName: string
}

const props = withDefaults(defineProps<Props>(), {
  appName: ''
})

</script>

<template>
  <div class="min-h-full overflow-x-hidden select-none">
    <div class=" w-full flex items-center justify-center relative">
      <div class="login-background absolute left-0 top-0 size-full" />
    </div>
  </div>
</template>

<style scoped>
.login-background {
  background: linear-gradient(154deg,
      #07070915 30%,
      hsl(var(--primary) / 30%) 48%,
      #07070915 64%);
  filter: blur(100px);
}
</style>
