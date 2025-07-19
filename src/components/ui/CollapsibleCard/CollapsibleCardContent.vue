<script setup lang="ts">
import { CollapsibleContent } from 'reka-ui'
</script>

<template>
  <CollapsibleContent
    class="data-[state=open]:animate-collapsible-slide-down data-[state=closed]:animate-collapsible-slide-up"
  >
    <slot />
  </CollapsibleContent>
</template>

<style lang="css"></style>
