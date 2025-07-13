<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { RouterView } from 'vue-router'

const mode = useColorMode()
</script>

<template>
  <div :class="{ dark: mode == 'dark' }">
    <h1>Taskey Title</h1>
    <main>
      <RouterView />
    </main>
  </div>
</template>
