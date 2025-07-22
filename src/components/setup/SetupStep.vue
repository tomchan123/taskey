<script setup lang="ts">
import CollapsibleCard from '@/components/ui/CollapsibleCard/CollapsibleCard.vue'
import CollapsibleCardContent from '@/components/ui/CollapsibleCard/CollapsibleCardContent.vue'
import CollapsibleCardHeader from '@/components/ui/CollapsibleCard/CollapsibleCardHeader.vue'
import { computed } from 'vue'
import { Icon, type IconifyIcon } from '@iconify/vue'

interface IProps {
  status: 'completed' | 'locked' | 'current'
  title: string
  icon: string | IconifyIcon
}
const { status, title } = defineProps<IProps>()

const cardActive = computed(() => status === 'current')
</script>

<template>
  <CollapsibleCard
    :open="cardActive"
    :disabled="!cardActive"
    :class="{ 'bg-gray-300/70': status === 'completed' }"
  >
    <CollapsibleCardHeader class="flex items-center gap-x-2">
      <Icon :icon class="text-xl" />
      <h2 class="grow text-lg font-medium">{{ title }}</h2>
      <Icon
        icon="lucide:circle-check"
        class="text-xl text-emerald-500"
        v-if="status === 'completed'"
      />
    </CollapsibleCardHeader>
    <CollapsibleCardContent>
      <slot />
    </CollapsibleCardContent>
  </CollapsibleCard>
</template>
