<script setup lang="ts">

interface Props {
  appName: string
}

const props = withDefaults(defineProps<Props>(), {
  appName: ''
})

</script>



<template>
  <div>
    {{ props.appName }}
  </div>
</template>

<style scoped></style>
