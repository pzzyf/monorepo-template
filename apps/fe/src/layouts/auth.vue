<script setup lang="ts">

import { AuthPageLogin } from "@afe1/layouts"
import { preferences } from "@afe1/preferences";
import { computed } from "vue";

const appName = computed(() => preferences.app.name)

</script>


<template>
  <div>
    <AuthPageLogin :app-name="appName" />
  </div>
</template>

<style scoped></style>
