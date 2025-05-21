<script setup lang="ts">

import Title from './auth-title.vue';
import { Afe1Test } from "@afe1-core/shadcn-ui"

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

    <div class="mb-6 flex justify-between">
      <div class="flex justify-center items-center">
        <Afe1Test />
        <div>记住账号？</div>
      </div>
      <div>忘记密码</div>
    </div>

  </div>
</template>

<style scoped></style>
