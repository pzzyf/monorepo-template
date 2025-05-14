<script setup lang="ts">

interface Props {
  appName: string
}

const props = withDefaults(defineProps<Props>(), {
  appName: ''
})

</script>

<template>
  <div class="flex justify-center">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
</template>

<style scoped></style>
