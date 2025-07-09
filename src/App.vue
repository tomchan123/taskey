<template>
  <div :class="{ dark: mode == 'dark' }">
    <h1>Taskey</h1>
  </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const mode = useColorMode()
</script>
