<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { RouterView } from 'vue-router'

const mode = useColorMode()
</script>

<template>
  <div :class="{ dark: mode === 'dark' }" class="h-dvh bg-background text-foreground">
    <RouterView />
  </div>
</template>
