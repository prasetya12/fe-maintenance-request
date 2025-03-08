import { LoadingCircle } from './loading-circle'
import { LoadingDots } from './loading-dots'
import { LoadingSpinner } from './loading-spinner'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'ui/Common',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HTMLElement>

export default meta
type Story = StoryObj<typeof meta>

export const loadingSpinner: Story = {
  args: {},
  render: LoadingSpinner,
}

export const loadingCirlce: Story = {
  args: {},
  render: LoadingCircle,
}

export const loadingDots: Story = {
  args: {},
  render: LoadingDots,
}
