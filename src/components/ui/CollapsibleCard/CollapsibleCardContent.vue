<script setup lang="ts">
import { CollapsibleContent } from 'reka-ui'
import { AnimatePresence, motion } from 'motion-v'
import { ref, useTemplateRef, watchEffect } from 'vue'

const contentEl = useTemplateRef('content-el')
const contentElHeight = ref(0)

watchEffect(() => {
  if (contentEl.value) {
    contentElHeight.value = contentEl.value.$el.scrollHeight
  }
})
</script>

<template>
  <AnimatePresence>
    <CollapsibleContent as-child>
      <motion.div
        ref="content-el"
        key="collapsible-card-content"
        class="overflow-hidden"
        :initial="{ height: 0, opacity: 0 }"
        :animate="{ height: contentElHeight, opacity: 1 }"
        :exit="{ height: 0, opacity: 0 }"
        :transition="{
          duration: 0.3,
          ease: 'easeInOut',
        }"
      >
        <slot />
      </motion.div>
    </CollapsibleContent>
  </AnimatePresence>
</template>
