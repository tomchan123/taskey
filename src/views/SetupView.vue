<script setup lang="ts">
import SetupStep from '@/components/setup/SetupStep.vue'
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <header class="mb-8 flex flex-col gap-y-2 text-center">
      <h1 class="text-3xl">Welcome to Taskey</h1>
      <p class="text-foreground/50">To get started, please let us know more about yourself.</p>
    </header>
    <main class="w-full sm:w-xl">
      <SetupStep title="Your Details" status="completed" icon="lucide:circle-user">
        This will be the inputs
      </SetupStep>
    </main>
  </div>
</template>
