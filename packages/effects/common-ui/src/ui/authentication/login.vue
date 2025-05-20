<script setup lang="ts">

import Title from './auth-title.vue';

defineOptions({
  name: 'AuthenticationLogin',
});

</script>

<template>
  <div>
    <slot name="title">
      <Title>
        <slot name="title">
          欢迎回来👋🏻
        </slot>
        <template #desc>
          <span class="text-muted-foreground">
            <slot name="subTitle">
              请输入您的帐户信息以开始管理您的项目
            </slot>
          </span>
        </template>
      </Title>
    </slot>
  </div>
</template>

<style scoped></style>
