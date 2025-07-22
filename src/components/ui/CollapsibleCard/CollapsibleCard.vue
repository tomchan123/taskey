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
    class="rounded-4xl bg-card px-8 py-4 text-card-foreground data-disabled:bg-muted/50 data-disabled:text-muted-foreground"
  >
    <slot />
  </CollapsibleRoot>
</template>
