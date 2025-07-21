<script setup lang="ts">
import { CollapsibleRoot } from 'reka-ui'

interface IProps {
  disabled?: boolean
  open: boolean
}
const { open, disabled = false } = defineProps<IProps>()
</script>

<template>
  <CollapsibleRoot
    :open="open"
    :disabled="disabled"
    :unmount-on-hide="true"
    class="bg-card text-card-foreground rounded-2xl p-4"
  >
    <slot />
  </CollapsibleRoot>
</template>
