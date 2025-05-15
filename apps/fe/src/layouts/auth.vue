<script setup lang="ts">

import { AuthPageLogin } from "@afe1/layouts"
import { preferences } from "@afe1/preferences";
import { computed } from "vue";

const appName = computed(() => preferences.app.name)

</script>


<template>
  <AuthPageLogin :app-name="appName" />
</template>

<style scoped></style>
