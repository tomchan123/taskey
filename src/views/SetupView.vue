<script setup lang="ts">
import CollapsibleCard from '@/components/ui/CollapsibleCard/CollapsibleCard.vue'
import CollapsibleCardContent from '@/components/ui/CollapsibleCard/CollapsibleCardContent.vue'
import CollapsibleCardHeader from '@/components/ui/CollapsibleCard/CollapsibleCardHeader.vue'
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center">
    <header class="mb-8 flex flex-col gap-y-2 text-center">
      <h1 class="text-3xl">Welcome to Taskey</h1>
      <p class="text-foreground/50">To get started, please let us know more about yourself.</p>
    </header>
    <main class="w-full sm:w-xl">
      <CollapsibleCard :open="true">
        <CollapsibleCardHeader>Your Details</CollapsibleCardHeader>
        <CollapsibleCardContent>Name input placeholder</CollapsibleCardContent>
      </CollapsibleCard>
    </main>
  </div>
</template>
