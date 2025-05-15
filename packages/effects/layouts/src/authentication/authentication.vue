<script setup lang="ts">

interface Props {
  appName: string
}

const props = withDefaults(defineProps<Props>(), {
  appName: ''
})

</script>

<template>
  <div class=" size-full flex items-center justify-center">
    <div>1</div>
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
