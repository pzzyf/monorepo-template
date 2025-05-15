<script setup lang="ts">
import AuthenticationFormView from "./form.vue";
import { preferences } from '@afe1/preferences';

interface Props {
  appName: string,
  copyright: boolean
}

const props = withDefaults(defineProps<Props>(), {
  appName: '',
  copyright: true
})

</script>

<template>
  <div class="min-h-full flex select-none overflow-x-hidden">
    <div class="flex items-center justify-center relative w-full">
      <div class="login-background absolute left-0 top-0 size-full"></div>
      <AuthenticationFormView
        class="md:bg-background shadow-primary/5 shadow-float w-full rounded-3xl pb-20 md:w-2/3 lg:w-1/2 xl:w-[36%]">
        <template v-if="props.copyright" #copyright>
          <slot name="copyright">
            <div>123</div>
          </slot>
        </template>
      </AuthenticationFormView>
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
