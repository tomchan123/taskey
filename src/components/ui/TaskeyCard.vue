<script setup lang="ts">
import { tv, type VariantProps } from 'tailwind-variants'

const card = tv({
  base: 'bg-card text-card-foreground p-4',
  variants: {
    rounded: {
      small: 'rounded-xl',
      normal: 'rounded-xl',
      large: 'rounded-4xl',
    },
  },
  defaultVariants: {
    rounded: 'normal',
  },
})
type CardVariant = VariantProps<typeof card>

interface IProps {
  rounded?: CardVariant['rounded']
}
const props = defineProps<IProps>()
</script>

<template>
  <div :class="card(props)">
    <slot />
  </div>
</template>
