import type { Meta, StoryObj } from "@storybook/react"

import { ReloadButton } from "../components"

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof ReloadButton> = {
  title: "Components/Button/Reload Button",
  component: ReloadButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
}

export default meta
type Story = StoryObj<typeof ReloadButton>

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
