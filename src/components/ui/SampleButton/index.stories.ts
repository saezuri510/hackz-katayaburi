import { Meta, StoryObj } from "@storybook/react";

import { SampleButton } from ".";

type Story = StoryObj<typeof SampleButton>;

const meta: Meta<typeof SampleButton> = {
  args: {
    children: "ボタン",
  },
  argTypes: {
    className: { control: { type: "text" } },
  },
  component: SampleButton,
  tags: ["autodocs"],
  title: "UI/SampleButton",
};

export const _Button: Story = {};

export default meta;
