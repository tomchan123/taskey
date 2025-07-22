<script setup lang="ts">
import SetupStep from '@/components/setup/SetupStep.vue'
import type { StepInfo } from '@/types/setup'
import { ref } from 'vue'

const steps = ref<StepInfo[]>([
  {
    status: 'current',
    title: 'Personal Details',
    icon: 'lucide:circle-user',
  },
  {
    status: 'locked',
    title: 'System Preferences',
    icon: 'lucide:settings',
  },
  {
    status: 'locked',
    title: 'Create Workspace',
    icon: 'lucide:table-2',
  },
])
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <header class="mb-10 flex flex-col gap-y-2 text-center">
      <h1 class="text-3xl">Welcome to Taskey</h1>
      <p class="text-foreground/50">To get started, please let us know more about yourself.</p>
    </header>
    <main class="flex w-full flex-col gap-y-6 sm:w-xl">
      <SetupStep v-for="(step, index) in steps" :key="step.title" v-bind="step">
        <p>This is some content</p>
        <button
          @click="
            () => {
              step.status = 'completed'
              steps[index + 1].status = 'current'
            }
          "
        >
          Next
        </button>
      </SetupStep>
    </main>
  </div>
</template>
