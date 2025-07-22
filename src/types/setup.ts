import type { IconifyIcon } from '@iconify/vue'

export type StepInfo = {
  status: 'completed' | 'locked' | 'current'
  title: string
  icon: string | IconifyIcon
}
