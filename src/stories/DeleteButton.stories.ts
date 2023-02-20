import type { Meta, StoryObj } from "@storybook/react"

import { DeleteButton } from "../components"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof DeleteButton> = {
  title: "Components/Button/Delete Button",
  component: DeleteButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
}

export default meta
type Story = StoryObj<typeof DeleteButton>

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
}

export const Secondary: Story = {
  args: {
    label: "Button",
  },
}

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
}

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
}
