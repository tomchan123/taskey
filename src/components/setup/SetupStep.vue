<script setup lang="ts">
import CollapsibleCard from '@/components/ui/CollapsibleCard/CollapsibleCard.vue'
import CollapsibleCardContent from '@/components/ui/CollapsibleCard/CollapsibleCardContent.vue'
import CollapsibleCardHeader from '@/components/ui/CollapsibleCard/CollapsibleCardHeader.vue'
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import type { StepInfo } from '@/types/setup'

type IProps = StepInfo
const { status, title } = defineProps<IProps>()

const cardActive = computed(() => status === 'current')
</script>

<template>
  <CollapsibleCard
    :open="cardActive"
    :disabled="!cardActive"
    :class="{ 'bg-gray-300/70': status === 'completed' }"
  >
    <CollapsibleCardHeader class="flex items-center gap-x-2 text-lg">
      <Icon :icon />
      <h2 class="grow font-medium">{{ title }}</h2>
      <Icon v-if="status === 'completed'" icon="lucide:circle-check" class="text-emerald-500" />
    </CollapsibleCardHeader>
    <CollapsibleCardContent>
      <slot />
    </CollapsibleCardContent>
  </CollapsibleCard>
</template>
