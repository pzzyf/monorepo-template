<script setup>
import { ConfigProvider, App } from "ant-design-vue"
</script>

<template>
  <ConfigProvider>
    <App>
      <RouterView />
    </App>
  </ConfigProvider>
</template>
