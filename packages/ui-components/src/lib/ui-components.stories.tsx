import type { Meta, StoryObj } from '@storybook/react'
import { UiComponents } from './ui-components'

const meta: Meta<typeof UiComponents> = {
  title: 'UiComponents/Dummy',
  component: UiComponents,
}

export default meta

type Story = StoryObj<typeof UiComponents>

export const Default: Story = {
  args: {
    // Add default props here if needed
  },
}
